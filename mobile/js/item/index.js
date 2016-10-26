/**
 * 首页主逻辑
 * @class Index
 * @constructor
 * @param {object} options 传递进来的参数
 */
var Index = function(options) {
    this.options = $.extend(this.dOptions, options || {});
    this.init();
};

/**
 * Index类的原型
 * @type {Object}
 */
Index.prototype = {
    constructor: Index,
    //默认的配置
    dOptions: {
        util: null,
        zan: null,
        rows: 0,
        conWidth: 0,
        conHeight: 0,
        itemWidth: 0,
        itemHeight: 0,
        imgSrcTpl: 'img/$num$.jpg'
    },

    /**
     * 初始化
     */
    init: function() {
        var self = this, ops = this.options;
        this.bindEvent();
        this.getAndSetContainerSize();
        ops.itemWidth = this.getItemWidth();
        ops.rows = this.getRows();
        this.render();
        this.setItemsImgBg();
    },

    /**
     * 绑定事件
     */
    bindEvent: function () {
        this.preventTouchMove();
        this.bindEventZanClick();
    },

    /**
     * 阻止手指触摸事件
     */
    preventTouchMove: function () {
        $(document.body).on('touchmove', function (e) {
            e.preventDefault();
        });
    },

    /**
     * 点赞的点击事件
     */
    bindEventZanClick: function () {
        var self = this, ops = this.options;
        $('#zanId').on('touchstart', function (e) {
            ops.zan.createZanDom();
        });
    },

    /**
     * 获取并设置屏幕的大小
     */
    getAndSetContainerSize: function (){
        var self = this, ops = this.options;
        var width = $('#containerId').width();
        var height = $('#containerId').height();
        ops.conWidth = width;
        ops.conHeight = height;
    },

    /**
     * 获取每一项的宽度
     */
    getItemWidth: function () {
        var self = this, ops = this.options;
        var firstItem = $('.main-item', '#containerId')[0];
        return $(firstItem).width();
    },

    /**
     * 设置行数
     */
    getRows: function () {
        var self = this, ops = this.options;
        var rows = parseInt(ops.conHeight / ops.itemWidth, 10);
        return rows;
    },


    /**
     * 绘制主体图片内容
     */
    render: function () {  
        var self = this, ops = this.options; 
        var html = '';
        for(var i = 0; i < ops.rows; i++) {
            html += $('#rowItemsTplId')[0].value;
        }
        $('#containerId')[0].innerHTML = html;
    },

    /**
     * 设置每个格子的背景图片
     */
    setItemsImgBg: function () {
        var self = this, ops = this.options;
        var items = $('.main-item', '#containerId');
        for (var i = 0, len = items.length; i < len; i++) {
            var src = ops.imgSrcTpl.replace(/\$num\$/g, i + 1);
            $(items[i]).css({
                'background': 'url(' + src + ') no-repeat',
                'background-size': '160% auto',
                'background-position': 'center 20%'
            });
        }
    }
}




















