<template>
  <div>
      <!-- 头部栏 -->
      <div class="header clearfix">
        <!-- 图片栏 -->
        <div class="logo">
          <img src="./image/header.png" alt="" />
        </div>
        <!-- 导航栏 -->
        <div class="nav">
          <!-- 导航栏左侧 -->
          <ul class="nav-left">
            <li class="nav-left-item">
              <a class="active">供应链</a>
              <ol class="first">
                <li><a>客户分析</a></li>
                <li><a>采销分析</a></li>
                <li><a>库存分析</a></li>
              </ol>
            </li>
            <li class="nav-left-item">
              <a>财务</a>
              <ol class="second">
                <li><a>综合分析</a></li>
                <li><a>盈亏分析</a></li>
              </ol>
            </li>
            <li class="nav-left-item">
              <a>人力资源</a>
              <ol class="third">
                <li><a>人事变动</a></li>
                <li><a>人才分析</a></li>
              </ol>
            </li>
            <li class="nav-left-item">
              <a>价格预测</a>
              <ol class="fourth">
                <li><a>兰炭</a></li>
                <li><a>轻质煤焦油1号</a></li>
                <li><a>轻质煤焦油2号</a></li>
              </ol>
            </li>
          </ul>
          <!-- 导航栏右侧 -->
          <ul class="nav-right">
            <li class="nav-right-item">
              <!-- <span class="iconfont icon-geren"></span> -->
              <a class="iconfont icon-geren">&nbsp;&nbsp;张一凡</a>
            </li>
            <!-- <li class="line">|</li> -->
            <li class="nav-right-item">
              <!-- <span class="iconfont icon-shezhi"></span> -->
              <a class="iconfont icon-shezhi">&nbsp;&nbsp;注销</a>
            </li>
            <!-- <li class="line">|</li> -->
            <li class="nav-right-item">
              <a class="large">22：30：05</a>
            </li>
            <!-- <li class="line">|</li> -->
            <li class="nav-right-item">
              <img src="./image/yuce.png" />
              <a>兰炭</a>
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name:'Header'
  }
</script>

<style>

/* 头部栏 */
.header {
  width:100%;
  height: 107px;
  position: relative;
  margin:0 auto;
}
/* 清除浮动 */
.header.clearfix:after,
.header.clearfix:before {
  content: "";
  display: block;
  clear: both;
}
/* 图片栏 */
.header .logo img{
  width:100%;
  height:82px;
}
/* 导航栏 */
.header .nav {
  position: absolute;
  left:870px;
  top: 64px;
  display: flex;
  justify-content: space-between;
}
.header .nav a {
  font-size: 16px;
  color: #3dc0e7;
  text-decoration: none;
  font-weight: bold;
}
/* 导航栏左侧 */
.header .nav .nav-left {
  float:left;
  margin-right:201px;
  display: flex;
  justify-content: flex-start;
  
}
.header .nav .nav-left .nav-left-item {
  float: left;
  margin-right:62px;
}
.header .nav .nav-left .nav-left-item .active{
  color: #e1a630;
}
/* 二级菜单显示与否 */
.header .nav .nav-left .nav-left-item .first{
  position: absolute;
  z-index:3;
  display: none;
  left:-10px; 
  top:32px;
} 
.header .nav .nav-left .nav-left-item .second{
  position: absolute;
  z-index:3;
  display: none;
  left:90px; 
  top:32px;
}
.header .nav .nav-left .nav-left-item .third{
  position: absolute;
  z-index:3;
  display: none;
  left:200px; 
  top:32px;
}
.header .nav .nav-left .nav-left-item .fourth{
  position: absolute;
  z-index:3;
  display: none;
  left:328px; 
  top:32px;
  text-align: center;
}
.header .nav .nav-left .nav-left-item  ol > li{
  background: #093350;
  border: 1px solid #1f6390;
  box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.1); 
  padding: 9px;
}
/* 小三角 */
.header .nav .nav-left .nav-left-item  ol > li:before{
  content:"";
  position: absolute;
  z-index: 3;
  top: -5px;
  left:50%;
  width: 0;
  height: 0;
  margin-left:-6px;
  border-width:0 6px 6px;
  border-style:solid;
  border-color:rgba(0,0,0,0) rgba(0,0,0,0) #1f6390;
  /* border-color: transparent transparent #1f6390; */
}
.header .nav .nav-left .nav-left-item  ol > li a{
  font-size: 12px;
}
.header .nav .nav-left .nav-left-item:hover > ol{
  display: block;
}
/* 导航栏右侧 */
.header .nav .nav-right {
  float: right;
  display: flex;
  justify-content: flex-end;
}
.header .nav .nav-right .nav-right-item {
  position: relative;
  box-sizing: border-box;
  width: 115px;
  height: 29px;
}
.header .nav .nav-right .nav-right-item:nth-of-type(2){
  width: 95px;
  height: 29px;
}
.header .nav .nav-right .nav-right-item:nth-of-type(3){
  width:165px;
  height:29px;
}
.header .nav .nav-right .nav-right-item:nth-of-type(3) > a {
  line-height: 20px;
  font-size: 20px;
}
/* 左边第一条线无 */
.header .nav .nav-right .nav-right-item:nth-of-type(1):before{
  position: absolute;
  content:"";
  width: 0px;
  height:0px;
  background-color:#3dc0e7 ;
}
/* 伪类线 */
.header .nav .nav-right .nav-right-item::before{
  position: absolute;
  left:-22px;
  top:0;
  content:"";
  width: 1px;
  height:20px;
  background-color:#3dc0e7 ;
}
/* .header .nav .nav-right .line {
  float: left;
  width: 1px;
  color: #3dc0e7;
  height: 30px;
  margin: 0 24px 0 -12px;
} */
.header .nav .nav-right .nav-right-item .iconfont {
  font-size: 16px;
  color: #3dc0e7;
  text-decoration: none;
  font-weight: bold;
  padding-right: 7px;
}
.header .nav .nav-right .nav-right-item img {
  width: 16px;
  height: 16px;
  padding-right: 5px;
}

</style>