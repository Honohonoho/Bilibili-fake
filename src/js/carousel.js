// 滚动轮播
const $ = require('jquery')

function carousel($ct){
  this.$ct = $ct;
  this.init();
  this.bind();
  this.autoPlay();
}

carousel.prototype.init = function(){ //初始化函数
  var $imgList = this.$imgList = this.$ct.find('.slide'),
      $dot = this.$dot = this.$ct.find('.dot'),
      $dotChild = this.$dotChild = this.$ct.find('.dot li'),  
      $firstImg = $imgList.find('div').first(),
      $lastImg = $imgList.find('div').last(),
      $imgWidth = this.$imgWidth = $firstImg.width();

  this.imgLength = $imgList.children().length; //在clone()之前定义
  this.curPageIndex = 0;
  this.isAnimate = false;

  $imgList.prepend( $lastImg.clone() ); //在第一张前放最后一张图的克隆
  $imgList.append( $firstImg.clone() ); //在最后一张后放第一张图的克隆

  $imgList.width($firstImg.width() * $imgList.children().length); //容器宽度自适应
  $imgList.css({'left': -$imgWidth}); //显示第一张图片
}

carousel.prototype.bind = function(){

  var _this = this;
  this.$dotChild.on('click',function(){
    var dotIndex = $(this).index();
    if(dotIndex > _this.curPageIndex){
      _this.playNext(dotIndex - _this.curPageIndex);
    }else if(dotIndex < _this.curPageIndex){
      _this.playPre(_this.curPageIndex - dotIndex);
    } 
  })
}

carousel.prototype.playPre = function(n){
  var _this = this;
  var n = n || 1;
  if(this.isAnimate) return; //状态锁，防止重复点击
  this.isAnimate = true;
  this.$imgList.animate({
    left: '+=' + this.$imgWidth*n //不相邻的图片距离
  },function(){
    _this.curPageIndex -= n;
    if(_this.curPageIndex < 0){ //当滚到第一张之前
      _this.$imgList.css({'left': -(_this.imgLength*_this.$imgWidth)}); //回到最后一张图片
      _this.curPageIndex = _this.imgLength - 1;
    }
    _this.playDot();
  })
  this.isAnimate = false;
}

carousel.prototype.playNext = function(n){
  var _this = this;
  var n = n || 1;
  if(this.isAnimate) return; //状态锁，防止重复点击
  this.isAnimate = true;
  this.$imgList.animate({
    left: '-=' + this.$imgWidth*n //不相邻的图片距离
  },function(){
    _this.curPageIndex += n;
    if(_this.curPageIndex === _this.imgLength){ //当滚到最后一张之后
      _this.$imgList.css({'left': -_this.$imgWidth}); //回到第一张图片
      _this.curPageIndex = 0;
    }
    _this.playDot();
  })
  this.isAnimate = false;
}

carousel.prototype.playDot = function(){
  this.$dot.children().removeClass('active')
      .eq(this.curPageIndex).addClass('active') //链式调用
}

carousel.prototype.autoPlay = function(){
  var _this = this;
  setInterval(function(){
    _this.playNext(1);
  }, 3000);
}


export var Carousel = (function(){
  return {
      init: function($nodeList){
          $.each($nodeList,function(index,node){
              new carousel($(node));
          })
      }
  }
})()



