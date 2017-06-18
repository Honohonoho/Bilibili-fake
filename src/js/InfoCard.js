// 鼠标移入展示视频信息
const $ = require('jquery')

function infoCard($node){
    this.$node = $node;
    this.init();
    this.bind();
}
infoCard.prototype.init = function(){
    var $itemList = this.$itemList = this.$node.find('.rec-item');
}
infoCard.prototype.bind = function(){
    //分区热点标题
    this.$itemList.on('mouseenter',function(e){
        var $item = $(e.currentTarget).find('.info-card'),
            $text = $(e.currentTarget).find('.info');
        $item.css({
            'top': '0',
            'overflow': 'visible',
            'height': '100%',
            'background': 'rgba(0,0,0,.8)'
        })
        $text.css({
            'opacity': '1',
            'transition': 'opacity .5s linear'
        })
    })
    this.$itemList.on('mouseleave',function(e){
        var $item = $(e.currentTarget).find('.info-card'),
            $text = $(e.currentTarget).find('.info');
        $item.css({
            'top': '68px',
            'height': '40px',
            'overflow': 'hidden',
            'background': 'linear-gradient(transparent,rgba(0,0,0,.1) 20%,rgba(0,0,0,.2) 35%,rgba(0,0,0,.6) 65%,rgba(0,0,0,.9))'
        })
        $text.css({
            'opacity': '0'
        })
    })

}
export var InfoCard = (function(){
    return {
        init: function($itemList){
            $.each($itemList,function(index,node){
                new infoCard($(node));
            })
        }
    }
})()