
function hoverColorChange($node){
    this.$node = $node;
    this.init();
    this.bind();
}
hoverColorChange.prototype.init = function(){
    var $c = this.$c = this.$node.find('.hot'),
        $item = this.$item = this.$node.find('.item'),
        $i = this.$i = this.$node.find('.info a');
}
hoverColorChange.prototype.bind = function(){
    this.$c.on('mouseenter',function(e){
        $p = $(e.currentTarget).find('.a-hover');
        $p.css({
            'color': '#00a1d6',
            'transition': 'all .2s linear'
        })
    })
    this.$c.on('mouseleave',function(e){
        $p = $(e.currentTarget).find('.a-hover');
        $p.css({'color': '#222'})
    })
    this.$i.on('mouseenter',function(e){
        $p = $(e.currentTarget).find('.a-hover');
        $p.css({
            'color': '#00a1d6',
            'transition': 'all .2s linear'
        })
    })
    this.$i.on('mouseleave',function(e){
        $p = $(e.currentTarget).find('.a-hover');
        $p.css({'color': '#6d757a'})
    })
    this.$item.on('mouseenter',function(e){
        $p = $(e.currentTarget).find('.a-hover');
        $m = $(e.currentTarget).find('.mask');
        $p.css({'color': '#00a1d6',
                'transition': 'all .2s linear'
        })
        $m.css({'opacity': '1',
                'transition': 'opacity .3s'
        })
    })
    this.$item.on('mouseleave',function(e){
        $p = $(e.currentTarget).find('.a-hover');
        $m = $(e.currentTarget).find('.mask');
        $p.css({'color': '#222'})
        $m.css({'opacity': '0'})
    })
}
HoverColorChange = (function(){
    return {
        init: function($item){
            $item.each(function(index,node){
                new hoverColorChange($(node));
            })
        }
    }
})()
HoverColorChange.init($('.push'));