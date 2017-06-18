// 导航切换轮播
const $ = require('jquery')

function tabSwitch($ct){
    this.$ct = $ct;
    this.init();
    this.bind();
  }

  tabSwitch.prototype.init = function(){ //初始化函数
    var $nodeList = this.$nodeList = this.$ct.find('.tab-item >.carousel-outside'),
        $tab = this.$tab = this.$ct.find('.tab'),
        $tabPanel = this.$tabPanel = $tab.find('.tab-panel'),  
        $firstNode = $nodeList.find('div').first(),
        $nodeWidth = this.$nodeWidth = $firstNode.width(),      
        $nodeLength = $nodeList.children().length;

        $nodeList.width($firstNode.width() * $nodeLength);//容器宽度自适应
        this.curIndex = 1;
        this.isAnimate = false;
        if(this.$ct.hasClass('live-right')){
            this.curIndex = 2;
            $nodeList.css({'left': -($nodeWidth * ($nodeLength-1) )});
        }
  }

  tabSwitch.prototype.bind = function(){
    var _this = this;
    this.$tabPanel.on('click',function(){
      var panelIndex = $(this).index();
      if(panelIndex > _this.curIndex){
        _this.playNext(panelIndex - _this.curIndex);
      }else if(panelIndex < _this.curIndex){
        _this.playPre(_this.curIndex - panelIndex);
      } 
    })
  }

  tabSwitch.prototype.playPre = function(n){
    var _this = this;
    var n = n || 1;
    if(this.isAnimate) return; //状态锁，防止重复点击
    this.isAnimate = true;
    this.$nodeList.animate({
      left: '+=' + this.$nodeWidth*n //不相邻的图片距离
    },function(){
      _this.curIndex -= n;
      _this.tabChange();
    })
    this.isAnimate = false;
  }

  tabSwitch.prototype.playNext = function(n){
    var _this = this;
    var n = n || 1;
    if(this.isAnimate) return; //状态锁，防止重复点击
    this.isAnimate = true;
    this.$nodeList.animate({
      left: '-=' + this.$nodeWidth*n //不相邻的图片距离
    },function(){
      _this.curIndex += n;
      _this.tabChange();
    })
    this.isAnimate = false;
  }

  tabSwitch.prototype.tabChange = function(){
    this.$tab.children().removeClass('on')
        .eq(this.curIndex).addClass('on') //链式调用
  }

  export var TabSwitch = (function(){
    return {
        init: function($nodeList){
            $.each($nodeList,function(index,node){
                new tabSwitch($(node));
            })
        }
    }
  })()
