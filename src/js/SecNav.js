//header二级菜单
const $ = require('jquery')

function secNav($node){
    this.$node = $node;
    this.init();
    this.bind();
}
secNav.prototype.init = function(){
    var $navItem = this.$navItem = this.$node.find('.nav >li');
}
secNav.prototype.bind = function(){
    this.$navItem.on('mouseenter',function(e){
        var $secNav = $(e.currentTarget).find('ul');
        $secNav.css({
            'display': 'flex'
        })
    })
    this.$navItem.on('mouseleave',function(e){
        var $secNav = $(e.currentTarget).find('ul');
        $secNav.css({
            'display': 'none'
        })
    })
}
export var SecNav = (function(){
    return {
        init: function($itemList){
            $.each($itemList,function(index,node){
                new secNav($(node));
            })
        }
    }
})()