
// 鼠标移入移出事件
function hoverColorChange($node){
    this.$node = $node;
    this.init();
    this.bind();
}
hoverColorChange.prototype.init = function(){
    var $c = this.$c = this.$node.find('.hot'),
        $item = this.$item = this.$node.find('.item'),
        $aItem = this.$aItem = this.$node.find('.a-item'),
        $i = this.$i = this.$node.find('.info a'),
        $t = this.$t = this.$node.find('.toggle');
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
    this.$t.on('mouseenter',function(e){
        $dropList = $(e.currentTarget).find('.dropdown-list');
        $t = $(e.currentTarget);
        $dropList.css({
            'display': 'inline-block'
        })
        $t.css({
            'border-bottom': '0',
            'border-radius': '4px 4px 0 0'
        })
        $dropList.on('mouseenter',function(e){
            $dropLi = $(e.currentTarget).find('li')
            $dropLi.css({
                'background': '#99a2aa'
            })
        })
        $dropList.on('mouseleave',function(e){
            $dropLi = $(e.currentTarget).find('li')
            $dropLi.css({
                'background': '#fff'
            })
        })
    })
    this.$t.on('mouseleave',function(e){
        $dropList = $(e.currentTarget).find('.dropdown-list');
        $t = $(e.currentTarget);
        $dropList.css({
            'display': 'none'
        })
        $t.css({
            'border-bottom': '1px solid #ccd0d7',
            'border-radius': '4px'
        })
    })
    this.$aItem.on('mouseenter',function(e){
        $p = $(e.currentTarget).find('.a-hover');
        $p.css({
            'color': '#00a1d6',
            'transition': 'all .2s linear'
        })
    })
    this.$aItem.on('mouseleave',function(e){
        $p = $(e.currentTarget).find('.a-hover');
        $p.css({'color': '#222'})
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
HoverColorChange.init($('.anime-left'));
HoverColorChange.init($('.anime-right'));

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
        $nodeLength = $tabPanel.length;

        $nodeList.width($firstNode.width() * $nodeLength);//容器宽度自适应
        this.curIndex = 1;
        this.isAnimate = false;
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
    //   if(_this.curIndex < 0){ //当滚到第一张之前
    //     _this.$nodeList.css({'left': -(_this.$nodeLength*_this.$nodeWidth)}); //回到最后一张图片
    //     _this.curIndex = _this.$nodeLength - 1;
    //   }
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

  TabCarousel.init($('.anime-right'));  //启动
