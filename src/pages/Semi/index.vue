<template>
  <!-- 兰炭页面内容区域 -->
  <div class="conten">
    <!-- 主体内容 -->
    <div class="main">
      <!-- 弹出部分 -->
      <div class="smxm1" v-show="ln">
                  <!-- 填报入口 -->
                <div class="header">
                    <span>填报入口</span><i @click="edit">×</i>
                </div>
                 <!-- 原料分析填写 -->
                <div class="tian">
                          <!-- 填报时间 -->
                      <!-- <div class="timer">
                          <span>填报日期</span>
                          <input type="text" placeholder="请选择日期">
                          <i></i>
                      </div> -->
                      <!-- 原料来源分析 -->
                      <div class="fen">
                        <span class="enen"></span><i>原料来源分析</i>
                        <div class="shuru">
                            <div class="san">
                              <a href="#" 
                              v-for="(item,index5) in yuList"
                              :key="index5"
                              :class="num5===index5?'active':''"
                              @click="cliclL5(index5)"
                              >{{item}}<span>|</span></a>
                              <!-- <a href="#">红柳林</a><span>|</span>
                              <a href="#">柠条塔</a><span>|</span>
                              <a href="#" style="color:#fcb018">小保当</a> -->
                            </div>
                            <div class="dao">
                              <span>到厂价</span><input type="text" placeholder="请输入">
                            </div>
                        </div>
                      </div>
                  </div>
                  <!-- 提交 -->
                <div class="sub">
                  <el-button :plain="true" class="bu1" @click="edit">取消</el-button>
                  <el-button :plain="true" @click="open1" class="bu2">提交</el-button>
                </div>
            </div>
            <!-- 电石采购分析弹出 -->
             <div class="smxm2" v-show="ln1">
                  <!-- 填报入口 -->
                <div class="header">
                    <span>填报入口</span><i  @click="edit1">×</i>
                </div>
                 <!-- 原料分析填写 -->
                <div class="tian">
                          <!-- 填报时间 -->
                      <!-- <div class="timer">
                          <span>填报日期</span>
                          <input type="text" placeholder="请选择日期">
                          <i></i>
                      </div> -->
                      <!-- 原料来源分析 -->
                      <div class="fen">
                        <span class="enen"></span><i>电石采购分析</i>
                        <div class="shuru">
                            <div class="dao">
                              <span>北元</span><input type="text" placeholder="请输入出产价"> 
                            </div>
                            <div class="dao">
                              <span>金泰</span><input type="text" placeholder="请输入出产价">
                            </div>
                        </div>
                      </div>
                  </div>
                  <!-- 提交 -->
                <div class="sub">
                  <el-button :plain="true" class="bu1" @click="edit1">取消</el-button>
                  <el-button :plain="true" @click="open2" class="bu2">提交</el-button>
                </div>
            </div>
            <!-- 下游产品分析弹出 -->
             <div class="smxm3" v-show="ln2">
                  <!-- 填报入口 -->
                <div class="header">
                    <span>填报入口</span><i  @click="edit2">×</i>
                </div>
                 <!-- 分析填写 -->
                <div class="tian">
                          <!-- 填报时间 -->
                      <div class="timer">
                          <span>填报日期</span>
                          <input type="text" placeholder="请选择日期">
                          <i></i>
                      </div>
                      <!-- 来源分析 -->
                      <div class="fen">
                        <span class="enen"></span><i>下游产品分析</i>
                        <div class="shuru">
                            <div class="san">
                              <a href="#"
                              v-for="(item,index6) in yuanList"
                              :key="index6"
                              :class="num6===index6?'active':''"
                              @click="cliclL6(index6)"
                              >{{item}}<span>|</span></a>
                              <!-- <a href="#">铸造及民用</a><span>|</span>
                              <a href="#">电石</a><span>|</span>
                              <a href="#" style="color:#fcb018">硅铁</a><span>|</span>
                              <a href="#">形煤及高炉喷吹</a><span>|</span> -->

                            </div>
                            <div class="dao">
                              <span>甘肃</span><input type="text" placeholder="请输入出产价">
                            </div>
                            <div class="dao">
                              <span>内蒙</span><input type="text" placeholder="请输入出产价">
                            </div><div class="dao">
                              <span>宁夏</span><input type="text" placeholder="请输入出产价">
                            </div>
                        </div>
                      </div>
                  </div>
                  <!-- 提交 -->
                <div class="sub">
                  <el-button :plain="true" class="bu1" @click="edit2">取消</el-button>
                  <el-button :plain="true" @click="open3" class="bu2">提交</el-button>
                </div>
            </div>
          <!-- 天元价格分析弹出 -->
             <div class="smxm4" v-show="ln3">
                  <!-- 填报入口 -->
                <div class="header">
                    <span>填报入口</span><i  @click="edit3">×</i>
                </div>
                 <!-- 分析填写 -->
                <div class="tian">
                          <!-- 填报时间 -->
                      <!-- <div class="timer">
                          <span>填报日期</span>
                          <input type="text" placeholder="请选择日期">
                          <i></i>
                      </div> -->
                      <!-- 来源分析 -->
                      <div class="fen">
                        <span class="enen"></span><i>天元价格分析</i>
                        <div class="shuru">
                            
                            <div class="dao">
                              <span>大料</span><input type="text" placeholder="请输入出产价">
                            </div>
                            <div class="dao">
                              <span>中料</span><input type="text" placeholder="请输入出产价">
                            </div><div class="dao">
                              <span>小料</span><input type="text" placeholder="请输入出产价">
                            </div><div class="dao">
                              <span>焦面</span><input type="text" placeholder="请输入出产价">
                            </div><div class="dao">
                              <span>面煤</span><input type="text" placeholder="请输入出产价">
                            </div>
                            
                        </div>
                      </div>
                  </div>
                  <!-- 提交 -->
                <div class="sub">
                  <el-button :plain="true" class="bu1" @click="edit3">取消</el-button>
                  <el-button :plain="true" @click="open4" class="bu2">提交</el-button>
                </div>
            </div>
        <!-- 同行竞品分析弹出部分 -->
            <div class="smxm5" v-show="ln4">
                  <!-- 填报入口 -->
                <div class="header">
                    <span>填报入口</span><i  @click="edit4">×</i>
                </div>
                 <!-- 分析填写 -->
                <div class="tian">
                          <!-- 填报时间 -->
                      <!-- <div class="timer">
                          <span>填报日期</span>
                          <input type="text" placeholder="请选择日期">
                          <i></i>
                      </div> -->
                      <!-- 来源分析 -->
                      <div class="fen">
                        <span class="enen"></span><i>同行竞品分析</i>
                        <div class="shuru">
                            <div class="san">
                              <a href="#"
                              v-for="(item,index8) in zList"
                              :key="index8"
                              :class="num8===index8?'active':''"
                              @click="cliclL8(index8)"
                              >{{item}}<span>|</span></a>
                              <!-- <a href="#"  style="color:#fcb018">柠条塔</a><span>|</span>
                              <a href="#">锦界</a><span>|</span>
                              <a href="#">马来湾</a> -->
                            </div>
                            <div class="daodao">
                                <div class="dao1">
                                    <ul>
                                      <li 
                                      v-for="(item,index9) in zongList[num8]"
                                      :key="index9"
                                      :class="num9===index9?'active':''"
                                      @click="cliclL9(index9)"
                                      >{{item}}</li>
                                      <!-- <li>柠条塔1家</li>
                                      <li style="color:#fcb018">柠条塔2家</li>
                                      <li>柠条塔3家</li>
                                      <li>柠条塔4家</li> -->
                                    </ul>
                                </div>
                                <div class="dao2">
                                    <div class="dao">
                                    <span>大料</span><input type="text" placeholder="请输入出产价">
                                     </div>
                                   <div class="dao">
                                  <span>中料</span><input type="text" placeholder="请输入出产价">
                                  </div>
                                  <div class="dao">
                                  <span>小料</span><input type="text" placeholder="请输入出产价">
                                  </div>
                                  <div class="dao">
                                  <span>焦面</span><input type="text" placeholder="请输入出产价">
                                  </div>
                                  <div class="dao">
                                  <span>面煤</span><input type="text" placeholder="请输入出产价">
                                  </div>
                                </div>
                            </div>
                            
                        </div>
                      </div>
                  </div>
                  <!-- 提交 -->
                <div class="sub">
                  <el-button :plain="true" class="bu1" @click="edit4">取消</el-button>
                  <el-button :plain="true" @click="open5" class="bu2">提交</el-button>
                </div>
            </div>

          <!-- 下游采购分析弹出 -->
             <div class="smxm6" v-show="ln5">
                  <!-- 填报入口 -->
                <div class="header">
                    <span>填报入口</span><i  @click="edit5">×</i>
                </div>
                 <!-- 原料分析填写 -->
                <div class="tian">
                          <!-- 填报时间 -->
                      <!-- <div class="timer">
                          <span>填报日期</span>
                          <input type="text" placeholder="请选择日期">
                          <i></i>
                      </div> -->
                      <!-- 下游采购分析 -->
                      <div class="fen">
                        <span class="enen"></span><i>下游采购分析</i>
                        <div class="shuru">
                            <div class="san">
                              <a href="#"
                              v-for="(item,index7) in xiaList"
                              :key="index7"
                              :class="num7===index7?'active':''"
                              @click="cliclL7(index7)"
                              >{{item}}</a><span>|</span>
                              <!-- <a href="#" style="color:#fcb018">君正</a><span>|</span>
                              <a href="#">颚绒</a> -->
                            </div>
                            <div class="dao">
                              <span>中料</span><input type="text" placeholder="请输入出产价">
                            </div>
                            <div class="dao">
                              <span>小料</span><input type="text" placeholder="请输入出产价">
                            </div>
                        </div>
                      </div>
                  </div>
                  <!-- 提交 -->
                <div class="sub">
                  <el-button :plain="true" class="bu1" @click="edit5">取消</el-button>
                  <el-button :plain="true" @click="open6" class="bu2">提交</el-button>
                </div>
            </div>

            <!-- 填报入口 -->
            <div class="smxm7" v-show="ln6">
                  <!-- 填报入口 -->
                <div class="header">
                    <span>填报入口</span><i  @click="edit6">×</i>
                </div>
                 <!-- 原料分析填写 -->
                <div class="tian">
                          <!-- 填报时间 -->
                      <div class="timer">
                          <span>填报日期</span>
                          <!-- <input type="text" placeholder="请选择填报日期"> -->
                          <el-date-picker
                            v-model="value1"
                            type="date"
                            placeholder="请选择填报日期"
                            format="yyyy 年 MM 月 dd 日"
                            value-format="yyyy-MM-dd"
                            >
                          </el-date-picker>
                          <i></i>
                      </div>
                      <!-- 原料来源分析 -->
                      <div class="fen">
                        <span class="enen"></span><i>原料来源分析</i>
                        <div class="shuru">
                            <div class="san">
                              <a href="#" 
                              v-for="(item,index10) in yuList"
                              :key="index10"
                              :class="num10===index10?'active':''"
                              @click="cliclL10(index10)"
                              >{{item}}<span>|</span></a>
                              <!-- <a href="#">红柳林</a><span>|</span>
                              <a href="#">柠条塔</a><span>|</span>
                              <a href="#" style="color:#fcb018">小保当</a> -->
                            </div>
                            <div class="dao" style="border: 1px solid #25609d">
                              <span>到厂价</span><input type="text" placeholder="请输入">
                            </div>
                        </div>
                      </div>
                      <!-- 同行竞品分析 -->
                      <div class="fen">
                        <span class="enen"></span><i>同行竞品分析</i>
                        <div class="shuru">
                            <div class="san">
                              <a href="#"
                              v-for="(item,index11) in zList"
                              :key="index11"
                              :class="num11===index11?'active':''"
                              @click="cliclL11(index11)"
                              >{{item}}<span>|</span></a>
                              <!-- <a href="#"  style="color:#fcb018">柠条塔</a><span>|</span>
                              <a href="#">锦界</a><span>|</span>
                              <a href="#">马来湾</a> -->
                            </div>
                            <div class="daodao">
                                <div class="dao1">
                                    <ul>
                                      <li 
                                      v-for="(item,index12) in zongList[num11]"
                                      :key="index12"
                                      :class="num12===index12?'active':''"
                                      @click="cliclL12(index12)"
                                      >{{item}}</li>
                                      <!-- <li>柠条塔1家</li>
                                      <li style="color:#fcb018">柠条塔2家</li>
                                      <li>柠条塔3家</li>
                                      <li>柠条塔4家</li> -->
                                    </ul>
                                </div>
                                <div class="dao2">
                                    <div class="dao3">
                                    <span>大料</span><input type="text" placeholder="请输入出产价">
                                     </div>
                                   <div class="dao3">
                                  <span>中料</span><input type="text" placeholder="请输入出产价">
                                  </div>
                                  <div class="dao3">
                                  <span>小料</span><input type="text" placeholder="请输入出产价">
                                  </div>
                                  <div class="dao3">
                                  <span>焦面</span><input type="text" placeholder="请输入出产价">
                                  </div>
                                  <div class="dao3">
                                  <span>面煤</span><input type="text" placeholder="请输入出产价">
                                  </div>
                                </div>
                            </div>
                            
                        </div>
                      </div>
                      <!-- 天元价格分析 -->
                       <div class="fen">
                        <span class="enen"></span><i>天元价格分析</i>
                        <div class="shuru">
                            
                            <div class="dao">
                              <span>大料</span><input type="text" placeholder="请输入出产价">
                            </div>
                            <div class="dao">
                              <span>中料</span><input type="text" placeholder="请输入出产价">
                            </div><div class="dao">
                              <span>小料</span><input type="text" placeholder="请输入出产价">
                            </div><div class="dao">
                              <span>焦面</span><input type="text" placeholder="请输入出产价">
                            </div><div class="dao">
                              <span>面煤</span><input type="text" placeholder="请输入出产价">
                            </div>
                            
                        </div>
                      </div>
                      <!-- 下游产品分析 -->
                      <div class="fen">
                        <span class="enen"></span><i>下游产品分析</i>
                        <div class="shuru">
                            <div class="san">
                              <a href="#"
                              v-for="(item,index13) in yuanList"
                              :key="index13"
                              :class="num13===index13?'active':''"
                              @click="cliclL13(index13)"
                              >{{item}}<span>|</span></a>
                              <!-- <a href="#">铸造及民用</a><span>|</span>
                              <a href="#">电石</a><span>|</span>
                              <a href="#" style="color:#fcb018">硅铁</a><span>|</span>
                              <a href="#">形煤及高炉喷吹</a><span>|</span> -->

                            </div>
                            <div class="dao">
                              <span>甘肃</span><input type="text" placeholder="请输入出产价">
                            </div>
                            <div class="dao">
                              <span>内蒙</span><input type="text" placeholder="请输入出产价">
                            </div><div class="dao">
                              <span>宁夏</span><input type="text" placeholder="请输入出产价">
                            </div>
                        </div>
                      </div>
                      <!-- 电石采购分析 -->
                      <div class="fen">
                        <span class="enen"></span><i>电石采购分析</i>
                        <div class="shuru">
                            <div class="dao">
                              <span>北元</span><input type="text" placeholder="请输入出产价"> 
                            </div>
                            <div class="dao">
                              <span>金泰</span><input type="text" placeholder="请输入出产价">
                            </div>
                        </div>
                      </div>
                      <!-- 下游采购分析 -->
                      <div class="fen">
                        <span class="enen"></span><i>下游采购分析</i>
                        <div class="shuru">
                            <div class="san">
                              <a href="#"
                              v-for="(item,index14) in xiaList"
                              :key="index14"
                              :class="num14===index14?'active':''"
                              @click="cliclL14(index14)"
                              >{{item}}<span>|</span></a>
                              <!-- <a href="#" style="color:#fcb018">君正</a><span>|</span>
                              <a href="#">颚绒</a> -->
                            </div>
                            <div class="dao">
                              <span>中料</span><input type="text" placeholder="请输入出产价">
                            </div>
                            <div class="dao">
                              <span>小料</span><input type="text" placeholder="请输入出产价">
                            </div>
                        </div>
                      </div>
                  </div>
                  <!-- 提交 -->
                <div class="sub">
                  <el-button :plain="true" class="bu1" @click="edit6">取消</el-button>
                  <el-button :plain="true" @click="open7" class="bu2">提交</el-button>
                </div>
            </div>






      <!-- 左部分 -->
        <div class="left"> 
          <!-- 原料分析 -->
            <div class="l_top"
            @click="edit"
            >
             <img src="./image/30.png" alt="">
             <h2 class="top1">原料分析</h2>
             <ul>
               <li class="li1">
                 <div class="price">
                   <img src="./image/33.png" alt="">
                    <span>红柳林</span> 
                    <i>到厂价：<strong>5,835</strong></i> 
                 </div>
                 <div class="tiao">
                   <el-progress 
                   :percentage="70"
                   :width="380"
                   :show-text="false"
                   
                   ></el-progress>
                 </div>
               </li>
               <li class="li1">
                 <div class="price">
                   <img src="./image/33.png" alt="">
                    <span>柠条塔</span>
                    <i>到厂价：<strong>6,325</strong></i> 
                 </div>
                 <div class="tiao">
                   <el-progress 
                   :percentage="60"
                   :width="380"
                   :show-text="false"
                   
                   ></el-progress>
                 </div>
               </li>
               <li class="li1">
                 <div class="price">
                   <img src="./image/33.png" alt="">
                    <span>小保当</span> 
                    <i>到厂价：<strong>4,876</strong></i> 
                 </div>
                 <div class="tiao">
                   <el-progress 
                   :percentage="90"
                   :width="380"
                   :show-text="false"
                   
                   ></el-progress>
                 </div>
               </li>
               <!-- <span class="soon"><i></i></span> -->
             </ul>
            </div>
            <!-- 电石采购分析 -->
            <div class="l_center">
              <img src="./image/30.png" alt="">
              <h2>电石采购分析</h2>
              <div class="purch"  @click="edit1">
                <!-- 北元 -->
                <div class="beiyuan">
                  <div class="beiyuan1">
                  <img src="./image/2.png" alt=""><span>北元</span>
                  <i>电石：<strong>5,835</strong></i>
                  </div>
                  <div class="beiyuan2">
                   <el-progress 
                   :percentage="60"
                   :width="380"
                   :show-text="false"
                   
                   ></el-progress>
                 </div>
                </div>
                <!-- 金泰 -->
                <div class="jintai">
                  <div class="jintai1">
                  <img src="./image/1.png" alt=""><span>金泰</span>
                  <i>电石：<strong>6,325</strong></i>
                  </div>
                  <div class="jintai2">
                   <el-progress 
                   :percentage="80"
                   :width="380"
                   :show-text="false"
                   ></el-progress>
                 </div>
                </div>
              </div>
            </div>
            <!-- 下游产品分析 -->
            <div class="l_bottom">
              <img src="./image/88.png" alt="">
              <h2>下游产品分析</h2>
              <div class="price">
                <!-- 产品导航栏 -->
                <div class="conter">
                    <div class="nav">
                      <ul>
                        <li 
                        v-for="(item,index) in yuanList"
                        :key="index"
                        >
                        <a href="#" 
                        :class="num===index?'active':''"
                        @click="cliclL(index)"
                        >{{item}}</a><span>|</span>
                        </li>
                        <!-- <li>
                          <a href="#"  style="color:#e1a630">铸造及民用</a><span>|</span>
                        </li>
                        <li>
                          <a href="#">电石</a><span>|</span>
                        </li>
                        <li>
                          <a href="#">硅铁</a><span>|</span>
                        </li>
                        <li>
                          <a href="#">形煤及高炉喷吹</a><span>|</span>
                        </li> -->
                      </ul>
                    </div>
                    <!-- 分地区展示 -->
                    <div class="area" @click="edit2">
                          <div class="area1">
                            <el-progress type="dashboard" 
                            :width="105"
                            :percentage="80" 
                            :show-text="false"
                            >
                            </el-progress>
                            <span>5,321</span>
                            <a href="#">铸铁价格</a>
                          </div>
                            <div class="area2">
                            <el-progress type="dashboard" 
                            :width="105"
                            :percentage="80" 
                            :show-text="false"
                            >
                            </el-progress>
                            <span>4,343</span>
                            <a href="#">钢用价格</a>
                          </div>
                          <div class="area3">
                            <el-progress type="dashboard" 
                            :width="105"
                            :percentage="80" 
                            :show-text="false"
                            >
                            </el-progress>
                            <span>4,343</span>
                            <a href="#">民用价格</a>
                          </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
      <!-- 中间部分 -->
        <div class="center">
             <!-- 兰炭价格预测 -->
            <div class="c_top">
               <img src="./image/background -main.png" alt="">
                <h2>兰炭预测价</h2>
               <div class="top_table">
                 <!-- 填报入口 -->
                  <div class="time">
                        <!-- <div class="block"> -->
                          <el-date-picker
                            v-model="value1"
                            type="date"
                            placeholder="选择日期"
                            format="yyyy 年 MM 月 dd 日"
                            value-format="yyyy-MM-dd"
                            >
                          </el-date-picker>
                        <!-- </div> -->
                      <a href="#" @click="edit6"> 填报入口</a>  
                  </div>
                  <!-- 柱状图区域 -->
                  <div class="column">
                      <div id="dd" style="width:750px;height:480px"></div>
                  </div>
               </div>
            </div>
            <!-- 天元价格分析 -->
            <div class="c_bottom">
                <img src="./image/background -main.png" alt="">
                <h2>天元价格分析</h2>
                <div class="b_table">
                    <!-- <div id="chart" @click="edit3" style="width:750px;height:200px">
                       <Echarts></Echarts>
                    </div>               -->
                    <div class="ech" @click="edit3">
                      <img src="./image/777.png" alt="">
                    </div>
                </div>
            </div>
         </div>
      <!-- 右边部分 -->
         <div class="right">
             <!-- 同行竞品分析 -->
             <div class="analysis">
                 <img src="./image/88.png" alt="">
                 <h2>同行竞品分析</h2>
                 <ul>
                   <!-- 柠条塔数据 -->
                   <li>
                      <div class="header">
                        <span></span><i>柠条塔</i>
                      </div>
                      <div class="nav">
                          <div class="list">
                            <a href="#"
                            v-for="(item,index1) in ningList"
                              :key="index1"
                              :class="num1===index1?'active':''"
                              @click="cliclL1(index1)"
                            >{{item}}</a>
                              
                            
                          </div>
                          <div class="tu" @click="edit4">
                             
                               <div class="tu1">
                                 <img src="./image/大料.png" alt="">
                                 <span>大料</span>
                                 <i>3334</i>
                               </div>

                               <div class="tu1">
                                 <img src="./image/中料.png" alt="">
                                 <span>中料</span>
                                 <i>3334</i>
                               </div>

                               <div class="tu1">
                                 <img src="./image/小料.png" alt="">
                                 <span>小料</span>
                                 <i>3334</i>
                               </div>

                               <div class="tu1">
                                 <img src="./image/焦面.png" alt="">
                                 <span>焦面</span> 
                                 <i>3334</i>
                               </div>

                               <div class="tu1" style="border-right:none">
                                 <img src="./image/面煤.png" alt="">
                                 <span>面煤</span>
                                 <i>3334</i>
                               </div>
                             
                          </div>
                      </div>
                   </li>
                   <!-- 锦界数据 -->
                   <li>
                      <div class="header">
                        <span></span><i>锦界</i>
                      </div>
                      <div class="nav">
                          <div class="list">
                            <a href="#"
                            v-for="(item,index2) in jinList"
                            :key="index2"
                            :class="num2===index2?'active':''"
                            @click="cliclL2(index2)"
                            >{{item}}</a>

                              
                            
                          </div>
                          <div class="tu" @click="edit4">
                             
                               <div class="tu1">
                                 <img src="./image/大料.png" alt="">
                                 <span>大料</span>
                                 <i>3334</i>
                               </div>

                               <div class="tu1">
                                 <img src="./image/中料.png" alt="">
                                 <span>中料</span>
                                 <i>3334</i>
                               </div>

                               <div class="tu1">
                                 <img src="./image/小料.png" alt="">
                                 <span>小料</span>
                                 <i>3334</i>
                               </div>

                               <div class="tu1">
                                 <img src="./image/焦面.png" alt="">
                                 <span>焦面</span> 
                                 <i>3334</i>
                               </div>

                               <div class="tu1" style="border-right:none">
                                 <img src="./image/面煤.png" alt="">
                                 <span>面煤</span>
                                 <i>3334</i>
                               </div>
                             
                          </div>
                      </div>
                   </li>
                   <!-- 马来湾数据 -->
                   <li>
                      <div class="header">
                        <span></span><i>马来湾</i>
                      </div>
                      <div class="nav">
                          <div class="list">
                             <a href="#"
                             v-for="(item,index3) in maList"
                              :key="index3"
                              :class="num3===index3?'active':''"
                              @click="cliclL3(index3)"
                             >{{item}}</a>
                            
                          </div>
                          <div class="tu" @click="edit4">
                             
                               <div class="tu1">
                                 <img src="./image/大料.png" alt="">
                                 <span>大料</span>
                                 <i>3334</i>
                               </div>

                               <div class="tu1">
                                 <img src="./image/中料.png" alt="">
                                 <span>中料</span>
                                 <i>3334</i>
                               </div>

                               <div class="tu1">
                                 <img src="./image/小料.png" alt="">
                                 <span>小料</span>
                                 <i>3334</i>
                               </div>

                               <div class="tu1">
                                 <img src="./image/焦面.png" alt="">
                                 <span>焦面</span> 
                                 <i>3334</i>
                               </div>

                               <div class="tu1" style="border-right:none">
                                 <img src="./image/面煤.png" alt="">
                                 <span>面煤</span>
                                 <i>3334</i>
                               </div>
                             
                          </div>
                      </div>
                   </li>
                 </ul>
             </div>
             <!-- 下游采购分析 -->
             <div class="buyer">
                <img src="./image/88.png" alt="">
                 <h2>下游采购分析</h2>
                 <div class="price">
                    <div class="header">
                         <div class="header1"
                         v-for="(item,index4) in xiaList"
                        :key="index4"
                         ><a href="#"
                         :class="num4===index4?'active':''"
                         @click="cliclL4(index4)"
                         >{{item}}</a><span>|</span></div>
                        <!-- <div class="header1"><a href="#" style="color:#e1a630">君正</a><span>|</span></div>
                        <div class="header1"><a href="#">颚绒</a><span>|</span></div> -->
                    </div>
                    <!-- 申料价格和小料价格 -->
                    <div class="area"  @click="edit5">
                          <div class="area1">
                            <el-progress type="dashboard" 
                            :width="125"
                            :percentage="80" 
                            :show-text="false"
                            >
                            </el-progress>
                            <span>5,231</span>
                            <a href="#"  style="color:#e1a630">中料价格</a>
                          </div>
                            <div class="area2">
                            <el-progress type="dashboard" 
                            :width="125"
                            :percentage="60" 
                            :show-text="false"
                            >
                            </el-progress>
                            <span>4,343</span>
                            <a href="#">小料价格</a>
                          </div>
                     </div>
                 </div>
             </div>
         </div>
    </div>
  </div>

</template>

<script>

import Header from "../../components/Header"
import Input from "./Input"
// import Echarts from "./Echarts"
import echarts from 'echarts'

  export default {
    data() {
      return {
        yuList:['红树林','柠条塔','小保当'],
        ningList:['柠条塔1家','柠条塔2家','柠条塔3家','柠条塔4家'],
        jinList:['锦界1家','锦界2家','锦界3家','锦界4家'],
        maList:['马来湾1家','马来湾2家'],
        xiaList:['君正','颚绒'],
        yuanList:['铸造及民用','电石','硅铁','形煤及高炉喷吹'],
        zList:['柠条塔','锦界','马来湾'],
        zongList:[['柠条塔1家','柠条塔2家','柠条塔3家','柠条塔4家'],['锦界1家','锦界2家','锦界3家','锦界4家'],['马来湾1家','马来湾2家']],
        num:0,
        num1:0,
        num2:0,
        num3:0,
        num4:0,
        num5:0,
        num6:0,
        num7:0,
        num8:0,
        num9:0,
        num10:0,
        num11:0,
        num12:0,
        num13:0,
        num14:0,
        // name:'Peice',
        // components: {Echarts},
         pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        ln:false,
        ln1:false,
        ln2:false,
        ln3:false,
        ln4:false,
        ln5:false,
        ln6:false
        
      }
    },
    // 点击事件
     methods: {
        edit () {
          this.ln = !this.ln
        },
        edit1 () {
          this.ln1 = !this.ln1
        },
        edit2 () {
          this.ln2 = !this.ln2
        },
        edit3 () {
          this.ln3 = !this.ln3
        },
        edit4 () {
          this.ln4 = !this.ln4
        },
        edit5 () {
          this.ln5 = !this.ln5
        },
        edit6 () {
          this.ln6 = !this.ln6
        },
        open1() {
        this.ln = !this.ln,
        this.$message(
          {
          showClose: true,
          message: '更新原料来源分析成功',
          type: 'success',
          center: true
        })
      },
      open2() {
        this.ln1 = !this.ln1,
        this.$message(
          {
          showClose: true,
          message: '更新电石采购分析分析成功',
          type: 'success',
          center: true
        })
      },
      open3() {
        this.ln2 = !this.ln2,
        this.$message(
          {
          showClose: true,
          message: '更新下游产品分析成功',
          type: 'success',
          center: true
        })
      },
      open4() {
        this.ln3 = !this.ln3,
        this.$message(
          {
          showClose: true,
          message: '更新天元价格分析成功',
          type: 'success',
          center: true
        })
      },
      open5() {
        this.ln4 = !this.ln4,
        this.$message(
          {
          showClose: true,
          message: '更新同行竞品分析成功',
          type: 'success',
          center: true
        })
      },
      open6() {
        this.ln5 = !this.ln5,
        this.$message(
          {
          showClose: true,
          message: '更新下游采购分析成功',
          type: 'success',
          center: true
        })
      },
      open7() {
        this.ln6 = !this.ln6,
        this.$message(
          {
          showClose: true,
          message: '更新兰炭数据分析成功',
          type: 'success',
          center: true
        })
      },
      cliclL(index){
        this.num = index
      },
      cliclL1(index1){
        this.num1 = index1
      },
      cliclL2(index2){
        this.num2 = index2
      },
      cliclL3(index3){
        this.num3 = index3
      },
      cliclL4(index4){
        this.num4 = index4
      },
      cliclL5(index5){
        this.num5 = index5
      },
      cliclL6(index6){
        this.num6 = index6
      },
      cliclL7(index7){
        this.num7 = index7
      },
      cliclL8(index8){
        this.num8 = index8
      },
      cliclL9(index9){
        this.num9 = index9
      },
      cliclL10(index10){
        this.num10= index10
      },
      cliclL11(index11){
        this.num11= index11
      },
      cliclL12(index12){
        this.num12= index12
      },
      cliclL13(index13){
        this.num13= index13
      },
      cliclL14(index14){
        this.num14= index14
      }
      
    },
    // 柱状图
    mounted() {
      

    // 天元价格分析图 备用
// option = {
//     tooltip: {
//         trigger: 'axis',
//         axisPointer: {            // 坐标轴指示器，坐标轴触发有效
//             type: 'shadowColor'        // 默认为直线，可选为：'line' | 'shadow'
//         }
//     },
//     legend: {
//         data: []
//     },
//     grid: {
//         left: '5%',
//         right: '4%',
//         bottom: '6%',
//         containLabel: false
//     },
//     xAxis: [
//         {
//             type: 'category',
//             data: ['10.11', '10.12', '10.13', '10.14', '10.15', '10.16', '10.17', '10.18','10.19','10.20']
//         }
//     ],
//     yAxis: [
//         {
//             type: 'value'
//         }
//     ],
//     series: [
//         {
//             name: '直接访问',
//             type: 'bar',
//             data: [320, 332, 301, 334, 390, 330, 320, 390, 330, 320],
//             barWidth: 3,
//             itemStyle:{
//                     normal:{
//                     color:'#00fea3'
//                             }
//                 }
//         },
//         {
//             name: '视频广告',
//             type: 'bar',
//             stack: '广告',
//             data: [150, 232, 201, 154, 190, 330, 410,390, 330, 320],
//             barWidth: 3,
//             itemStyle:{
//                     normal:{
//                     color:'#fb6f38'
//                             }
//                 }
//         },
//         {
//             name: '搜索引擎',
//             type: 'bar',
//             data: [862, 862, 862,862,862,862,862, 862, 862, 862],
//             barWidth: 3,
//             itemStyle:{
//                     normal:{
//                     color:' #f1e291'
//                             }
//                 },
            
//             markLine: {
//                 lineStyle: {
//                     type: 'dashed'
//                 },
//                 data: [
//                     // [{type: 'min'}, {type: 'max'}]
//                 ]
//             },
//         },
//         {
//             name: '百度',
//             type: 'bar',
//             // barWidth: 5,
//             stack: '搜索引擎',
//             data: [620, 620,620,620,620,620,620,620,620,620],
//             barWidth: 3,
//             itemStyle:{
//                     normal:{
//                     color:'#4d7fd0'
//                             }
//                 }
//         }
        
//     ]
// }
    

      var myChart = echarts.init(document.getElementById('dd'))

      // 柱体图
        const data =[6200, 6300, 7400, 6300, 7200]
        var option = {
            title: {
                text: ''
            },
            tooltip: {},
            grid: {
                x: '12%', //距离左边
                x2: '0%', //距离右边
                y: '15%', // 上距离
                y2: '8%', // 下距离
            },
            legend: {
                data:['']
            },
            xAxis: {
                axisLabel: {
                    interval: 0, //横轴信息全部显示
                    rotate: 0, //0度角倾斜显示
                    show: true,
                    textStyle: {
                        color: '#fff'
                    },
                },
                axisLine: {
                    lineStyle: {
                        color: '#B6C1C4',
                    },
                },
                axisTick: {
                    show: false,
                },
                data: ["大料","中料","小料","焦面","面煤"]
            },
            yAxis: 
                  {
                  axisLabel: {
                    rotate: 0, //0度角倾斜显示
                    show: true,
                    textStyle: {
                        color: '#fff'
                    },
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff',
                    },
                },

                  },
            series: [{
                name: '预测价格',
                type: 'bar',
                barWidth: 59,
                barGap: 200,
                barCategoryGap: 200,
                data: data,
                itemStyle: {
                    normal:{
                            color: function (params){
                            var colorList = ['#00fea3','#fb6f38','#f1e291','#33fff7','#4d7fd0'];
                            return colorList[params.dataIndex];
                    }}
                            },
                    label: {
                    show: false, // 柱子顶部的数值
                    position: 'top',
                    top: 0,
                    fontSize: 6,
                    offset: [0, -30],
                    formatter: function(params) {
                        let num = params.value;
                        if (num > 1024) {
                            return (num / 1024).toFixed(2) + 'GB'
                        } else if (num < 1024 && num > 0) {
                            return num.toFixed(2) + ''
                        } else {
                            return '';
                        }
                    }
                },
            },
             {
                type: 'bar',
                barWidth: 20,
                itemStyle: {
                    normal:{
                            color: function (params){
                            var colorList =  ['#00fea3','#fb6f38','#f1e291','#33fff7','#4d7fd0'];
                            return colorList[params.dataIndex];
                    }}
                },
                barGap: 0,
                data: data.map(item => item + 3)
            },{
                name: 'b',
                tooltip: {
                    show: false
                },
                type: 'pictorialBar',
                itemStyle: {
                    normal:{
                            color: function (params){
                            var colorList = ['#00fea3','#fb6f38','#f1e291','#33fff7','#4d7fd0'];
                            return colorList[params.dataIndex];
                    }}

                },
                symbol: 'path://M 0,0 l 120,0 l -30,60 l -120,0 z',
                symbolSize: ['68', '4'],
                symbolOffset: ['-0.6', '-3.5'], // 左右 ，上下
                symbolRotate: 0,
                symbolPosition: 'end',
                data: data,
                z: 3
            }
        ]
            }
     myChart.setOption(option)
     }
     
  }

  

</script>

<style lang="less">
   
    /* 外部容器 */
    .container {
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
      a{
          text-decoration: none;
      }
    }
    
    input{color:#fff}
    ::-webkit-scrollbar{width:0;}
    ::-webkit-input-placeholder{
      color: #fff;
      text-indent: 10px;
    }
    
       /* 主体内容 */
    .main{
        box-sizing: border-box;
        width: 1890px;
        height: 959px;
        /* margin: 2px 18px 12px 12px; */
        background: url(./image/kuang.png) no-repeat;
        background-size: cover;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        color: #fff;
        position: relative;

        // 弹出部分样式

        // 原料分析弹出样式
        .smxm1{
          z-index: 100;
          position: absolute;
          top: 0px;
          left: 720px;
          width: 590px;
          background: rgba(9,38,78,0.9);
          border: 1px solid #2294d5;
          .header{
            width: 588px;
            height: 50px;
            background: rgba(19,74,145,0.38);
            line-height: 50px;
            display: flex;
            justify-content: space-between;
            span{
              width: 80px;
              height: 18px;
              font-size: 18px;
              font-weight: 400;
              color: #fffefe;
              margin-left: 20px;
            }
            i{
              width: 16px;
              height: 16px;
              color: #ffffff;
              margin-right: 20px;
              cursor: pointer;
            }
            i:hover{
              color: #fcb018;
            }
          }
          .tian{
            padding: 15px 27px 0 27px;
            .timer{
              position: relative;
              width: 534px;
              height: 60px;
              border-bottom: 1px solid #184f7d;
              span{
                width: 49px;
                height: 12px;
                font-size: 12px;
                font-weight: 400;
                text-align: left;
                color: #ffffff;
                line-height: 24px;
                margin: 0 12px;
              }
              input{
                width: 432px;
                height: 35px;
                background: rgba(3,20,46,0.3);
                border: 1px solid #0797a7;
                border-radius: 2px;
              }
              i{
                width: 0;
                height: 0;
                border-left: 4px solid transparent;
                border-right: 4px solid transparent;
                border-top: 4px solid #33fff7;
                position: absolute;
                right: 35px;
                top: 18px;
              }
            }
            .fen{
              padding: 20px 0;
              .enen{
                display: inline-block;
                width: 4px;
                height: 12px;
                background: #33fff7;
              }
              i{
                width: 99px;
                height: 16px;
                font-size: 16px;
                font-weight: 500;
                text-align: left;
                color: #33fff7;
                line-height: 40px;
                letter-spacing: 1px;
                padding-left: 15px;
              }
              .shuru{
                width: 500px;
                height: 108px;
                padding-left: 15px;
                .san{
                  width: 500px;
                  height: 36px;
                  background: #1d477d;
                  border: 1px solid #235c97;
                  line-height: 36px;
                  a{
                    font-size: 14px;
                    color: #fff;
                    margin: 0 10px;
                    font-weight: 100;
                    text-decoration: none;
                    span{
                    color: #25609d;
                    margin-left: 15px;
                    }
                  }
                  a.active{
                    color:#fcb018;
                  }
                  
                }
                .dao{
                  width: 500px;
                  height: 72px;
                  background: rgba(8,29,57,0);
                  border: 1px solid #25609d;
                  border-radius: 2px;
                  line-height: 72px;
                  border-top: none;
                  span{
                    margin-left: 13px;
                  }
                  input{
                    width: 408px;
                    height: 28px;
                    background: rgba(3,20,46,0.3);
                    border: 1px solid #0797a7;
                    border-radius: 2px;
                    margin-left: 20px;
                  }
                }
              }
            }
          }
          // 按钮
          .sub{
            width: 488px;
            height: 68px;
            background: #09264e;
            box-shadow: 0px 0px 40px 0px rgba(12,21,48,0.3); 
            line-height: 70px;
            text-align: right;
            padding-right: 100px;
              .bu1{
                      width: 84px;
                      height: 36px;
                      border: 1px solid #2294d5;
                      border-radius: 4px;
                      background: rgba(3,20,46,0.3);
                      color: #fff;
                      cursor: pointer;
                      // border: none;  按钮边框去除
                    }
                    .bu2{
                      width: 84px;
                      height: 36px;
                      background: #2294d5;
                      border-radius: 4px;
                      color: #fff;
                      border: none;
                      margin-left: 8px;
                      cursor: pointer;
                    }
          }
        }
        // 电石采购分析弹出
        .smxm2{
          z-index: 100;
          position: absolute;
          top: 0px;
          left: 720px;
          width: 590px;
          background: rgba(9,38,78,0.9);
          border: 1px solid #2294d5;
          .header{
            width: 588px;
            height: 50px;
            background: rgba(19,74,145,0.38);
            line-height: 50px;
            display: flex;
            justify-content: space-between;
            span{
              width: 80px;
              height: 18px;
              font-size: 18px;
              font-weight: 400;
              color: #fffefe;
              margin-left: 20px;
            }
            i{
              width: 16px;
              height: 16px;
              color: #ffffff;
              margin-right: 20px;
              cursor: pointer;
            }
            i:hover{
              color: #fcb018;
            }
          }
          .tian{
            padding: 15px 27px 0 27px;
            .timer{
              position: relative;
              width: 534px;
              height: 60px;
              border-bottom: 1px solid #184f7d;
              span{
                width: 49px;
                height: 12px;
                font-size: 12px;
                font-weight: 400;
                text-align: left;
                color: #ffffff;
                line-height: 24px;
                margin: 0 12px;
              }
              input{
                width: 432px;
                height: 35px;
                background: rgba(3,20,46,0.3);
                border: 1px solid #0797a7;
                border-radius: 2px;
              }
              i{
                width: 0;
                height: 0;
                border-left: 4px solid transparent;
                border-right: 4px solid transparent;
                border-top: 4px solid #33fff7;
                position: absolute;
                right: 35px;
                top: 18px;
              }
            }
            .fen{
              padding: 20px 0;
              .enen{
                display: inline-block;
                width: 4px;
                height: 12px;
                background: #33fff7;
              }
              i{
                width: 99px;
                height: 16px;
                font-size: 16px;
                font-weight: 500;
                text-align: left;
                color: #33fff7;
                line-height: 40px;
                letter-spacing: 1px;
                padding-left: 15px;
              }
              .shuru{
                width: 500px;
                // height: 108px;
                padding-left: 15px;
                box-sizing: border-box;
                .san{
                  width: 500px;
                  height: 36px;
                  background: #1d477d;
                  border: 1px solid #235c97;
                  line-height: 36px;
                  a{
                    font-size: 14px;
                    color: #fff;
                    margin: 0 15px;
                    font-weight: 100;
                    text-decoration: none;
                  }
                  span{
                    color: #25609d;
                  }
                }
                .dao{
                  width: 500px;
                  height: 72px;
                  background: rgba(8,29,57,0);
                  // border: 1px solid #25609d;
                  border-radius: 2px;
                  line-height: 72px;
                  border-top: none;
                  box-sizing: border-box;
                  span{
                    margin-left: 13px;
                  }
                  input{
                    width: 408px;
                    height: 28px;
                    background: rgba(3,20,46,0.3);
                    border: 1px solid #0797a7;
                    border-radius: 2px;
                    margin-left: 20px;
                  }
                }
              }
            }
          }
          // 按钮
          .sub{
            width: 488px;
            height: 68px;
            background: #09264e;
            box-shadow: 0px 0px 40px 0px rgba(12,21,48,0.3); 
            line-height: 70px;
            text-align: right;
            padding-right: 100px;
              .bu1{
                      width: 84px;
                      height: 36px;
                      border: 1px solid #2294d5;
                      border-radius: 4px;
                      background: rgba(3,20,46,0.3);
                      color: #fff;
                      cursor: pointer;
                      // border: none;  按钮边框去除
                    }
                    .bu2{
                      width: 84px;
                      height: 36px;
                      background: #2294d5;
                      border-radius: 4px;
                      color: #fff;
                      border: none;
                      margin-left: 8px;
                      cursor: pointer;
                    }
          }
        }
        // 下游产品分析弹出内容
        .smxm3{
          z-index: 100;
          position: absolute;
          top: 0px;
          left: 720px;
          width: 590px;
          background: rgba(9,38,78,0.9);
          border: 1px solid #2294d5;
          .header{
            width: 588px;
            height: 50px;
            background: rgba(19,74,145,0.38);
            line-height: 50px;
            display: flex;
            justify-content: space-between;
            span{
              width: 80px;
              height: 18px;
              font-size: 18px;
              font-weight: 400;
              color: #fffefe;
              margin-left: 20px;
            }
            i{
              width: 16px;
              height: 16px;
              color: #ffffff;
              margin-right: 20px;
              cursor: pointer;
            }
            i:hover{
              color: #fcb018;
            }
          }
          .tian{
            padding: 15px 27px 0 27px;
            .timer{
              position: relative;
              width: 534px;
              height: 60px;
              border-bottom: 1px solid #184f7d;
              span{
                width: 49px;
                height: 12px;
                font-size: 12px;
                font-weight: 400;
                text-align: left;
                color: #ffffff;
                line-height: 24px;
                margin: 0 12px;
              }
              input{
                width: 432px;
                height: 35px;
                background: rgba(3,20,46,0.3);
                border: 1px solid #0797a7;
                border-radius: 2px;
              }
              i{
                width: 0;
                height: 0;
                border-left: 4px solid transparent;
                border-right: 4px solid transparent;
                border-top: 4px solid #33fff7;
                position: absolute;
                right: 35px;
                top: 18px;
              }
            }
            .fen{
              padding: 20px 0;
              .enen{
                display: inline-block;
                width: 4px;
                height: 12px;
                background: #33fff7;
              }
              i{
                width: 99px;
                height: 16px;
                font-size: 16px;
                font-weight: 500;
                text-align: left;
                color: #33fff7;
                line-height: 40px;
                letter-spacing: 1px;
                padding-left: 15px;
              }
              .shuru{
                width: 500px;
                // height: 108px;
                padding-left: 15px;
                .san{
                  width: 500px;
                  height: 36px;
                  background: #1d477d;
                  border: 1px solid #235c97;
                  line-height: 36px;
                  a{
                    font-size: 14px;
                    color: #fff;
                    margin: 0 10px;
                    font-weight: 100;
                    text-decoration: none;
                    span{
                    color: #25609d;
                    margin-left: 15px;
                    }
                  }
                  a.active{
                    color:#fcb018;
                  }
                }
                .dao{
                  width: 500px;
                  height: 72px;
                  background: rgba(8,29,57,0);
                  // border: 1px solid #25609d;
                  border-radius: 2px;
                  line-height: 72px;
                  border-top: none;
                  span{
                    margin-left: 13px;
                  }
                  input{
                    width: 408px;
                    height: 28px;
                    background: rgba(3,20,46,0.3);
                    border: 1px solid #0797a7;
                    border-radius: 2px;
                    margin-left: 20px;
                  }
                }
              }
            }
          }
          // 按钮
          .sub{
            width: 488px;
            height: 68px;
            background: #09264e;
            box-shadow: 0px 0px 40px 0px rgba(12,21,48,0.3); 
            line-height: 70px;
            text-align: right;
            padding-right: 100px;
              .bu1{
                  width: 84px;
                  height: 36px;
                  border: 1px solid #2294d5;
                  border-radius: 4px;
                  background: rgba(3,20,46,0.3);
                  color: #fff;
                  cursor: pointer;
                  // border: none;  按钮边框去除
                }
                .bu2{
                  width: 84px;
                  height: 36px;
                  background: #2294d5;
                  border-radius: 4px;
                  color: #fff;
                  border: none;
                  margin-left: 8px;
                  cursor: pointer;
                }
          }
        }
        // 天元价格分析
        .smxm4{
          z-index: 100;
          position: absolute;
          top: 0px;
          left: 720px;
          width: 590px;
          background: rgba(9,38,78,0.9);
          border: 1px solid #2294d5;
          .header{
            width: 588px;
            height: 50px;
            background: rgba(19,74,145,0.38);
            line-height: 50px;
            display: flex;
            justify-content: space-between;
            span{
              width: 80px;
              height: 18px;
              font-size: 18px;
              font-weight: 400;
              color: #fffefe;
              margin-left: 20px;
            }
            i{
              width: 16px;
              height: 16px;
              color: #ffffff;
              margin-right: 20px;
              cursor: pointer;
            }
            i:hover{
              color: #fcb018;
            }
          }
          .tian{
            padding: 15px 27px 0 27px;
            .timer{
              position: relative;
              width: 534px;
              height: 60px;
              border-bottom: 1px solid #184f7d;
              span{
                width: 49px;
                height: 12px;
                font-size: 12px;
                font-weight: 400;
                text-align: left;
                color: #ffffff;
                line-height: 24px;
                margin: 0 12px;
              }
              input{
                width: 432px;
                height: 35px;
                background: rgba(3,20,46,0.3);
                border: 1px solid #0797a7;
                border-radius: 2px;
              }
              i{
                width: 0;
                height: 0;
                border-left: 4px solid transparent;
                border-right: 4px solid transparent;
                border-top: 4px solid #33fff7;
                position: absolute;
                right: 35px;
                top: 18px;
              }
            }
            .fen{
              padding: 20px 0;
              .enen{
                display: inline-block;
                width: 4px;
                height: 12px;
                background: #33fff7;
              }
              i{
                width: 99px;
                height: 16px;
                font-size: 16px;
                font-weight: 500;
                text-align: left;
                color: #33fff7;
                line-height: 40px;
                letter-spacing: 1px;
                padding-left: 15px;
              }
              .shuru{
                width: 500px;
                // height: 108px;
                padding-left: 15px;
                .san{
                  width: 500px;
                  height: 36px;
                  background: #1d477d;
                  border: 1px solid #235c97;
                  line-height: 36px;
                  a{
                    font-size: 14px;
                    color: #fff;
                    margin: 0 15px;
                    font-weight: 100;
                    text-decoration: none;
                  }
                  span{
                    color: #25609d;
                  }
                }
                .dao{
                  width: 500px;
                  height: 72px;
                  background: rgba(8,29,57,0);
                  // border: 1px solid #25609d;
                  border-radius: 2px;
                  line-height: 72px;
                  border-top: none;
                  span{
                    margin-left: 13px;
                  }
                  input{
                    width: 408px;
                    height: 28px;
                    background: rgba(3,20,46,0.3);
                    border: 1px solid #0797a7;
                    border-radius: 2px;
                    margin-left: 20px;
                  }
                }
              }
            }
          }
          // 按钮
          .sub{
            width: 488px;
            height: 68px;
            background: #09264e;
            box-shadow: 0px 0px 40px 0px rgba(12,21,48,0.3); 
            line-height: 70px;
            text-align: right;
            padding-right: 100px;
              .bu1{
                  width: 84px;
                  height: 36px;
                  border: 1px solid #2294d5;
                  border-radius: 4px;
                  background: rgba(3,20,46,0.3);
                  color: #fff;
                  cursor: pointer;
                  // border: none;  按钮边框去除
                }
                .bu2{
                  width: 84px;
                  height: 36px;
                  background: #2294d5;
                  border-radius: 4px;
                  color: #fff;
                  border: none;
                  margin-left: 8px;
                  cursor: pointer;
                }
          }
        }
       // 同行竞品分析
        .smxm5{
          z-index: 100;
          position: absolute;
          top: 0px;
          left: 720px;
          width: 590px;
          background: rgba(9,38,78,0.9);
          border: 1px solid #2294d5;
          .header{
            width: 588px;
            height: 50px;
            background: rgba(19,74,145,0.38);
            line-height: 50px;
            display: flex;
            justify-content: space-between;
            span{
              width: 80px;
              height: 18px;
              font-size: 18px;
              font-weight: 400;
              color: #fffefe;
              margin-left: 20px;
            }
            i{
              width: 16px;
              height: 16px;
              color: #ffffff;
              margin-right: 20px;
              cursor: pointer;
            }
            i:hover{
              color: #fcb018;
            }
          }
          .tian{
            padding: 15px 27px 0 27px;
            .timer{
              position: relative;
              width: 534px;
              height: 60px;
              border-bottom: 1px solid #184f7d;
              span{
                width: 49px;
                height: 12px;
                font-size: 12px;
                font-weight: 400;
                text-align: left;
                color: #ffffff;
                line-height: 24px;
                margin: 0 12px;
              }
              input{
                width: 432px;
                height: 35px;
                background: rgba(3,20,46,0.3);
                border: 1px solid #0797a7;
                border-radius: 2px;
              }
              i{
                width: 0;
                height: 0;
                border-left: 4px solid transparent;
                border-right: 4px solid transparent;
                border-top: 4px solid #33fff7;
                position: absolute;
                right: 35px;
                top: 18px;
              }
            }
            .fen{
              padding: 20px 0;
              .enen{
                display: inline-block;
                width: 4px;
                height: 12px;
                background: #33fff7;
              }
              i{
                width: 99px;
                height: 16px;
                font-size: 16px;
                font-weight: 500;
                text-align: left;
                color: #33fff7;
                line-height: 40px;
                letter-spacing: 1px;
                padding-left: 15px;
              }
              .shuru{
                width: 500px;
                // height: 108px;
                padding-left: 15px;
              .san{
                  width: 500px;
                  height: 36px;
                  background: #1d477d;
                  border: 1px solid #235c97;
                  line-height: 36px;
                  a{
                    font-size: 14px;
                    color: #fff;
                    margin: 0 10px;
                    font-weight: 100;
                    text-decoration: none;
                    span{
                    color: #25609d;
                    margin-left: 15px;
                    }
                  }
                  a.active{
                    color: #fcb018;
                  }
                  
                }
                .daodao{
                  width: 499px;
                  height: 230px;
                  background: rgba(8,29,57,0);
                  border: 1px solid #25609d;
                  border-radius: 2px;
                  display: flex;
                  justify-content: space-between;
                  .dao1{
                    width: 91px;
                    height: 230px;
                    // opacity: 0.5;
                    background: #143561;
                    text-align: center;
                    ul{
                      li{
                        margin-top: 18px;
                        color: #fff;
                        cursor: pointer;
                      }
                      li.active{
                        color: #fcb018;
                      }
                    }
                  }
                  .dao2{
                    width: 420px;
                    
                    .dao{
                        width: 400px;
                        height: 40px;
                        background: rgba(8,29,57,0);
                        // border: 1px solid #25609d;
                        border-radius: 2px;
                        line-height: 36px;
                        border-top: none;
                        span{
                          margin-left: 13px;
                        }
                        input{
                          width: 328px;
                          height: 28px;
                          background: rgba(3,20,46,0.3);
                          border: 1px solid #0797a7;
                          border-radius: 2px;
                          margin-left: 16px;
                          margin-top: 12px;
                        }
                      }
                  }   
                }
                // .dao{
                //   width: 500px;
                //   height: 72px;
                //   background: rgba(8,29,57,0);
                //   // border: 1px solid #25609d;
                //   border-radius: 2px;
                //   line-height: 72px;
                //   border-top: none;
                //   span{
                //     margin-left: 13px;
                //   }
                //   input{
                //     width: 408px;
                //     height: 28px;
                //     background: rgba(3,20,46,0.3);
                //     border: 1px solid #0797a7;
                //     border-radius: 2px;
                //     margin-left: 20px;
                //   }
                // }
              }
            }
          }
          // 按钮
          .sub{
            width: 488px;
            height: 68px;
            background: #09264e;
            box-shadow: 0px 0px 40px 0px rgba(12,21,48,0.3); 
            line-height: 70px;
            text-align: right;
            padding-right: 100px;
              .bu1{
                  width: 84px;
                  height: 36px;
                  border: 1px solid #2294d5;
                  border-radius: 4px;
                  background: rgba(3,20,46,0.3);
                  color: #fff;
                  cursor: pointer;
                  // border: none;  按钮边框去除
                }
                .bu2{
                  width: 84px;
                  height: 36px;
                  background: #2294d5;
                  border-radius: 4px;
                  color: #fff;
                  border: none;
                  margin-left: 8px;
                  cursor: pointer;
                }
          }
        }


        // 下游采购分析
          .smxm6{
          z-index: 100;
          position: absolute;
          top: 0px;
          left: 720px;
          width: 590px;
          background: rgba(9,38,78,0.9);
          border: 1px solid #2294d5;
          .header{
            width: 588px;
            height: 50px;
            background: rgba(19,74,145,0.38);
            line-height: 50px;
            display: flex;
            justify-content: space-between;
            span{
              width: 80px;
              height: 18px;
              font-size: 18px;
              font-weight: 400;
              color: #fffefe;
              margin-left: 20px;
            }
            i{
              width: 16px;
              height: 16px;
              color: #ffffff;
              margin-right: 20px;
              cursor: pointer;
            }
            i:hover{
              color: #fcb018;
            }
          }
          .tian{
            padding: 15px 27px 0 27px;
            .timer{
              position: relative;
              width: 534px;
              height: 60px;
              border-bottom: 1px solid #184f7d;
              span{
                width: 49px;
                height: 12px;
                font-size: 12px;
                font-weight: 400;
                text-align: left;
                color: #ffffff;
                line-height: 24px;
                margin: 0 12px;
              }
              input{
                width: 432px;
                height: 35px;
                background: rgba(3,20,46,0.3);
                border: 1px solid #0797a7;
                border-radius: 2px;
              }
              i{
                width: 0;
                height: 0;
                border-left: 4px solid transparent;
                border-right: 4px solid transparent;
                border-top: 4px solid #33fff7;
                position: absolute;
                right: 35px;
                top: 18px;
              }
            }
            .fen{
              padding: 20px 0;
              .enen{
                display: inline-block;
                width: 4px;
                height: 12px;
                background: #33fff7;
              }
              i{
                width: 99px;
                height: 16px;
                font-size: 16px;
                font-weight: 500;
                text-align: left;
                color: #33fff7;
                line-height: 40px;
                letter-spacing: 1px;
                padding-left: 15px;
              }
              .shuru{
                width: 500px;
                // height: 108px;
                padding-left: 15px;
                .san{
                  width: 500px;
                  height: 36px;
                  background: #1d477d;
                  border: 1px solid #235c97;
                  line-height: 36px;
                  a{
                    font-size: 14px;
                    color: #fff;
                    margin: 0 15px;
                    font-weight: 100;
                    text-decoration: none;
                  }
                  a.active{
                    color: #fcb018;
                  }
                  span{
                    color: #25609d;
                  }
                }
                .dao{
                  width: 500px;
                  height: 72px;
                  background: rgba(8,29,57,0);
                  // border: 1px solid #25609d;
                  border-radius: 2px;
                  line-height: 72px;
                  border-top: none;
                  span{
                    margin-left: 13px;
                  }
                  input{
                    width: 408px;
                    height: 28px;
                    background: rgba(3,20,46,0.3);
                    border: 1px solid #0797a7;
                    border-radius: 2px;
                    margin-left: 20px;
                  }
                }
              }
            }
          }
          // 按钮
          .sub{
            width: 488px;
            height: 68px;
            background: #09264e;
            box-shadow: 0px 0px 40px 0px rgba(12,21,48,0.3); 
            line-height: 70px;
            text-align: right;
            padding-right: 100px;
              .bu1{
                  width: 84px;
                  height: 36px;
                  border: 1px solid #2294d5;
                  border-radius: 4px;
                  background: rgba(3,20,46,0.3);
                  color: #fff;
                  cursor: pointer;
                  // border: none;  按钮边框去除
                }
                .bu2{
                  width: 84px;
                  height: 36px;
                  background: #2294d5;
                  border-radius: 4px;
                  color: #fff;
                  border: none;
                  margin-left: 8px;
                  cursor: pointer;
                }
          }
        }

        // 填报入口样式
        .smxm7{
          height: 90%;
          z-index: 100;
          position: absolute;
          top: 50px;
          left: 720px;
          width: 588px;
          background: rgba(9,38,78,0.9);
          border: 1px solid #2294d5;
          overflow-x: hidden;
          overflow-y: scroll;
          
          // scrollbar-width: 0px;

          //   scrollbar-face-color: #00ff99;

          //   scrollbar-highlight-color: #999933;

          //   scrollbar-shadow-color: #666666;

          //   scrollbar-track-color: #CCCC66;
          // position: relative;
          .header{
            width: 590px;
            height: 50px;
            background: rgba(19,74,145,1);
            line-height: 50px;
            display: flex;
            justify-content: space-between;
            position: fixed;
            top: 107px;
            span{
              width: 80px;
              height: 18px;
              font-size: 18px;
              font-weight: 400;
              color: #fffefe;
              margin-left: 20px;
            }
            i{
              width: 16px;
              height: 16px;
              color: #ffffff;
              margin-right: 20px;
              cursor: pointer;
            }
            i:hover{
              color: #fcb018;
            }
          }
          .tian{
            padding: 15px 27px 0 27px;
            .timer{
              position: relative;
              width: 534px;
              height: 60px;
              border-bottom: 1px solid #184f7d;
              span{
                width: 49px;
                height: 12px;
                font-size: 12px;
                font-weight: 400;
                text-align: left;
                color: #ffffff;
                line-height: 24px;
                margin: 0 12px;
              }
              .el-date-editor{
                  height: 35px;
                  width: 432px;
                  cursor: pointer;
                  .el-input__inner{
                      color: #33fff7;
                      background: rgba(3, 20, 46, 0.3);
                      padding-left: 40px;
                      .el-icon-data:before{
                         color: #33fff7;
                       } 
                    }          
                }
              // i{
              //   width: 0;
              //   height: 0;
              //   border-left: 4px solid transparent;
              //   border-right: 4px solid transparent;
              //   border-top: 4px solid #33fff7;
              //   position: absolute;
              //   right: 35px;
              //   top: 18px;
              // }
            }
            .fen{
              padding: 15px 0;
              border-bottom: 1px solid #184f7d;
              .enen{
                display: inline-block;
                width: 4px;
                height: 12px;
                background: #33fff7;
              }
              i{
                width: 99px;
                height: 16px;
                font-size: 16px;
                font-weight: 500;
                text-align: left;
                color: #33fff7;
                line-height: 40px;
                letter-spacing: 1px;
                padding-left: 15px;
              }
              .shuru{
                width: 500px;
                // height: 108px;
                padding-left: 15px;
                .san{
                  width: 500px;
                  height: 36px;
                  background: #1d477d;
                  border: 1px solid #235c97;
                  line-height: 36px;
                  a{
                    font-size: 14px;
                    color: #fff;
                    margin: 0 10px;
                    font-weight: 100;
                    text-decoration: none;
                    span{
                    color: #25609d;
                    margin-left: 15px;
                    }
                  }
                  a.active{
                    color: #fcb018;
                  } 
                }
                  .daodao{
                  width: 499px;
                  height: 230px;
                  background: rgba(8,29,57,0);
                  border: 1px solid #25609d;
                  border-radius: 2px;
                  display: flex;
                  justify-content: space-between;
                  .dao1{
                    width: 91px;
                    height: 230px;
                    // opacity: 0.5;
                    background: #143561;
                    text-align: center;
                    ul{
                      li{
                        margin-top: 15px;
                        color: #fff;
                        cursor: pointer;
                      }
                      li.active{
                          color: #fcb018;
                        }
                    }
                  }
                  .dao2{
                    width: 420px;
                    
                    .dao3{
                        width: 400px;
                        height: 40px;
                        background: rgba(8,29,57,0);
                        // border: 1px solid #25609d;
                        border-radius: 2px;
                        line-height: 36px;
                        border-top: none;
                        span{
                          margin-left: 13px;
                        }
                        input{
                          width: 328px;
                          height: 28px;
                          background: rgba(3,20,46,0.3);
                          border: 1px solid #0797a7;
                          border-radius: 2px;
                          margin-left: 16px;
                          margin-top: 12px;
                        }
                      }
                  }   
                }
                .dao{
                  width: 500px;
                  height: 72px;
                  background: rgba(8,29,57,0);
                  // border: 1px solid #25609d;
                  border-radius: 2px;
                  line-height: 72px;
                  border-top: none;
                  span{
                    margin-left: 13px;
                  }
                  input{
                    width: 408px;
                    height: 28px;
                    background: rgba(3,20,46,0.3);
                    border: 1px solid #0797a7;
                    border-radius: 2px;
                    margin-left: 20px;
                  }
                }
              }
            }
          }
          // 按钮
          .sub{
            width: 488px;
            height: 68px;
            background: #09264e;
            box-shadow: 0px 0px 40px 0px rgba(12,21,48,0.3); 
            line-height: 70px;
            text-align: right;
            padding-right: 100px;
              .bu1{
                  width: 84px;
                  height: 36px;
                  border: 1px solid #2294d5;
                  border-radius: 4px;
                  background: rgba(3,20,46,0.3);
                  color: #fff;
                  cursor: pointer;
                  // border: none;  按钮边框去除
                }
                .bu2{
                  width: 84px;
                  height: 36px;
                  background: #2294d5;
                  border-radius: 4px;
                  color: #fff;
                  border: none;
                  margin-left: 8px;
                  cursor: pointer;
                }
          }
        }
    }
        
        // 价格预测左边区域的样式
        .left{
              width: 433px;
              height: 100%;
              padding: 30px 10px;
              // 原料分析样式
              .l_top{
                position: relative;
                img{
                  width: 453px;
                  height: 44px;
                }                
                .top1{
                  width: 80px;
                  height: 19px;
                  line-height: 80px;
                  font-size: 18px;
                  font-weight: 400;
                  text-align: left;
                  padding-left: 15px;
                  position: absolute;
                  top: -20px;
                }
                ul{
                  width: 436px;
                  height: 262px;
                  border: 1px solid #235464;
                  padding-top: 15px;
                  padding-left: 15px;
                  display: flex;
                  flex-wrap: wrap;
                  // .soon{
                  // width: 3px;
                  // height: 300px;
                  // background-color: #000;
                  .li1{
                    width: 376px;
                    height: 69px;
                    border: 1px solid #11385e;
                    border-radius: 6px;
                    padding:0 15px;
                    cursor:pointer;
                    .price{
                          margin-top: 15px;
                          align-items: center;
                          position: relative;
                      img{
                        width: 21px;
                        height: 21px;
                        margin-right: 5px;
                      }
                      span{
                        font-size: 12px;
                      }
                      i{
                        width: 98px;
                        height: 17px;
                        text-align: right;
                        position: absolute;
                        right: 10px;
                        strong{
                          font-size: 16px;
                          color: #e7b03a;
                        }
                      }
                    }
                    .tiao{
                      width: 380px;
                      height: 16px;
                      margin-top: 10px;
                      .el-progress-bar__outer{
                        background-color: #133D63;
                        height: 14px;
                      }
                    }
                  }
                }
              }
              // 电石采购分析
              .l_center{
                padding-top: 16px;
                position: relative;
                img{
                  width: 453px;
                  height: 44px;
                }
                h2{
                  width: 120px;
                  height: 19px;
                  line-height: 80px;
                  font-size: 18px;
                  font-weight: 400;
                  text-align: left;
                  padding-left: 15px;
                  position: absolute;
                  top: 0px;
                }
                .purch{
                  width: 436px;
                  height: 212px;
                  border: 1px solid #235464;
                  padding-left: 15px;
                  padding-top: 15px;
                  display: flex;
                  flex-wrap: wrap;
                  .beiyuan{
                    width: 376px;
                    height: 67px;
                    border: 1px solid #11385e;
                    border-radius: 6px;
                    padding:0 15px;
                    cursor:pointer;
                    .beiyuan1{
                          margin-top: 15px;
                          align-items: center;
                          position: relative;
                      img{
                      width: 20px;
                      height: 19px;
                      color: #f1f9ff;
                      margin-right: 5px;
                    }
                    i{
                        width: 98px;
                        height: 17px;
                        text-align: right;
                        position: absolute;
                        right: 10px;
                        strong{
                          font-size: 16px;
                          color: #e7b03a;
                        }
                      }
                      span{
                        font-size: 12px;
                      }
                  }    
                  .beiyuan2{
                      width: 380px;
                      height: 16px;
                      margin-top: 10px;
                      .el-progress-bar__outer{
                        background-color: #133D63;
                        height: 14px;
                      }
                    }               
                  }
                  .jintai{
                    width: 376px;
                    height: 67px;
                    border: 1px solid #11385e;
                    border-radius: 6px;
                    padding: 0 15px;
                    cursor:pointer;
                    .jintai1{
                          margin-top: 15px;
                          align-items: center;
                          position: relative;
                      img{
                      width: 20px;
                      height: 19px;
                      color: #f1f9ff;
                      margin-right: 5px;
                    }
                    i{
                        width: 98px;
                        height: 17px;
                        text-align: right;
                        position: absolute;
                        right: 10px;
                        strong{
                          font-size: 16px;
                          color: #e7b03a;
                        }
                      }
                      span{
                        font-size: 12px;
                      }
                    }
                    .jintai2{
                      width: 380px;
                      height: 16px;
                      margin-top: 10px;
                      .el-progress-bar__outer{
                        background-color: #133D63;
                        height: 14px;
                      }
                    }
                  }
                }   
              }
              // 下游产品分析
              .l_bottom{
                position: relative;
                padding-top: 16px;
                img{
                  width: 453px;
                  height: 44px;
                }
                h2{
                  width: 120px;
                  height: 19px;
                  line-height: 80px;
                  font-size: 18px;
                  font-weight: 400;
                  text-align: left;
                  padding-left: 15px;
                  position: absolute;
                  top: 0px;
                }
                .price{
                  width: 431px;
                  height: 202px;
                  border: 1px solid #235464;
                  padding: 10px;
                  .conter{
                    padding: 0;
                    .nav{
                      width: 429px;
                      height: 33px;
                      background: rgba(24,69,118,0.52);
                      border: 1px solid #25609d;
                      ul{
                        display: flex;
                        justify-content: space-around;
                        padding: 0;
                        li{
                          font-size: 12px;
                          line-height: 33px;
                          display: flex;
                          justify-content: space-between;
                          color: #25609d;
                          a{
                            color: #ffffff;
                            margin-right: 12px;
                            text-decoration: none;
                          }
                          a.active{
                          color: #e1a630;
                           }

                        }
                      }
                    }
                    .area{
                      width: 429px;
                      border: 1px solid #25609d;
                      cursor:pointer;
                      padding: 20px 0;
                      border-top: 0;
                      display: flex;
                      justify-content: space-around;
                      .area1{
                        position: relative;
                        span{
                          position: absolute;
                          top: 45px;
                          left: 20px;
                          font-size: 26px;
                          font-weight: 900;
                          color: #fff;
                        }
                        a{
                          position: absolute;
                          top: 90px;
                          left: 25px;
                          color: #fff;
                          font-size: 14px;
                          text-decoration: none;
                        }
                      }
                      .area2{
                        position: relative;
                        span{
                          position: absolute;
                          top: 45px;
                          left: 20px;
                          font-size: 26px;
                          font-weight: 900;
                          color: #fff;
                        }
                        a{
                          position: absolute;
                          top: 90px;
                          left: 25px;
                          color: #fff;
                          font-size: 14px;
                          text-decoration: none;
                        }
                      }
                      .area3{
                        position: relative;
                        span{
                          position: absolute;
                          top: 45px;
                          left: 20px;
                          font-size: 26px;
                          font-weight: 900;
                          color: #fff;
                        }
                        a{
                          position: absolute;
                          top: 90px;
                          left: 25px;
                          color: #fff;
                          font-size: 14px;
                          text-decoration: none;
                        }
                      }
                    }
                  }
                }
              }
            }
        // 价格预测中间区域的样式
        .center{
          width: 874px;
          height: 100%;
          padding: 30px 0px;
          // 兰炭价格预测
          .c_top{
            position: relative;
            img{
                width: 874px;
                height: 44px;
            }
            h2{
                  width: 120px;
                  height: 19px;
                  line-height: 80px;
                  font-size: 16px;
                  font-weight: 400;
                  text-align: left;
                  padding-left: 15px;
                  position: absolute;
                  top: -20px;
            }
            .top_table{
              width: 812px;
              height: 500px;
              border: 1px solid #235464;
              padding: 30px;
              .time{
                width: 100%;
                height: 17px;
                text-align: right;
                color: #33fff7;
                line-height: 17px;
                position: relative;
                .el-date-editor{
                  height: 17px;
                  width: 190px;
                  // background-color:#33fff7;
                  cursor: pointer;
                  .el-input__inner{
                      color: #33fff7;
                      background: rgba(3, 20, 46, 0.3);
                      .el-icon-data:before{
                         color: #33fff7;
                       } 
                    }          
                }
                a{
                  display: inline-block;
                  font-size: 16px;
                  width: 80px;
                  color: #33fff7;
                  padding-right: 50px;
                }
              }
              .column{
                width: 580px;
                height: 500px;
                #dd{
                  width: 500px;
                  height: 100%;
                }
              }
            }
          }
          // 天元价格分析
          .c_bottom{
            position: relative;
            margin-top: 16px;
            img{
              width: 873px;
              height: 44px;
            }
            h2{
                  width: 120px;
                  height: 19px;
                  line-height: 80px;
                  font-size: 16px;
                  font-weight: 400;
                  text-align: left;
                  padding-left: 15px;
                  position: absolute;
                  top: -20px;
            }
            .b_table{
              width: 871px;
              height: 222px;
              border: 1px solid #235464;
              .ech{
                width: 871px;
                height: 222px;
                img{
                  width: 100%;
                  height: 100%;
                  cursor: pointer;
                }
              }
            }
          }
        }
        .right{
          width: 453px;
          height: 100%;
          padding: 30px 20px;
          // 同行竞品分析
          .analysis{
            position: relative;
            img{
                  width: 453px;
                  height: 44px;
                }                
            h2{
              width: 120px;
              height: 19px;
              line-height: 80px;
              font-size: 18px;
              font-weight: 400;
              text-align: left;
              padding-left: 15px;
              position: absolute;
              top: -20px;
            }
            ul{
              width: 431px;
              height: 559px;
              border: 1px solid #235464;
              padding: 0 10px;
              li{
                width: 419px;
                height: 176px;
                padding-top: 8px;
                .header{
                  width: 417px;
                  height: 33px;
                  line-height: 33px;
                  background: rgba(24,69,118,0.52);
                  border: 1px solid #25609d;
                  text-align: left;
                  span{
                    margin-left: 15px;
                    margin-right: 5px;
                    width: 3px;
                    height: 12px;
                    background: #40cade;
                    display: inline-block;
                  }
                   i{
                      font-size: 14px;
                    }
                }
                .nav{
                  width: 417px;
                  height: 139px;
                  background: rgba(24,69,118,0);
                  border: 1px solid #11385e;
                  display: flex;
                  justify-content: space-around;
                  // overflow: hidden;
                  .list{
                    width: 76px;
                    height: 100%;
                    border-right: 1px solid #11385e;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    overflow: hidden;
                    a{
                      font-size: 8px;
                      color: #fff;
                      display: block;
                      padding-top: 8px;
                      text-decoration: none;
                    }
                    a.active{
                      color: #e1a630;
                    }
                  }
                  .tu{
                    // float: right;
                    display: flex;
                    align-items: center;
                    cursor:pointer;
                    .tu1{
                      width: 53px;
                      height: 71px;
                      padding: 10px 5px;
                      border-right: 1px solid #11385e;
                      display: flex;
                      flex-direction: column;
                      text-align: center;
                      img{
                        width: 46px;
                        height: 46px;
                        margin-bottom: 3px;
                      }
                      span{
                        font-size: 8px;
                        margin-top: 3px;
                      }
                      i{
                        font-size: 8px;
                        margin-top: 5px;
                      }
                    }
                  }
                }
              }
            }
          }
          // 下游采购分析
          .buyer{
            position: relative;
            margin-top: 16px;
            img{
                  width: 453px;
                  height: 44px;
                }                
            h2{
              width: 120px;
              height: 19px;
              line-height: 80px;
              font-size: 18px;
              font-weight: 400;
              text-align: left;
              padding-left: 15px;
              position: absolute;
              top: -20px;
            }
            .price{
              width: 431px;
              height: 207px;
              border: 1px solid #235464;
              padding: 10px;
              .header{
                width: 429px;
                height: 33px;
                background: rgba(24,69,118,0.52);
                border: 1px solid #25609d;
                .header1{
                  height: 100%;
                  width: 70px;
                  text-align: center;
                  line-height: 33px;
                  float: left;
                  a{
                    color: #fff;
                    font-size: 14px;
                    text-decoration: none;
                  }
                  a.active{
                      color: #e1a630;
                    }
                  span{
                    margin-left: 16px;
                    color: #25609d;
                  }
                }    
              }
              .area{
                  width: 429px;
                  height: 139px;
                  padding-top: 30px;
                  border: 1px solid #11385e;
                  display: flex;
                  justify-content: space-around;
                  cursor: pointer;
                  .area1{
                        position: relative;
                        span{
                          position: absolute;
                          top: 53px;
                          left: 28px;
                          font-size: 26px;
                          font-weight: 900;
                          color: #fff;
                        }
                        a{
                          position: absolute;
                          top: 110px;
                          left: 35px;
                          color: #fff;
                          font-size: 14px;
                          text-decoration: none;
                          
                        }
                      }
                      .area2{
                        position: relative;
                        span{
                          position: absolute;
                          top: 53px;
                          left: 28px;
                          font-size: 26px;
                          font-weight: 900;
                          color: #fff;
                        }
                        a{
                          position: absolute;
                          top: 110px;
                          left: 35px;
                          color: #fff;
                          font-size: 14px;
                          text-decoration: none;
                        }
                      }
                }
            }
          }
        }
       
        
</style>