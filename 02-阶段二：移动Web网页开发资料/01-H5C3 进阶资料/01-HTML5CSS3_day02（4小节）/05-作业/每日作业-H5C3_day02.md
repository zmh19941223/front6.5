# 每日作业 - H5C3第2天

​	作业说明：

1. 作业题分为两大部分：基础案例和扩展案例。基础案例为涵盖今日所学知识点的案例，所有学员必须全部完成，不能当日完成的利用自习课时间继续完成。扩展案例为在今日所学知识点的基础上，进行扩展训练，学有余力的同学可以尝试完成，不做强制要求。

2. 每个作业题包含训练描述、训练提示、操作步骤三项。
   - **训练描述**可理解为作业题干，有清晰的要求描述。如果读完训练描述即知道如何操作，后面两项忽略。
   - **训练提示**提供实现思路。如果读完训练描述，不能完成操作，继续查看训练提示。
   - **操作步骤**提供具体详细的实现步骤和代码。如果读完训练提示仍然不会，继续查看操作步骤。

## 基础案例

### 01-《阴阳师》二维码

#### 训练描述

利用CSS3动画属性，模拟扫描二维码的场景

#### 训练提示

1. 在大盒子中上下正常排版两张图片
2. 利用动画，让第二张图片上下发生位移
3. 设置动画属性，注意动画设置的兼容问题

#### 操作步骤

1. 创建index文件，新建css文件夹，创建base.css文件并初始化基本代码，新建images文件夹

2. 创建index.css保存至css文件夹，首页html文件引入css样式

3. 编写结构代码

   - 创建父盒子，内部插入两张图片，二维码和扫描的光线

     ```java
     <div class="v-code">
     		<img class="erweima" src="images/57b280b496dee47507111c56NRN73rVj.png" alt="">
     		<img class="line" src="images/line_dd0b705.png" alt="">
     </div>
     ```

   - 排版父盒子和两个图片的位置

     ```java
     body {
     	padding: 50px;
     }

     .v-code {
     	width: 145px;
         height: 240px;
         padding-top: 47px;
         float: left;
         position: relative;
         background: url(../images/index_z_71df05e.png);
         background-position: 0px 0px;
         background-repeat: no-repeat;
     	
     }

     .v-code .erweima {
     	display: block;
     	margin: 0 auto;
     	width: 107px;
     }

     .v-code .line {
     	position: absolute;
         left: 12px;
         top: 45px;
         -webkit-animation: mainbarcode 4s linear infinite;
         -moz-animation: mainbarcode 4s linear infinite;
         -ms-animation: mainbarcode 4s linear infinite;
         animation: mainbarcode 4s linear infinite;
     }
     ```

   - 声明动画

     ```java
     @keyframes mainbarcode {
     	0% {
     	    -webkit-transform: translate3d(0,0,0);
     	    -moz-transform: translate3d(0,0,0);
     	    -ms-transform: translate3d(0,0,0);
     	    transform: translate3d(0,0,0);
     	}
     	50% {
     	    -webkit-transform: translate3d(0,100px,0);
     	    -moz-transform: translate3d(0,100px,0);
     	    -ms-transform: translate3d(0,100px,0);
     	    transform: translate3d(0,100px,0);
     	}
     	100% {
     	    -webkit-transform: translate3d(0,0,0);
     	    -moz-transform: translate3d(0,0,0);
     	    -ms-transform: translate3d(0,0,0);
     	    transform: translate3d(0,0,0);
     	}
     }
     ```


1. 打开首页文件，观察效果



### 02-《阴阳师》f4

#### 训练描述

当浏览此网页的时候，如果停顿等待的时间较长，将会出现4个小人物走动，滚动或者鼠标经过就消失

#### 训练提示

1. 先进行基本的布局，排出来具体的大小位置，在底部均匀分布

2. 给每个盒子设置背景，然后创建公共移动的动画
3. 创建该变背景的动画，将两个动画引入在不同盒子上，重复执行

#### 操作步骤

​     1，创建index文件，新建css文件夹并创建base.css文件，初始化css样式

​     2，新建images文件夹，在首页文件中引入样式

​     3，创建基本的结构

```java
	<div class="f4_box">
		<div class="walk01">
			<div class="west-01"></div>
		</div>
		<div class="walk02">
			<div class="west-02"></div>
		</div>
		<div class="walk03">
			<div class="west-03"></div>
		</div>
		<div class="walk04">
			<div class="west-04"></div>
		</div>
	</div>
```

​      4，排版基本的样式

```java

.f4_box {
	position: fixed;
    width: 100%;
    height: 175px;
    left: 0;
    bottom: 0;
    z-index: 99;
    -webkit-transition: all 3.2s ease;
    -moz-transition: all 3.2s ease;
    -ms-transition: all 3.2s ease;
    transition: all 3.2s ease;
}

.walk01 {
	position: absolute;
    left: 0;
    bottom: 0;
    width: 154px;
    height: 121px;
    opacity: 0;
    -webkit-animation: move01 15s linear infinite;
    -moz-animation: move01 15s linear infinite;
    -ms-animation: move01 15s linear infinite;
    animation: move01 15s linear infinite;
}

.west-01 {
	width: 154px;
    height: 121px;
    background-image: url(../images/txgc_6d0e9e5.png);
    background-repeat: no-repeat;
    -webkit-animation: play01 .4s steps(2) infinite;
    -moz-animation: play01 .4s steps(2) infinite;
    -ms-animation: play01 .4s steps(2) infinite;
    animation: play01 .4s steps(2) infinite;
}

@keyframes move01 {
	0% {
	    -webkit-transform: translate(-200px,0);
	    -moz-transform: translate(-200px,0);
	    -ms-transform: translate(-200px,0);
	    transform: translate(-200px,0);
	    opacity: 1;
	}
	100% {
	    -webkit-transform: translate(1920px,0);
	    -moz-transform: translate(1920px,0);
	    -ms-transform: translate(1920px,0);
	    transform: translate(1920px,0);
	    opacity: 1;
	}
}


@keyframes play01 {
	0% {
	    background-position: 0 0;
	}
	100% {
		background-position: -308px 0;
	}
}
```

​     5，设置其他盒子的样式

```java
.walk02 {
	position: absolute;
    left: 0;
    bottom: 0;
    width: 167px;
    height: 176px;
    opacity: 0;
    -webkit-animation: move01 15s linear 2s infinite;
    -moz-animation: move01 15s linear 2s infinite;
    -ms-animation: move01 15s linear 2s infinite;
    animation: move01 15s linear 2s infinite;
}

.west-02 {
	width: 167px;
    height: 176px;
    background-image: url(../images/txgh_fee2457.png);
    background-repeat: no-repeat;
    -webkit-animation: play02 .4s steps(2) infinite;
    -moz-animation: play02 .4s steps(2) infinite;
    -ms-animation: play02 .4s steps(2) infinite;
    animation: play02 .4s steps(2) infinite;
}

@keyframes play02 {
	0% {
	    background-position: 0 0;
	}
	100% {
		background-position: -334px 0;
	}
}

.walk03 {
	position: absolute;
    left: 0;
    bottom: 0;
    width: 161px;
    height: 149px;
    opacity: 0;
    -webkit-animation: move01 15s linear 4s infinite;
    -moz-animation: move01 15s linear 4s infinite;
    -ms-animation: move01 15s linear 4s infinite;
    animation: move01 15s linear 4s infinite;
}

.west-03 {
	width: 161px;
    height: 149px;
    background-image: url(../images/txgl_c15cfd8.png);
    background-repeat: no-repeat;
    -webkit-animation: play03 .4s steps(2) infinite;
    -moz-animation: play03 .4s steps(2) infinite;
    -ms-animation: play03 .4s steps(2) infinite;
    animation: play03 .4s steps(2) infinite;
}

@keyframes play03 {
	0% {
	    background-position: 0 0;
	}
	100% {
		background-position: -322px 0;
	}
}

.walk04 {
	position: absolute;
    left: 0;
    bottom: 0;
    width: 171px;
    height: 157px;
    opacity: 0;
    -webkit-animation: move01 15s linear 6s infinite;
    -moz-animation: move01 15s linear 6s infinite;
    -ms-animation: move01 15s linear 6s infinite;
    animation: move01 15s linear 6s infinite;
}

.west-04 {
	width: 171px;
    height: 157px;
    background-image: url(../images/txgq_d281c9b.png);
    background-repeat: no-repeat;
    -webkit-animation: play04 .4s steps(2) infinite;
    -moz-animation: play04 .4s steps(2) infinite;
    -ms-animation: play04 .4s steps(2) infinite;
    animation: play04 .4s steps(2) infinite;
}

@keyframes play04 {
	0% {
	    background-position: 0 0;
	}
	100% {
		background-position: -342px 0;
	}
}
```



### 03-《战意》小动画

#### 训练描述

页面一打开，就有一个小图标一直旋转，当鼠标经过的时候，旋转停下来了

#### 训练提示

1. 创建index文件，新建css文件创建base.css文件，完成css初始化

2. 在首页文件中引入文件，完成结构布局

3. 完成样式排版，当鼠标经过，调用动画的播放属性，让它停下来

#### 操作步骤

1. 创建基本结构

   ```java
   <div class="play-video"></div>
   ```

2. 设置基本样式和鼠标经过样式

   ```java
   html, body {
   	height: 100%;
   	background: url(../images/bg_81ab3d6.jpg) no-repeat center top;
   }

   .play-video {
   	position: absolute;
       top: 280px;
       right: 380px;
       width: 93px;
       height: 93px;
       margin-left: -47px;
       z-index: 4;
   }

   .play-video::before,
   .play-video::after {
   	display: block;
       width: 100%;
       height: 100%;
       content: "";
       position: absolute;
   }

   .play-video::before {
       background-image: url(../images/index_z_9769688.png);
       background-position: -744px -819px;
       background-repeat: no-repeat;
   	-webkit-animation: rotate1 2s linear infinite 300ms 0 ease;
       -moz-animation: rotate1 2s linear infinite 300ms 0 ease;
       -ms-animation: rotate1 2s linear infinite 300ms 0 ease;
       animation: rotate1 2s linear infinite 300ms 0 ease;
       -moz-animation: rotate1 2s linear infinite;
       -webkit-animation: rotate1 2s linear infinite;
       -o-animation: rotate1 2s linear infinite;
       -ms-animation: rotate1 2s linear infinite;
       animation: rotate1 2s linear infinite;
   }

   .play-video::after {
   	position: absolute;
       left: 50%;
       top: 50%;
       width: 21px;
       height: 25px;
       margin-top: -12px;
       margin-left: -10px;
       background-image: url(../images/index_z_9769688.png);
       background-position: -2290px -107px;
       background-repeat: no-repeat;
   }

   @keyframes rotate1 {
   	0% {
   		transform: rotate(0deg);
   	}
   	100% {
   		transform: rotate(360deg);
   	}
   }
   ```


3. 设置鼠标经过样式

   ```java
   .play-video:hover {
   	cursor: pointer;
   }

   .play-video:hover::before {
   	-webkit-animation-play-state: paused;
       -moz-animation-play-state: paused;
       -o-animation-play-state: paused;
       animation-play-state: paused;
       background-repeat: no-repeat;
   }
   ```


## 扩展案例

### 04-《穷游》背景变换

#### 训练描述

```
1，以往的背景经过都是半透明盒子遮罩直上直下或者渐入渐出
```

```
2，以斜着进入离开需要用到CSS3的斜切
```

#### 训练提示

1. 保存图片，新建文件，初始化样式：
2. 设置鼠标经过样式，利用放大的斜切的原理，让父盒子溢出隐藏

#### 操作步骤

```
1，新建基本的结构
```

​```java
<div class="content">

```
<a href="javascipt:;"></a>
```

</div>

```
​	2，创建CSS样式

​```java
.content {
	width: 275px;
	height: 185px;
	background: url(bgi.jpg) no-repeat;
	margin: 100px auto;
	overflow: hidden;
}
a {
	display: block;
	width: 100%;
	height: 100%;
	background-color: rgba(47, 214, 133, .75);
	opacity: 0;
	transition: all .5 ease-in;
}
```

​	3，设置鼠标经过演示

```java
.content:hover a {
	opacity: 1;
  	/*动画引入*/
	animation: donghua .3s forwards;
}

/*动画声明*/
@keyframes donghua {
	from {
		transform: translateX(130%) skewX(-45deg) scale(1);
	}
	to {
		transform: translateX(0) skewX(-45deg) scale(2);
	}
}
```

