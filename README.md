# 哔哩哔哩 (゜-゜)つロ 干杯~-bilibili
![](http://upload-images.jianshu.io/upload_images/5548587-0ad8817cb1ecc11e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### 前言
大家好，之前的ToDo应用大家体验过了吗？这次带来的是国内某视频弹幕网站的页面（bilibili），作为一名B站的重度用户，所以一直想自己写一个B站页面挑战一下，二话不说，搞起~
### 使用的技术
之前为了做ToDo，所以上手了React，现在回过头用jQuery来写页面的交互，发现有些API都忘记怎么用了，吓得我赶紧把之前的学习笔记复习了一遍，才有点回忆起的感觉。    

1.**HTML，CSS(3)**   

B站为了兼容IE，所以布局以Float为主，本人自从接触到了Flex布局，便彻底放弃了Float，什么兼容，边儿待着吧，自己的页面我说了算，顺便感谢下方方老师对Flex的推荐，Flex大法好！
CSS用了CSS3里面的一些动画效果，但还是以CSS为主。      

2.**jQuery**   

交互效果，轮播，鼠标事件，导航切换及各种姿势的切换效果都是用jQuery完成。每种效果采用了构造函数模式和继承来封装，达到了可复用性。    

3.**webpack**   

导入各个组件，用的是ES6的import和export语法（主要是好用），所以还要npm i -save 相关的babel，大家不要忘了，最后把js文件打包为一个整体。我是在前期就已经把页面分为一块一块的部分，CSS就直接在head标签里导入了。   
### 思路
说说我是怎么构思的，先看看B站的页面从动画板块开始，是不是布局都长得差不多，所以可以分版块来写，最后合并进index.html里，每个板块里面元素的class命名可以有规律一些，方便些CSS和jQuery，下面是我的分版块目录   

![](http://upload-images.jianshu.io/upload_images/5548587-ce7babb98c0948f4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)   

合并完后就可以把分开写的文件夹删掉了，但我选择留着。。。   

css和js目录   

![](http://upload-images.jianshu.io/upload_images/5548587-b99b4c915248f92d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
### 预览
也没啥值得说的，大家就自己去看页面吧。。  

[在线预览](https://honohonoho.github.io/Bilibili-fake/)   

那个，觉得看着顺眼的，就给个star吧，小弟在此谢过了（逃~）

李祺 ---2017年6月