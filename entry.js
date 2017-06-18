const $ = require('jquery')

import {Carousel} from './src/js/Carousel'
import {TabSwitch} from './src/js/TabSwitch'
import {HoverColorChange} from './src/js/HoverColorChange'

Carousel.init([
    $('.rec-carousel'),
    $('.live >.live-right >.tab-item >.carousel-outside >.recommend >.carousel-inside'),
    $('.bangumi >.bangumi-right >.carousel-inside')
]);

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

HoverColorChange.init([
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


