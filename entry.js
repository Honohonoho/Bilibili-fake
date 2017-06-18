const $ = require('jquery')

import {Carousel} from './src/js/Carousel'
import {TabSwitch} from './src/js/TabSwitch'

Carousel.init([
    $('.rec-carousel'),
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
    $('.moive >.moive-right'),
])
