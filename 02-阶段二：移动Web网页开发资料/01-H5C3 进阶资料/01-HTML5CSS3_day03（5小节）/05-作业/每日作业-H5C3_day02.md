# 每日作业 - H5C3第3天

​	作业说明：

1. 作业题分为两大部分：基础案例和扩展案例。基础案例为涵盖今日所学知识点的案例，所有学员必须全部完成，不能当日完成的利用自习课时间继续完成。扩展案例为在今日所学知识点的基础上，进行扩展训练，学有余力的同学可以尝试完成，不做强制要求。

2. 每个作业题包含训练描述、训练提示、操作步骤三项。
   - **训练描述**可理解为作业题干，有清晰的要求描述。如果读完训练描述即知道如何操作，后面两项忽略。
   - **训练提示**提供实现思路。如果读完训练描述，不能完成操作，继续查看训练提示。
   - **操作步骤**提供具体详细的实现步骤和代码。如果读完训练提示仍然不会，继续查看操作步骤。

## 基础案例

### 01-《vivo》轮播图进度条

#### 训练描述

原版通过js自动切换，每个拥有类名的元素执行动画，这里完成鼠标经过即可

#### 训练提示

1. 添加背景图片，设置初始化样式
2. 利用盒子，定位盒子的位置，设置li的宽和高
3. 设置span的小高度，设置span的伪元素跟span一样大小，并且左下角对齐，宽度默认为0
4. 当鼠标经过则给伪元素宽度

#### 操作步骤

1. 创建index文件，新建css文件夹，创建base.css文件并初始化基本代码，新建images文件夹

2. 创建index.css保存至css文件夹，首页html文件引入css样式

3. 编写结构代码

   - 创建父盒子，设置嵌套的盒子

     ```java
     	<div class="progress">
     		<ul>
     			<li>
     				<span></span>
     			</li>
     			<li>
     				<span></span>
     			</li>
     		</ul>
     	</div>
     ```

   - 设置默认的样式

     ```java
     html, body {
         height: 100%;
     }

     body {
         background: url(../images/vivo-banner-z3ys-bg.jpg) no-repeat center top;
         background-size: cover;
         position: relative;
     }

     .progress {
         position: absolute;
         display: block;
         width: 100%;
         height: auto;
         bottom: 40px;
         text-align: center;
     }

     .progress li {
         position: relative;
         display: inline-block;
         width: 40px;
         height: 20px;
         margin: 0 4px;
         text-align: center;
         z-index: 3;
         cursor: pointer;
     }

     .progress li span {
         position: absolute;
         width: 40px;
         height: 2px;
         left: 50%;
         margin-left: -20px;
         bottom: 0;
         background-color: rgba(0, 0, 0, .2);
         -webkit-transition: all .3s .1s ease-out;
         transition: all .3s .1s ease-out;
     }
     ```

   - 设置伪元素样式和鼠标经过样式

     ```java
     .progress li span::after {
         content: "";
         position: absolute;
         width: 0;
         height: 100%;
         left: 0;
         bottom: 0;
         background-color: #666;
         -webkit-transition: all .3s .1s ease-out;
         transition: all .3s .1s ease-out;
     }

     .progress li:hover span {
         height: 5px;
     }

     .progress li:hover span::after {
         width: 100%;
         -webkit-transition: width 5s ease;
         transition: width 5s ease;
     }
     ```





### 02- 热点新闻文字持续滚动

#### 训练描述

这种方式一般叫做无缝滚动，通常需要两份内容，滚动停不下来

#### 训练提示

1. 先进行基本的布局，将内容复制一份，排列在一行

2. 声明动画，让第一份盒子出去后，马上就回来，并且运动速率是匀速地
3. 引入动画，重复播放

#### 操作步骤

​     1，创建基本的结构

```java
    <div class="container">
        <div class="gonggao">
            <div class="gg-pic"></div>
            <div class="gg-text">
                <div class="gg-info">
                    <p>从前有座山，山里有座庙，庙里有个页面找呀找不到 </p>
                    <p>从前有座山，山里有座庙，庙里有个页面找呀找不到 </p>
                </div>
            </div>
        </div>
    </div>
```

​      2，排版基本的样式

```java
* {
	margin: 0;
	padding: 0;
}
html,body {
	width: 100%;
	height: 100%;
}
.container {
    max-width: 640px;
    height: 100%;
    margin: 0 auto;
    background-color: #f8f8f8;
}
.gonggao {
    padding-top: 80px;
}
.gg-pic {
    float: left;
    width: 100px;
    height: 40px;
    background-color: sandybrown;
}
.gg-text {
    margin-left: 100px;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    font-family: 'Microsoft Yahei';
    overflow: hidden;
}
.gg-info {
    width: 200%;
    position: relative;
    animation: gonggao 4s linear infinite;
}
.gg-info p {
    position: absolute;
    top: 0;
    width: 50%;
}
.gg-info p:first-child {
    left: 0;
}
.gg-info p:last-child {
    left: 50%;
}

@keyframes gonggao {
    from {
    	transform: translateX(0);
    }
    to {
        transform: translateX(-50%);
    }
}
```

​ 




## 扩展案例

### 03-《迅雷》首页旋转图片

#### 训练描述

​	1，导航底部的线，在鼠标经过的时候有一个以中间向两边打开的过渡

​	2，首屏图片周围有旋转的图片

#### 训练提示

1. 先完成导航，导航通过固定定位在最上面，鼠标经过大盒子还有背景颜色
2. 设置基本的图片，加入其他图片后进行旋转

#### 操作步骤

​	1，新建导航基本的结构
```java
<header>
	<div class="header-inner clearfix">
		<h1 class="xl-logo">
			<img src="images/xl-logo2x.png" alt="">
		</h1>
		<ul class="xl-nav">
			<li class="active"><a href="#">首页</a></li>
			<li><a href="#">产品中心</a></li>
			<li><a href="#">区块链</a></li>
			<li><a href="#">广告服务</a></li>
			<li><a href="#">关于我们</a></li>
			<li><a href="#">投资者关系</a></li>
		</ul>
	</div>
</header>
```
​	2，创建导航CSS样式
```java
header {
	position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    -webkit-transition: .3s ease;
    transition: .3s ease;
}

header:hover {
	background-color: rgba(0,0,0,.8);
}

.header-inner {
	max-width: 1200px;
    margin: 0 auto;
}

.xl-logo {
    float: left;
    margin-top: 14px;
    width: 78px;
    height: 37px;
}

.xl-logo img {
	width: 100%;
	height: 100%;
}

.xl-nav {
	text-align: right;
	white-space: nowrap;
}

.xl-nav li {
	position: relative;
    display: inline-block;
    margin-left: 2.5%;
}

.xl-nav li a {
	display: inline-block;
    font-size: 14px;
    color: #fff;
    padding: 0 10px;
    line-height: 64px;
}

.xl-nav li a::after {
	opacity: 0;
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    -webkit-transform: scaleX(0);
    -ms-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all .4s ease;
    transition: all .4s ease;
    background-color: #fff;
}

.xl-nav li a:hover::after {
	opacity: 1;
    -webkit-transform: scaleX(1);
    -ms-transform: scaleX(1);
    transform: scaleX(1);
}

.xl-nav li.active a::after {
	opacity: 1;
    -webkit-transform: scaleX(1);
    -ms-transform: scaleX(1);
    transform: scaleX(1);
}
```
​	3，创建首屏图片的基本结构
```java
<div class="container">
	<div class="home-inner">
		<div class="home-inner-c">
			<div class="home-inner-pro">
				<div class="earth-box">
					<i class="banner-earth"></i>
				</div>
				<div class="banner-line">
					<i class="circle01"></i>
					<i class="circle02"></i>
				</div>
			</div>
		</div>
	</div>
</div>
```
​	4，声明首屏样式和图片位置

```java
<header>
	<div class="header-inner clearfix">
		<h1 class="xl-logo">
			<img src="images/xl-logo2x.png" alt="">
		</h1>
		<ul class="xl-nav">
			<li class="active"><a href="#">首页</a></li>
			<li><a href="#">产品中心</a></li>
			<li><a href="#">区块链</a></li>
			<li><a href="#">广告服务</a></li>
			<li><a href="#">关于我们</a></li>
			<li><a href="#">投资者关系</a></li>
		</ul>
	</div>
</header>
```

​	5，创建首屏图片基本样式

```java
.home-inner {
	position: relative;
    width: 100%;
    height: 1080px;
    overflow: hidden;
    margin-bottom: -152px;
    background-color: #080325;
    zoom: 0.6;
  	/*缩小当前的盒子*/
}

.home-inner-c {
	position: relative;
    top: 50%;
    left: 50%;
    margin: -540px 0 0 -960px;
    width: 1920px;
    height: 1080px;
    background-image: url(../images/banner_bg.jpg);
    background-repeat: no-repeat;
    background-position: center top;
}

.banner-earth {
	position: absolute;
    top: 82px;
    left: 0;
    right: 0;
    display: block;
    margin: auto;
    background: url(../images/earth01.png) no-repeat;
    width: 730px;
    height: 730px;
}

.banner-line {
	position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    width: 750px;
    height: 750px;
    margin: auto;
}

.banner-line > i {
	position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    margin: auto;
}
```

​	6，创建两个旋转盒子的样式和动画

```java
.circle01 {
	background-image: url(../images/spr_bannerPathway.png);
    background-position: -2436px 0px;
    background-repeat: no-repeat;
    width: 719px;
    height: 719px;
    -webkit-animation: ani_line 30s linear infinite;
    animation: ani_line 30s linear infinite;
}

.circle02 {
	background-image: url(../images/spr_bannerPathway.png);
    background-position: -2436px -724px;
    background-repeat: no-repeat;
    width: 648px;
    height: 674px;
    animation: ani_line 3s steps(180) infinite reverse;
}

@keyframes ani_line {
	0% {
	    -webkit-transform: none;
	    transform: none;
	}
	100% {
	    -webkit-transform: rotate(360deg);
	    transform: rotate(360deg);
	}
}
```

​	