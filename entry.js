const $ = require('jquery')

import {Carousel} from './src/js/Carousel'
import {TabSwitch} from './src/js/TabSwitch'
import {HoverColorChange} from './src/js/HoverColorChange'
import {InfoCard} from './src/js/Infocard'

Carousel.init([
    // $('.rec-carousel'),
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
    $('.header >.nav-guide >.guide-wrapper >ul >.square'),
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

InfoCard.init([$('.recommend >.rec-ct')])


