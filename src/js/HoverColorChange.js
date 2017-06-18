// 鼠标移入移出事件
const $ = require('jquery')

function hoverColorChange($node){
    this.$node = $node;
    this.init();
    this.bind();
}
hoverColorChange.prototype.init = function(){
    var $hot = this.$hot = this.$node.find('.hot'),
        $item = this.$item = this.$node.find('.item'),
        $aItem = this.$aItem = this.$node.find('.a-item'),
        $i = this.$i = this.$node.find('.info a'),
        $t = this.$t = this.$node.find('.toggle'),
        $square = this.$square = this.$node.find('.square >a');
}
hoverColorChange.prototype.bind = function(){
    //header 广场 直播 小黑屋
    this.$square.on('mouseenter',function(e){
        var $p = $(e.currentTarget).find('span');
        $p.css({'color': '#00a1d6'})
    })
    this.$square.on('mouseleave',function(e){
        var $p = $(e.currentTarget).find('span');
        $p.css({'color': '#222'})
    })
    //分区热点标题
    this.$hot.on('mouseenter',function(e){
        var $p = $(e.currentTarget).find('.a-hover');
        $p.css({
            'color': '#00a1d6',
            'transition': 'all .2s linear'
        })
    })
    this.$hot.on('mouseleave',function(e){
        var $p = $(e.currentTarget).find('.a-hover');
        $p.css({'color': '#222'})
    })

    // this.$i.on('mouseenter',function(e){
    //     var $p = $(e.currentTarget).find('.a-hover');
    //     $p.css({
    //         'color': '#00a1d6',
    //         'transition': 'all .2s linear'
    //     })
    // })
    // this.$i.on('mouseleave',function(e){
    //     var $p = $(e.currentTarget).find('.a-hover');
    //     $p.css({'color': '#6d757a'})
    // })
    // 分区投稿视频
    this.$item.on('mouseenter',function(e){
        var $p = $(e.currentTarget).find('.a-hover');
        var $m = $(e.currentTarget).find('.mask');
        var $t = $(e.currentTarget).find('.type');
        $p.css({'color': '#00a1d6',
                'transition': 'all .2s linear'
        })
        $m.css({'opacity': '1',
                'transition': 'opacity .3s'
        })
        $t.css({'opacity': '0',
                'transition': 'opacity .3s'
        })
    })
    this.$item.on('mouseleave',function(e){
        var $p = $(e.currentTarget).find('.a-hover');
        var $m = $(e.currentTarget).find('.mask');
        var $t = $(e.currentTarget).find('.type');
        $p.css({'color': '#222'})
        $m.css({'opacity': '0'})
        $t.css({'opacity': '1'})
    })
    //分区排行 三日，一周切换
    this.$t.on('mouseenter',function(e){
        var $dropList = $(e.currentTarget).find('.dropdown-list');
        var $t = $(e.currentTarget);
        $dropList.css({
            'display': 'inline-block'
        })
        $t.css({
            'border-bottom': '0',
            'border-radius': '4px 4px 0 0'
        })
        $dropList.on('mouseenter',function(e){
            var $dropLi = $(e.currentTarget).find('li')
            $dropLi.css({
                'background': '#99a2aa'
            })
        })
        $dropList.on('mouseleave',function(e){
            var $dropLi = $(e.currentTarget).find('li')
            $dropLi.css({
                'background': '#fff'
            })
        })
    })
    this.$t.on('mouseleave',function(e){
        var $dropList = $(e.currentTarget).find('.dropdown-list');
        var $t = $(e.currentTarget);
        $dropList.css({
            'display': 'none'
        })
        $t.css({
            'border-bottom': '1px solid #ccd0d7',
            'border-radius': '4px'
        })
    })
    // 分区排行榜视频
    this.$aItem.on('mouseenter',function(e){
        var $p = $(e.currentTarget).find('.a-hover');
        $p.css({
            'color': '#00a1d6',
            'transition': 'all .2s linear'
        })
    })
    this.$aItem.on('mouseleave',function(e){
        var $p = $(e.currentTarget).find('.a-hover');
        $p.css({'color': '#222'})
    })
}
export var HoverColorChange = (function(){
    return {
        init: function($itemList){
            $.each($itemList,function(index,node){
                new hoverColorChange($(node));
            })
        }
    }
})()


