<template>
  <div class="homepage">
    <div class="head">
      <div class="loadapp">
       <span class="closebtn">
      <img src="//static.epetbar.com/static_wap/lib/common_images/closebtn_03.png">
    </span>
        <div class="loadimg">
          <img src="https://img2.epetbar.com/nowater/2017-12/13/18/c63b6e6cf483cbb61196f658920a9d6e.jpg@!water">
        </div>
      </div>
      <div class="epetsearch">
        <div class="buyinfo">
          <span class="dog">狗狗</span>
          <span class="middle">|</span>
          <span class="addr">重庆</span>
        </div>
        <p class="searchtext">
          <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
          <span class="icon">
            <i class="iconfont icon-sousuo"></i>
          </span>
        </p>
        <img src="//static.epetbar.com/static_web/wap/src/images/mydope.png">
      </div>
      <ul class="navagation" ref="ul">
        <li class="nav-item on" @click="switchOn($event)">
           <span class="rela">
             <span>首页</span>
             <i></i>
           </span>
        </li>
        <li class="nav-item" @click="switchOn($event)">
           <span class="rela">
             <span>狗狗主粮</span>
             <i></i>
           </span>
        </li>
        <li class="nav-item">
           <span class="rela">
             <span>服饰城</span>
             <i></i>
           </span>
        </li>
        <li class="nav-item">
           <span class="rela">
             <span>医疗保健</span>
             <i></i>
           </span>
        </li>
        <li class="nav-item">
           <span class="rela">
             <span>零食玩具</span>
             <i></i>
           </span>
        </li>
      </ul>
    </div>
    <div class="wrapper" id="wrapper">
      <nav class="banner">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <!-- 第一页 -->
            <div class="swiper-slide">
              <a href="#">
                <img src="./images/baolu.jpg">
              </a>
            </div>
            <!-- 第二页 -->
            <div class="swiper-slide">
              <a href="###">
                <img src="./images/fumo.jpg">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <img src="./images/haiwai.jpg">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <img src="./images/ouguan.jpg">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <img src="./images/tongzhi.jpg">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <img src="./images/zhuliang.jpg">
              </a>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </nav>
      <div class="banner_combine">
        <img class="dog" src="./images/dog.jpg">
      </div>
      <div class="columnnavdiv">
        <ul class="columnnavul">
          <li class="columnnavli">
            <img src="https://img1.epetbar.com/2018-03/12/17/881c6f016aa0c22104011926e51b4f47.jpg@!water">
          </li>
          <li class="columnnavli">
            <img src="https://img1.epetbar.com/2018-03/12/17/36ce3471dd689ed7377d09b9986303c9.jpg@!water">
          </li>
          <li class="columnnavli">
            <img src="https://img1.epetbar.com/2018-03/12/17/5dc60db864d3123929f432e7757ceb96.jpg@!water">
          </li>
          <li class="columnnavli">
            <img src="https://img1.epetbar.com/2018-03/12/17/a6cf6fd5d724bb125b40b17fba0cbe12.jpg@!water">
          </li>
          <li class="columnnavli">
            <img src="https://img1.epetbar.com/2018-03/12/17/f8ea826966dcee6abccf2a9574b0e36e.jpg@!water">
          </li>
          <li class="columnnavli">
            <img src="https://img1.epetbar.com/2018-03/12/20/5a6991defe3616bb1208506f5f0d78da.jpg@!water">
          </li>
          <li class="columnnavli">
              <img src="https://img1.epetbar.com/2018-03/12/17/b799562d3f7f8ca39769dc5fd1794a4a.jpg@!water">
          </li>
          <li class="columnnavli">
            <img src="https://img1.epetbar.com/2018-03/12/17/420a7f62887b490aa7c627dc5364178d.jpg@!water">
          </li>
          <li class="columnnavli">
            <img src="https://img1.epetbar.com/2018-03/12/17/dfa5a7598e3ee203c05f0f03fc182edc.jpg@!water">
          </li>
          <li class="columnnavli">
           <img src="https://img1.epetbar.com/2018-03/12/17/038add951408054bafb01498e8d98635.jpg@!water">
          </li>
        </ul>
      </div>
      <div class="adv">
        <img class="advimg" src="https://img2.epetbar.com/nowater/2018-03/13/09/85e2ada29e2157daeda797903cd13dd2.jpg@!water">
      </div>
      <div class="suprise">
        <div class="support">
          <div class="supportimage">
            <img src="https://static.epetbar.com/static_wap/appmall/main/new_index_icon_suprice.png?version=03">
          </div>
          <div class="more">
            <img src="https://img2.epetbar.com/nowater/2018-03/13/00/3e7c62238a46eb5da0317422f531a7c6.png">
          </div>
          <div class="time">
            <span class="hour">12</span>
            <span class="middle">:</span>
            <span class="minutes">00</span>
          </div>
          <div class="currentend">下一场开始</div>
        </div>
        <div class="swiper-container" id="swiper-container">
          <ul class="swiper-wrapper">
            <li class="swiper-slide">
              <div class="itemimage">
                <img src="https://img1.epetbar.com/2018-01/12/18/6d615faef8b6a01e891d8a3012fbb3e6.jpg?x-oss-process=style/fill&$1=300&$2=300">
              </div>
              <div class="newprice">
                <span>￥<span>7.6</span></span>
              </div>
              <div class="oldprice">
                省68.40
              </div>
            </li>
            <li class="swiper-slide">
              <div class="itemimage">
                <img src="https://img1.epetbar.com/2017-10/31/17/68d45608ddbec32608cddec587c342e1.jpg?x-oss-process=style/fill&$1=300&$2=300">
              </div>
              <div class="newprice">
                <span>￥<span>1.75</span></span>
              </div>
              <div class="oldprice">
                省15.75
              </div>
            </li>
            <li class="swiper-slide">
              <div class="itemimage">
                <img src="https://img1.epetbar.com/2017-07/20/18/2cdec1bd58b2216764993c30c4fd0ec1.jpg?x-oss-process=style/fill&$1=300&$2=300">
              </div>
              <div class="newprice">
                <span>￥<span>4.80</span></span>
              </div>
              <div class="oldprice">
                省43.20
              </div>
            </li>
            <li class="swiper-slide">
              <div class="itemimage">
                <img src="https://img1.epetbar.com/2017-07/20/18/2cdec1bd58b2216764993c30c4fd0ec1.jpg?x-oss-process=style/fill&$1=300&$2=300">
              </div>
              <div class="newprice">
                <span>￥<span>4.80</span></span>
              </div>
              <div class="oldprice">
                省43.20
              </div>
            </li>
            <li class="swiper-slide">
              <div class="itemimage">
                <img src="https://img1.epetbar.com/2017-07/20/18/2cdec1bd58b2216764993c30c4fd0ec1.jpg?x-oss-process=style/fill&$1=300&$2=300">
              </div>
              <div class="newprice">
                <span>￥<span>4.80</span></span>
              </div>
              <div class="oldprice">
                省43.20
              </div>
            </li>
            <li class="swiper-slide">
              <div class="itemimage">
                <img src="https://img1.epetbar.com/2017-07/20/18/2cdec1bd58b2216764993c30c4fd0ec1.jpg?x-oss-process=style/fill&$1=300&$2=300">
              </div>
              <div class="newprice">
                <span>￥<span>4.80</span></span>
              </div>
              <div class="oldprice">
                省43.20
              </div>
            </li>
            <li class="swiper-slide">
              <div class="itemimage">
                <img src="https://img1.epetbar.com/2017-07/20/18/2cdec1bd58b2216764993c30c4fd0ec1.jpg?x-oss-process=style/fill&$1=300&$2=300">
              </div>
              <div class="newprice">
                <span>￥<span>4.80</span></span>
              </div>
              <div class="oldprice">
                省43.20
              </div>
            </li>
            <li class="swiper-slide">
              <div class="itemimage">
                <img src="https://img1.epetbar.com/2017-07/20/18/2cdec1bd58b2216764993c30c4fd0ec1.jpg?x-oss-process=style/fill&$1=300&$2=300">
              </div>
              <div class="newprice">
                <span>￥<span>4.80</span></span>
              </div>
              <div class="oldprice">
                省43.20
              </div>
            </li>
            <li class="swiper-slide">
              <div class="itemimage">
                <img src="https://img1.epetbar.com/2017-07/20/18/2cdec1bd58b2216764993c30c4fd0ec1.jpg?x-oss-process=style/fill&$1=300&$2=300">
              </div>
              <div class="newprice">
                <span>￥<span>4.80</span></span>
              </div>
              <div class="oldprice">
                省43.20
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="power">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/f1b7fefaf2e0a3b01498658788d75fbd.jpg@!water">
      </div>
      <div class="animation">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/19/081c4aec9c8c81fa8dcb5bb9a63ddac5.gif">
      </div>
      <div class="vip">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/02cdfda794ee4cc90e0e39462e17d49d.jpg@!water">
      </div>
      <div class="server">
        <div class="serverleft">
          <div class="top">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/19/09463758eb284f5a12ab248e41f4aa11.jpg@!water" alt="">
          </div>
          <div class="bottom">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/19/3940d5339d02eebcdd5d7cc1d3a46845.jpg@!water" alt="">
          </div>
        </div>
        <div class="serverright">
          <div class="top">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/19/fd6e6a5c56820b18eb2e0f6e359d9f59.jpg@!water" alt="">
          </div>
          <div class="bottom">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/19/071f8a55cf20097fb53de090e0a0dc16.jpg@!water" alt="">
          </div>
        </div>
      </div>
      <div class="zhekou">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/5fd369ed534f5a32ac751ff29ab90034.jpg@!water" alt="">
      </div>
      <div class="bottombanner">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <!-- 第一页 -->
            <div class="swiper-slide">
              <a href="#">
                <img src="https://img2.epetbar.com/nowater/2018-03/12/19/3c54559f077235436b408a6839138b4f.jpg@!water">
              </a>
            </div>
            <!-- 第二页 -->
            <div class="swiper-slide">
              <a href="###">
                <img src="https://img2.epetbar.com/nowater/2018-03/12/19/3c54559f077235436b408a6839138b4f.jpg@!water">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <img src="https://img2.epetbar.com/nowater/2018-03/12/19/9ab35e8f6f88e2adac715cd83ac5c69c.jpg@!water">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <img src="https://img2.epetbar.com/nowater/2018-03/12/19/9e4502cf22ecb6f8b97715c7fc73ed50.jpg@!water">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <img src="https://img2.epetbar.com/nowater/2018-03/12/19/3ea8f16882581307427bd3d962fc6dd0.jpg@!water">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <img src="https://img2.epetbar.com/nowater/2018-03/12/19/d3d4c3ee17f2a047f3eee2ec30591aac.jpg@!water">
              </a>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="dapai">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/18/0d6125d9f846519e83e7354bd8638cf7.jpg@!water">
      </div>
      <div class="goods">
        <div class="goodsadv">
          <div class="left">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/48f18920d1f1ee4e52039bf92da2e805.jpg@!water" alt="">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/188ceb72ed63b6ddffa093f25f517727.jpg@!water" alt="">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/fc7b286676d1bf3fbe2d2b4b1ac633a6.jpg@!water" alt="">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/3ea747d791b0923f775d1b23b5da9485.jpg@!water" alt="">
          </div>
          <div class="right">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/10a5324b7c6f1763122f2ee9cd54b5b7.jpg@!water" alt="">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/67301c12c7193d19e515c59d2bf2d15a.jpg@!water" alt="">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/b91027e7b664ebd165c8dc690fd9b778.jpg@!water" alt="">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/b30bab969d87ef724986ad42420432f4.jpg@!water" alt="">
          </div>
        </div>
        <div class="goodsadv">
          <div class="left">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/48f18920d1f1ee4e52039bf92da2e805.jpg@!water" alt="">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/188ceb72ed63b6ddffa093f25f517727.jpg@!water" alt="">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/fc7b286676d1bf3fbe2d2b4b1ac633a6.jpg@!water" alt="">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/3ea747d791b0923f775d1b23b5da9485.jpg@!water" alt="">
          </div>
          <div class="right">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/10a5324b7c6f1763122f2ee9cd54b5b7.jpg@!water" alt="">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/67301c12c7193d19e515c59d2bf2d15a.jpg@!water" alt="">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/b91027e7b664ebd165c8dc690fd9b778.jpg@!water" alt="">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/b30bab969d87ef724986ad42420432f4.jpg@!water" alt="">
          </div>
        </div>
        <div class="goodsadv">
          <div class="left">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/48f18920d1f1ee4e52039bf92da2e805.jpg@!water" alt="">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/188ceb72ed63b6ddffa093f25f517727.jpg@!water" alt="">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/fc7b286676d1bf3fbe2d2b4b1ac633a6.jpg@!water" alt="">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/3ea747d791b0923f775d1b23b5da9485.jpg@!water" alt="">
          </div>
          <div class="right">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/10a5324b7c6f1763122f2ee9cd54b5b7.jpg@!water" alt="">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/67301c12c7193d19e515c59d2bf2d15a.jpg@!water" alt="">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/b91027e7b664ebd165c8dc690fd9b778.jpg@!water" alt="">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/b30bab969d87ef724986ad42420432f4.jpg@!water" alt="">
          </div>
        </div>
        <div class="goodsadv">
          <div class="left">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/48f18920d1f1ee4e52039bf92da2e805.jpg@!water" alt="">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/188ceb72ed63b6ddffa093f25f517727.jpg@!water" alt="">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/fc7b286676d1bf3fbe2d2b4b1ac633a6.jpg@!water" alt="">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/3ea747d791b0923f775d1b23b5da9485.jpg@!water" alt="">
          </div>
          <div class="right">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/10a5324b7c6f1763122f2ee9cd54b5b7.jpg@!water" alt="">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/67301c12c7193d19e515c59d2bf2d15a.jpg@!water" alt="">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/b91027e7b664ebd165c8dc690fd9b778.jpg@!water" alt="">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/b30bab969d87ef724986ad42420432f4.jpg@!water" alt="">
          </div>
        </div>
        <div class="goodsadv">
          <div class="left">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/48f18920d1f1ee4e52039bf92da2e805.jpg@!water" alt="">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/188ceb72ed63b6ddffa093f25f517727.jpg@!water" alt="">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/fc7b286676d1bf3fbe2d2b4b1ac633a6.jpg@!water" alt="">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/3ea747d791b0923f775d1b23b5da9485.jpg@!water" alt="">
          </div>
          <div class="right">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/10a5324b7c6f1763122f2ee9cd54b5b7.jpg@!water" alt="">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/67301c12c7193d19e515c59d2bf2d15a.jpg@!water" alt="">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/b91027e7b664ebd165c8dc690fd9b778.jpg@!water" alt="">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/18/b30bab969d87ef724986ad42420432f4.jpg@!water" alt="">
          </div>
        </div>
      </div>
      <div class="zuican">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/19/313106e05cd8b140f4bc8d298d98e87a.jpg@!water" alt="">
      </div>
      <div class="godog">
        <img src="https://img2.epetbar.com/nowater/2018-03/13/11/bac4f238ed715999f7d5bd9d4f0ab56e.jpg@!water" alt="">
      </div>
      <div class="specialstar">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/19/4e129b980839446eabb5fce594f60364.jpg@!water" alt="">
      </div>
      <div class="presale">
        <div class="left">
          <img src="https://img2.epetbar.com/nowater/2018-03/12/19/62c5a1f0c1b4b535aee4a537864ecd45.jpg@!water" alt="">
        </div>
        <div class="right">
          <img src="https://img2.epetbar.com/nowater/2018-03/12/19/ca4e375ccf9992ce0e8666c256b6ef4e.jpg@!water" alt="">
          <img src="https://img2.epetbar.com/nowater/2018-03/12/19/e25b9300c387beec0b28499a8f19d83e.jpg@!water" alt="">
        </div>
      </div>
      <div class="specialitem">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/19/83a8298fad417a66415c11e0acfac335.jpg@!water" alt="">
      </div>
      <div class="presale">
        <div class="left">
          <img src="https://img2.epetbar.com/nowater/2018-03/12/19/c0cbc5428d12daf97c03ce5cb4b2eb41.jpg@!water" alt="">
          <img src="https://img2.epetbar.com/nowater/2018-03/12/19/972f41b92482a495640ad9be2793e8bf.jpg@!water" alt="">
          <img src="https://img2.epetbar.com/nowater/2018-03/12/19/18442aea515fdb23ec49d837bbe3dac1.jpg@!water" alt="">
        </div>
        <div class="right">
          <img src="https://img2.epetbar.com/nowater/2018-03/12/19/fd2e96a45cc0e35e8ae09fad888707e4.jpg@!water" alt="">
          <img src="https://img2.epetbar.com/nowater/2018-03/12/19/819706ef8fb7e34de1c4ae76729db425.jpg@!water" alt="">
          <img src="https://img2.epetbar.com/nowater/2018-03/12/19/b621c0313bc872ad97fa63e2e431750b.jpg@!water" alt="">
        </div>
      </div>
      <div class="footer">
        <div class="footernavs">
          <ul class="footernav">
            <li class="navitem on">触屏版</li>
            <li class="navitem">手机客户端</li>
            <li class="navitem">关于我们</li>
            <li class="navitem">联系我们</li>
          </ul>
        </div>
        <div class="biaoshi">
          © wap.epet.com 版权：重庆易宠科技有限公司
        </div>
      </div>
      <div class="dognav"></div>
    </div>
  </div>

</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'

  /*window.onload=function () {
    var swiper = new Swiper('#swiper-container', {
      slidesPerView: 3.5,
      spaceBetween: 10,
    });

  }
   */
  export default {
    mounted(){
      var bottombanner = new Swiper('.bottombanner>.swiper-container', {
        loop: true,
        autoplay:true,
        delay:3000,
        pagination: {
          el: '.swiper-pagination'
        }
      })

      var swiper = new Swiper('#swiper-container', {
        slidesPerView:3.5,
        spaceBetween: 10,
      });

      var banner = new Swiper('.banner>.swiper-container', {
        loop: true,
        autoplay:true,
        delay:3000,
        pagination: {
          el: '.swiper-pagination'
        }
      })
      /*this.$nextTick(()=>{
        new BScroll('#wrapper',{
          click: true
        })
      })*/
    },
    methods:{
      switchOn(event){
        this.$refs.ul.getElementsByClassName('nav-item')[0].className='nav-item'
        alert(this.$refs.ul.getElementsByClassName('nav-item')[0])
        event.target.className='nav-item on'
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .homepage
    width 100%
    .head
      background: #fff;
      width 100%
      position fixed
      z-index 2000
      top 0
      left 0
      .loadapp
        width 100%
        .closebtn
          position absolute
          left 8px
          top 14px
          img
            width 18px
        .loadimg
          width 100%
          img
            width 100%
            height 55px
      .epetsearch
        padding-top 10px
        display flex
        justify-content space-around
        .buyinfo
          position relative
          span
            font-size 14px
            line-height 25px
            color: #898989;
        .buyinfo::before
          content: '';
          position: absolute;
          border: 5px solid;
          border-color: #898989 transparent transparent;
          top: 10px;
          right: -13px;
        .searchtext
          background #e9e9e9
          height 25px
          border-radius 4px
          input
            background #e9e9e9
            color #bcbcbc
            text-indent 10px
            font-size 13px
            line-height 25px
            border-radius 4px
            outline 0
            width 200px
          .icon
            .iconfont
              font-size 11px
        img
          width: 25px;
          height 25px
      .navagation
        display flex
        white-space: nowrap
        margin-top 10px
        .nav-item
          width 74.5px
          text-align center
          line-height: 36px;
          font-size: 14px;
          text-align: center;
          color: #666;
          .rela
            position relative
            display inline-block
            i
              position: absolute;
              bottom: 1px;
              left: -10%;
              width: 120%;
              height: 2px;
          &.on
            .rela
              span
                color #459d36
              i
                background #459d36
    .wrapper
      padding-top 140px
      width 100%
      .banner  /*轮播*/
        width 100%
        height 100%
        .swiper-container
          width 100%
          height 100%
          .swiper-wrapper
            width 100%
            height 100%
            .swiper-slide
              width 100%
              height 100%
              >a
                display block
                width 100%
                height 100%
                >img
                  width 100%
                  height 100%
      .banner_combine
        width 100%
        .dog
          width 100%
          display block
      .columnnavdiv
        .columnnavul
          overflow hidden
          .columnnavli
            float left
            width 20%
            img
              width 100%
              display block


      .adv
        width 100%
        .advimg
          width 100%
          display block
      .suprise
        width 100%
        .support
          width 100%
          overflow hidden
          height 39px
          font-size 13px
          .supportimage
            float left
            margin-top 10px
            img
              width 85px
          .more
            float right
            height 34px
            img
              width 67.5px
              height 34px
          .time
            float right
            margin-top 8px
            .hour,.minutes
              width 23px
              height 23px
              text-align center
              line-height 23px
              border 1px solid gainsboro
          .currentend
            float right
            margin-right 8px
            margin-top 13px


        #swiper-container
          .swiper-wrapper
            .swiper-slide
              .itemimage
                width 100%
                img
                  width 80%
                  padding 10px
            .newprice
              text-align center
              vertical-align middle
              margin-bottom 5px
              span
                color red
                font-size 14px
            .oldprice
              color #999
              font-size 12px
              text-align center
              margin-bottom 10px
      .power
        width 100%
        img
          width 100%
          display block
      .animation
        width 100%
        img
          width 100%
          display block
      .vip
        width 100%
        img
          width 100%
          display block
      .server
        width 100%
        .serverleft
          float left
          width 50%
          >div
            width 100%
            img
              width 100%
        .serverright
          float right
          width 50%
          >div
            width 100%
            img
              width 100%



      .zhekou
        width 100%
        img
          width 100%
      .bottombanner  /*轮播*/
        width 100%
        height 100%
        .swiper-container
          width 100%
          height 100%
          .swiper-wrapper
            width 100%
            height 100%
            .swiper-slide
              width 100%
              height 100%
              >a
                display block
                width 100%
                height 100%
                >img
                  width 100%
                  height 100%
      .dapai
        width 100%
        img
          width 100%
      .goods
        .goodsadv
          overflow hidden
          width 100%
          .left
            float left
            width 50%
            img
              width 100%
              display block
          .right
            float right
            width 50%
            img
              width 100%
              display block

      .zuican
        width 100%
        img
          width 100%
          display block
      .godog
        width 100%
        img
          width 100%
          display block

      .specialstar
        width 100%
        img
          width 100%
          display block

      .presale
        background black
        width 100%
        overflow hidden
        .left
          float left
          width 50%
          img
            display block
            width 100%
        .right
          float right
          width 50%
          img
            display block
            width 100%
      .specialitem
        width 100%
        img
          width 100%
          display block
      .footer
        width 100%
        margin-top 30px
        .footernavs
          width 80%
          margin 0 auto
          .footernav
            width 100%
            display flex
            justify-content space-around
            .navitem
              color #333
              font-size 14px
            .on
              color red
        .biaoshi
          width 100%
          font-size 12px
          text-align center
          margin-top 15px
          margin-bottom 55px
      .dognav
        position fixed
        right -1px
        bottom 15%
        width 41px
        height 46px
        background url('./images/godog.png') 0 0/85px 46px
        background-size 80px auto
        animation skipdog steps(1,end) 2s infinite
        @keyframes skipdog
          50%{
            background-position -41px 0
          }
  /*https://img2.epetbar.com/nowater/2017-12/13/18/c63b6e6cf483cbb61196f658920a9d6e.jpg@!water*/
  /*static.epetbar.com/static_wap/lib/common_images/closebtn_03.png*/
</style>
