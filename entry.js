const $ = require('jquery')

import {Carousel} from './src/js/Carousel'
import {TabSwitch} from './src/js/TabSwitch'
import {HoverColorChange} from './src/js/HoverColorChange'
import {InfoCard} from './src/js/Infocard'
import {SecNav} from './src/js/SecNav'
// 滚动轮播
Carousel.init([
    $('.rec-carousel'),
    $('.live >.live-right >.tab-item >.carousel-outside >.recommend >.carousel-inside'),
    $('.bangumi >.bangumi-right >.carousel-inside')
]);
//导航切换轮播
TabSwitch.init([
    $('.live >.live-right'),
    $('.anime >.anime-right'),
    $('.music >.music-right'),
    $('.dance >.dance-right'),
    $('.game >.game-right'),
    $('.tech >.tech-right'),
    $('.life >.life-right'),
    $('.moive >.moive-right')
])
//其他鼠标移入事件
HoverColorChange.init([
    $('.header >.nav-guide >.guide-wrapper >ul'),
    $('.push'),
    $('.live'),
    $('.anime'),
    $('.bangumi-schedule'),
    $('.bangumi'),
    $('.music'),
    $('.dance'),
    $('.game'),
    $('.tech'),
    $('.life'),
    $('.moive')
])
//视频鼠标移入事件
InfoCard.init([$('.recommend >.rec-ct')])
//header二级菜单
SecNav.init([
    $('.header >.nav-guide >.guide-wrapper')
])


