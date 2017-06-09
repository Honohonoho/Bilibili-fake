function Carousel($ct){
    this.$ct = $ct;
    this.init();
    this.bind();
    this.autoPlay();
  }

  Carousel.prototype.init = function(){ //初始化函数
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
    // console.log(imgLength)
    // console.log($imgList.children().length)
  }

  Carousel.prototype.bind = function(){

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

  Carousel.prototype.playPre = function(n){
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

  Carousel.prototype.playNext = function(n){
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

  Carousel.prototype.playDot = function(){
    this.$dot.children().removeClass('active')
        .eq(this.curPageIndex).addClass('active') //链式调用
  }

  Carousel.prototype.autoPlay = function(){
    var _this = this;
      setInterval(function(){
      _this.playNext(1);
    }, 3000);
  }


  _Carousel = (function(){
    return {
        init: function($ct){
            $ct.each(function(index,node){
                new Carousel($(node));
            })
        }
    }
  })()

_Carousel.init($('.carousel-inside'));  //启动

// 鼠标移入移出事件
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
        $t = $(e.currentTarget).find('.type');
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
        $p = $(e.currentTarget).find('.a-hover');
        $m = $(e.currentTarget).find('.mask');
        $t = $(e.currentTarget).find('.type');
        $p.css({'color': '#222'})
        $m.css({'opacity': '0'})
        $t.css({'opacity': '1'})
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
HoverColorChange.init($('.live-left'));

// 导航切换轮播
function tabCarousel($ct){
    this.$ct = $ct;
    this.init();
    this.bind();
  }

  tabCarousel.prototype.init = function(){ //初始化函数
    var $nodeList = this.$nodeList = this.$ct.find('.carousel-outside'),
        $tab = this.$tab = this.$ct.find('.tab'),
        $tabPanel = this.$tabPanel = $tab.find('.tab-panel'),  
        $firstNode = $nodeList.find('div').first(),
        $nodeWidth = this.$nodeWidth = $firstNode.width(),      
        $nodeLength = $nodeList.children().length;

        $nodeList.width($firstNode.width() * $nodeLength);//容器宽度自适应
        this.curIndex = 2;
        this.isAnimate = false;
        $nodeList.css({'left': -($nodeWidth * ($nodeLength-1) )});
  }

  tabCarousel.prototype.bind = function(){
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

  tabCarousel.prototype.playPre = function(n){
    var _this = this;
    var n = n || 1;
    if(this.isAnimate) return; //状态锁，防止重复点击
    this.isAnimate = true;
    this.$nodeList.animate({
      left: '+=' + this.$nodeWidth*n //不相邻的图片距离
    },function(){
      _this.curIndex -= n;
      if(_this.curIndex < 0){ //当滚到第一张之前
        _this.$nodeList.css({'left': -(_this.$nodeLength*_this.$nodeWidth)}); //回到最后一张图片
        _this.curIndex = _this.$nodeLength - 1;
      }
      _this.tabChange();
    })
    this.isAnimate = false;
  }

  tabCarousel.prototype.playNext = function(n){
    var _this = this;
    var n = n || 1;
    if(this.isAnimate) return; //状态锁，防止重复点击
    this.isAnimate = true;
    this.$nodeList.animate({
      left: '-=' + this.$nodeWidth*n //不相邻的图片距离
    },function(){
      _this.curIndex += n;
      if(_this.curIndex === _this.$nodeLength){ //当滚到最后一张之后
        _this.$nodeList.css({'left': -_this.$nodeWidth}); //回到第一张图片
        _this.curIndex = 0;
      }
      _this.tabChange();
    })
    this.isAnimate = false;
  }

  tabCarousel.prototype.tabChange = function(){
    this.$tab.children().removeClass('on')
        .eq(this.curIndex).addClass('on') //链式调用
  }

  TabCarousel = (function(){
    return {
        init: function($ct){
            $ct.each(function(index,node){
                new tabCarousel($(node));
            })
        }
    }
  })()

  //return _Carousel;

  TabCarousel.init($('.live-right'));  //启动
