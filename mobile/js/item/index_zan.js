/**
 * 首页主逻辑 - 点赞
 * @class Zan
 * @constructor
 * @param {object} options 传递进来的参数
 */
var Zan = function(options) {
    this.options = $.extend(this.dOptions, options || {});
    this.init();
};

/**
 * Index类的原型
 * @type {Object}
 */
Zan.prototype = {
    
    constructor: Zan,

    //默认的配置
    dOptions: {
        disappear: 300
    },

    init: function () {

    },

    /**
     * 创建点赞特效节点
     * @return {[type]} [description]
     */
    createZanDom: function () {
        var ops = this.options;
        var zan = $($('#zanTplId').val()).appendTo(document.body);
        var left = $('#zanId').offset().left + 5;
        var top = $('#zanId').offset().top + 5;
        this.bubble({
            obj: zan[0],
            left: left,
            top: top,
            theta: 0,
            thetaStep: 0.025,
            topDisappear: top - ops.disappear,
            opacity: 1
        });
    },

    /**
     * 开始
     * @param  {[Object]} config [气泡配置]
     */
    bubble: function (config) {
        if (config.top < config.topDisappear) {
            $(config.obj).remove();
        }
        config.opacity -= 0.0023;
        config.top = config.top - 1;
        config.theta += config.thetaStep;
        var newLeft = config.left + 20*Math.sin(config.theta);
        $(config.obj).css({
            top: config.top,
            left: newLeft,
            opacity: config.opacity
        });
        var self = this;
        setTimeout(function () {
            self.bubble({
                obj: config.obj,
                left: config.left,
                top: config.top,
                theta: config.theta,
                thetaStep: config.thetaStep,
                topDisappear: config.topDisappear,
                opacity: config.opacity
            });
        }, 10);
    }


}





