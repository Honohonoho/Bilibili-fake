//番剧更新表 tab切换
const $ = require('jquery')

function tabChange($ct){
    this.$ct = $ct;
    this.init();
    this.bind();
  }

  tabChange.prototype.init = function(){ //初始化函数
    var $tabList = this.$tabList = this.$ct.find('.bangumi-title >.item >.w-item'),
        $item = this.$item = this.$ct.find('.schedule >.sch-item');
  }

  tabChange.prototype.bind = function(){
    var _this = this;
    this.$tabList.on('click',function(){
      var index = $(this).index();
      _this.$tabList.siblings().removeClass('on')
        .eq(index).addClass('on')
      _this.showItem(index)
    })
  }

  tabChange.prototype.showItem = function(index){
    this.$item.siblings().removeClass('on')
        .eq(index).addClass('on')
  }

  export var TabChange = (function(){
    return {
        init: function($nodeList){
            $.each($nodeList,function(index,node){
                new tabChange($(node));
            })
        }
    }
  })()