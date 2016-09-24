/**
 * 工具类
 * @class Util
 * @constructor
 * @param {object} options 传递进来的参数
 */
var Util = function(options) {
    this.options = $.extend(this.dOptions, options || {});
    this.init();
};

/**
 * 工具类的原型设置
 * @type {Object}
 */
Util.prototype = {
    constructor: Util,
    //默认的配置
    dOptions: {
        watchs: []
    },
    init: function() {
        
    }
}


















