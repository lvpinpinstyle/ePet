
 基本完成，遇见的问题都不大，基本都能够解决，经常犯的错误就是选择器名字会写错
 1、首页广告部分（APP下载图片）需要注意一下，点击高度塌陷的问题
    方案一：点击事件动态计算padding的值，上边和底部的padding都要考虑
    方案二：广告和导航同时固定定位在顶部，内容区加一个废盒子，高度和广告的高度一边打，点击事件
            让广告和废盒子同时消失
            缺点：做拉弹簧的效果上边会有一部分空白区
    方案三：一个大div套着两个div，上边是广告，下边是导航和内容区的父元素div，
            这个div有两个div，一个是导航，一个是内容区的div，拖动时上下拖动内容区的div
            缺点：滚动条会从内容区的地方滚动，而不是从顶部往下滚
 2.轮播选择器的名字问题，选择器最好从上一层查找，以免几个swiper实例发生冲突
 3.购物车点击切换问题：transition监控的是div的height，抽取组件需要将transition同时抽走
 4.小狗眨眼睛问题：用到animation动画的steps函数
 5.BScroll注意的问题：
   父元素div必须只有一个子元素div，且父元素的高度小于子元素div的高度，如果存在v-if的情况
   再套一个大div
 6.布局问题：
   首页：因为数据给的图片存在一定的顺序问题，所以首页的大牌好货下边的图片要四张一组，浮动在左边
         四张一组浮动在右边，否则图片衔接不上
         特色栏目下边的图片同样的问题
   分类页：
         上边的图片为一行三张排序，下边的图片列表为两行一组排序
 7.全部品牌页两边滚动与点击位置交互问题：
   左边滚动的每一组大div距离顶部的距离求出来放在一个tops数组中，
   左边用BScroll监控滚动的scrollY的值
   点击右边时传递当前点击的index值，然后根据index值将左侧滚动到相应的位置即：scrollTo(0,-this.tops[index])
   tops值已知，左侧滚动的scrollY值可以监控所以理由两个值来计算当前的currentIndex值，
   即tops.findIndex((top, index) => scrollY>=top && scrollY<tops[index+1])
   点击事件的标签颜色用一个on值来监控，即:class="{on:index===currentIndex}"
   注意的是：因为顶部有一个头部，所以每一个top值要加上头部的高度，首个top值为0
 8.分类页左边点击可能会移动
    我们找一个尽量往一个地方靠的y（125px）值，然后BScroll监控页面点击的pointY值，最大滚动的距离maxScrollY，和走的y值
    我们希望尽量往125px的地方靠拢，所以


