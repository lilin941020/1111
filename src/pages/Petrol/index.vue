<template>
    <!-- 外部容器 -->
    <div class="prtrol">
      <!-- 主要内容区 -->
      <div id="main">
          <!-- 左边区域 -->
          <div class="left">
             <div class="left_header">
                <img src="./image/88.png" alt="">
                <h2>煤焦油原材料加工</h2>
             </div>
             <div class="left_main">
               <!-- 供应地和销售地 -->
                <div class="check">
                  <div class="gongyin">
                    <div class="head">供应地</div>
                    <el-select :model="form" placeholder="请选择">
                        <el-option label="区域一" value="1"></el-option>
                        <el-option label="区域二" value="1"></el-option>
                    </el-select>
                  </div>
                  <div class="xiaoshou">
                    <div class="head">销售地</div>
                    <el-select  placeholder="请选择"
                    :label-position="labelPosition"
                    label-width ="5px"
                    >
                        <el-option label="区域一" value=""></el-option>
                        <el-option label="区域二" value=""></el-option>
                    </el-select>
                  </div>
                </div>
                <!-- 地区详情 可滚动 -->
                <div class="l_conter">

                  <div class="area">
                      <div class="come">
                         <div class="come_top">
                              <span>地区</span><i>榆林市榆神工业园区华航能源有限公司</i>
                         </div>
                         <div class="come_bottom">
                               <span>出场价</span><i>0</i>
                         </div>
                      </div>
                      <div class="tu">
                          <i class="tu_left"></i>
                          <div class="tu1">
                            <div class="tu2">
                              <p>运费</p>
                              <i>3221</i>
                              <img src="./image/che.png" alt="">
                            </div>
                          </div>
                          <span class="tu_right"></span>
                      </div>
                      <div class="price">
                         <span>5843</span>
                         <i>宁夏价格</i>
                      </div>
                  </div>

                  <div class="area">
                      <div class="come">
                         <div class="come_top">
                              <span>地区</span><i>陕西象西东鑫恒化工有限责任公司</i>
                         </div>
                         <div class="come_bottom">
                               <span>出场价</span><i>0</i>
                         </div>
                      </div>
                      <div class="tu">
                          <i class="tu_left"></i>
                          <div class="tu1">
                            <div class="tu2">
                              <p>运费</p>
                              <i>3221</i>
                              <img src="./image/che.png" alt="">
                            </div>
                          </div>
                          <span class="tu_right"></span>
                      </div>
                      <div class="price">
                         <span>5843</span>
                         <i>宁夏价格</i>
                      </div>
                  </div>

                  <div class="area">
                      <div class="come">
                         <div class="come_top">
                              <span>地区</span><i>神木富油能潭科技有限公司</i>
                         </div>
                         <div class="come_bottom">
                               <span>出场价</span><i>0</i>
                         </div>
                      </div>
                      <div class="tu">
                          <i class="tu_left"></i>
                          <div class="tu1">
                            <div class="tu2">
                              <p>运费</p>
                              <i>3221</i>
                              <img src="./image/che.png" alt="">
                            </div>
                          </div>
                          <span class="tu_right"></span>
                      </div>
                      <div class="price">
                         <span>5843</span>
                         <i>宁夏价格</i>
                      </div>
                  </div>

                  <div class="area">
                      <div class="come">
                         <div class="come_top">
                              <span>地区</span><i>陕西精益化工有限公司</i>
                         </div>
                         <div class="come_bottom">
                               <span>出场价</span><i>0</i>
                         </div>
                      </div>
                      <div class="tu">
                          <i class="tu_left"></i>
                          <div class="tu1">
                            <div class="tu2">
                              <p>运费</p>
                              <i>3221</i>
                              <img src="./image/che.png" alt="">
                            </div>
                          </div>
                          <span class="tu_right"></span>
                      </div>
                      <div class="price">
                         <span>5843</span>
                         <i>宁夏价格</i>
                      </div>
                  </div>

                  <div class="area">
                      <div class="come">
                         <div class="come_top">
                              <span>地区</span><i>陕西延长石油安源化工有限公司</i>
                         </div>
                         <div class="come_bottom">
                               <span>出场价</span><i>0</i>
                         </div>
                      </div>
                      <div class="tu">
                          <i class="tu_left"></i>
                          <div class="tu1">
                            <div class="tu2">
                              <p>运费</p>
                              <i>3221</i>
                              <img src="./image/che.png" alt="">
                            </div>
                          </div>
                          <span class="tu_right"></span>
                      </div>
                      <div class="price">
                         <span>5843</span>
                         <i>宁夏价格</i>
                      </div>
                  </div>

                  <div class="area">
                      <div class="come">
                         <div class="come_top">
                              <span>地区</span><i>榆林市榆神工业园区华航能源有限公司</i>
                         </div>
                         <div class="come_bottom">
                               <span>出场价</span><i>0</i>
                         </div>
                      </div>
                      <div class="tu">
                          <i class="tu_left"></i>
                          <div class="tu1">
                            <div class="tu2">
                              <p>运费</p>
                              <i>3221</i>
                              <img src="./image/che.png" alt="">
                            </div>
                          </div>
                          <span class="tu_right"></span>
                      </div>
                      <div class="price">
                         <span>5843</span>
                         <i>宁夏价格</i>
                      </div>
                  </div>

                  <div class="area">
                      <div class="come">
                         <div class="come_top">
                              <span>地区</span><i>榆林市榆神工业园区华航能源有限公司</i>
                         </div>
                         <div class="come_bottom">
                               <span>出场价</span><i>0</i>
                         </div>
                      </div>
                      <div class="tu">
                          <i class="tu_left"></i>
                          <div class="tu1">
                            <div class="tu2">
                              <p>运费</p>
                              <i>3221</i>
                              <img src="./image/che.png" alt="">
                            </div>
                          </div>
                          <span class="tu_right"></span>
                      </div>
                      <div class="price">
                         <span>5843</span>
                         <i>宁夏价格</i>
                      </div>
                  </div>

                  <div class="area">
                      <div class="come">
                         <div class="come_top">
                              <span>地区</span><i>榆林市榆神工业园区华航能源有限公司</i>
                         </div>
                         <div class="come_bottom">
                               <span>出场价</span><i>0</i>
                         </div>
                      </div>
                      <div class="tu">
                          <i class="tu_left"></i>
                          <div class="tu1">
                            <div class="tu2">
                              <p>运费</p>
                              <i>3221</i>
                              <img src="./image/che.png" alt="">
                            </div>
                          </div>
                          <span class="tu_right"></span>
                      </div>
                      <div class="price">
                         <span>5843</span>
                         <i>宁夏价格</i>
                      </div>
                  </div>

                  <div class="area">
                      <div class="come">
                         <div class="come_top">
                              <span>地区</span><i>榆林市榆神工业园区华航能源有限公司</i>
                         </div>
                         <div class="come_bottom">
                               <span>出场价</span><i>0</i>
                         </div>
                      </div>
                      <div class="tu">
                          <i class="tu_left"></i>
                          <div class="tu1">
                            <div class="tu2">
                              <p>运费</p>
                              <i>3221</i>
                              <img src="./image/che.png" alt="">
                            </div>
                          </div>
                          <span class="tu_right"></span>
                      </div>
                      <div class="price">
                         <span>5843</span>
                         <i>宁夏价格</i>
                      </div>
                  </div>

                  <div class="area">
                      <div class="come">
                         <div class="come_top">
                              <span>地区</span><i>榆林市榆神工业园区华航能源有限公司</i>
                         </div>
                         <div class="come_bottom">
                               <span>出场价</span><i>0</i>
                         </div>
                      </div>
                      <div class="tu">
                          <i class="tu_left"></i>
                          <div class="tu1">
                            <div class="tu2">
                              <p>运费</p>
                              <i>3221</i>
                              <img src="./image/che.png" alt="">
                            </div>
                          </div>
                          <span class="tu_right"></span>
                      </div>
                      <div class="price">
                         <span>5843</span>
                         <i>宁夏价格</i>
                      </div>
                  </div>

                  <div class="area">
                      <div class="come">
                         <div class="come_top">
                              <span>地区</span><i>榆林市榆神工业园区华航能源有限公司</i>
                         </div>
                         <div class="come_bottom">
                               <span>出场价</span><i>0</i>
                         </div>
                      </div>
                      <div class="tu">
                          <i class="tu_left"></i>
                          <div class="tu1">
                            <div class="tu2">
                              <p>运费</p>
                              <i>3221</i>
                              <img src="./image/che.png" alt="">
                            </div>
                          </div>
                          <span class="tu_right"></span>
                      </div>
                      <div class="price">
                         <span>5843</span>
                         <i>宁夏价格</i>
                      </div>
                  </div>

                  <div class="area">
                      <div class="come">
                         <div class="come_top">
                              <span>地区</span><i>榆林市榆神工业园区华航能源有限公司</i>
                         </div>
                         <div class="come_bottom">
                               <span>出场价</span><i>0</i>
                         </div>
                      </div>
                      <div class="tu">
                          <i class="tu_left"></i>
                          <div class="tu1">
                            <div class="tu2">
                              <p>运费</p>
                              <i>3221</i>
                              <img src="./image/che.png" alt="">
                            </div>
                          </div>
                          <span class="tu_right"></span>
                      </div>
                      <div class="price">
                         <span>5843</span>
                         <i>宁夏价格</i>
                      </div>
                  </div>
                  <div class="area">
                      <div class="come">
                         <div class="come_top">
                              <span>地区</span><i>榆林市榆神工业园区华航能源有限公司</i>
                         </div>
                         <div class="come_bottom">
                               <span>出场价</span><i>0</i>
                         </div>
                      </div>
                      <div class="tu">
                          <i class="tu_left"></i>
                          <div class="tu1">
                            <div class="tu2">
                              <p>运费</p>
                              <i>3221</i>
                              <img src="./image/che.png" alt="">
                            </div>
                          </div>
                          <span class="tu_right"></span>
                      </div>
                      <div class="price">
                         <span>5843</span>
                         <i>宁夏价格</i>
                      </div>
                  </div>

                  <div class="area">
                      <div class="come">
                         <div class="come_top">
                              <span>地区</span><i>榆林市榆神工业园区华航能源有限公司</i>
                         </div>
                         <div class="come_bottom">
                               <span>出场价</span><i>0</i>
                         </div>
                      </div>
                      <div class="tu">
                          <i class="tu_left"></i>
                          <div class="tu1">
                            <div class="tu2">
                              <p>运费</p>
                              <i>3221</i>
                              <img src="./image/che.png" alt="">
                            </div>
                          </div>
                          <span class="tu_right"></span>
                      </div>
                      <div class="price">
                         <span>5843</span>
                         <i>宁夏价格</i>
                      </div>
                  </div>

                </div>
             </div>
          </div>
          <!-- 中间区域 -->
          <div class="conter">
             <div class="conter_header">
                <img src="./image/background -main.png" alt="">
                <h2>兰炭预测价</h2>
             </div>
             <div class="conter_main">
                  <div class="time">
                        <!-- <div class="block"> -->
                          <el-date-picker
                            v-model="value"
                            type="date"
                            placeholder="选择日期"
                            format="yyyy 年 MM 月 dd 日"
                            value-format="yyyy-MM-dd"
                            >
                          </el-date-picker>
                        <!-- </div> -->
                      <a href="#"> 填报入口</a>  
                  </div>
                  <!-- 大图区域 -->
                  <div class="column">
                      <div id="dd" style="width:202px;height:202px"></div>
                  </div>
             </div>
             <div class="conter_bottom">
                 <div class="b_left">
                      <img src="./image/background -right.png" alt="">
                      <h2>原油原材料加工</h2>
                      <div class="left_main">
                        <!-- 复用样式 -->
                            <div class="area">
                              <div class="come">
                                <div class="come_top">
                                      <span>地区</span><i>榆林市榆神工业园区华航能源有限公司</i>
                                </div>
                                <div class="come_bottom">
                                      <span>出场价</span><i>0</i>
                                </div>
                              </div>
                              <div class="tu">
                                  <i class="tu_left"></i>
                                  <div class="tu1">
                                    <div class="tu2">
                                      <p>运费</p>
                                      <i>3221</i>
                                      <img src="./image/che.png" alt="">
                                    </div>
                                  </div>
                                  <span class="tu_right"></span>
                              </div>
                              <div class="price">
                                <span>5843</span>
                                <i>宁夏价格</i>
                              </div>
                          </div>

                          <div class="area">
                              <div class="come">
                                <div class="come_top">
                                      <span>地区</span><i>榆林市榆神工业园区华航能源有限公司</i>
                                </div>
                                <div class="come_bottom">
                                      <span>出场价</span><i>0</i>
                                </div>
                              </div>
                              <div class="tu">
                                  <i class="tu_left"></i>
                                  <div class="tu1">
                                    <div class="tu2">
                                      <p>运费</p>
                                      <i>3221</i>
                                      <img src="./image/che.png" alt="">
                                    </div>
                                  </div>
                                  <span class="tu_right"></span>
                              </div>
                              <div class="price">
                                <span>5843</span>
                                <i>宁夏价格</i>
                              </div>
                          </div>
                          <div class="area">
                      <div class="come">
                         <div class="come_top">
                              <span>地区</span><i>榆林市榆神工业园区华航能源有限公司</i>
                         </div>
                         <div class="come_bottom">
                               <span>出场价</span><i>0</i>
                         </div>
                      </div>
                      <div class="tu">
                          <i class="tu_left"></i>
                          <div class="tu1">
                            <div class="tu2">
                              <p>运费</p>
                              <i>3221</i>
                              <img src="./image/che.png" alt="">
                            </div>
                          </div>
                          <span class="tu_right"></span>
                      </div>
                      <div class="price">
                         <span>5843</span>
                         <i>宁夏价格</i>
                      </div>
                  </div>

                  <div class="area">
                      <div class="come">
                         <div class="come_top">
                              <span>地区</span><i>榆林市榆神工业园区华航能源有限公司</i>
                         </div>
                         <div class="come_bottom">
                               <span>出场价</span><i>0</i>
                         </div>
                      </div>
                      <div class="tu">
                          <i class="tu_left"></i>
                          <div class="tu1">
                            <div class="tu2">
                              <p>运费</p>
                              <i>3221</i>
                              <img src="./image/che.png" alt="">
                            </div>
                          </div>
                          <span class="tu_right"></span>
                      </div>
                      <div class="price">
                         <span>5843</span>
                         <i>宁夏价格</i>
                      </div>
                  </div>

                      </div>
                 </div>
                 <div class="b_right">
                      <img src="./image/background -right.png" alt="">
                      <h2>宁夏调和油</h2>
                      <div class="right_main">
                          <div class="r1">
                              <span>6,292</span>
                              <img src="./image/259.png" alt="">
                              <i>国际出厂价</i>
                          </div>
                          <div class="r2">
                              <span>6,292</span>
                              <img src="./image/259.png" alt="">
                              <i>非标出厂价</i>
                          </div>
                      </div>
                 </div>
             </div>
          </div>
          <!-- 右边区域 -->
          <div class="right">
             <div class="right_header">
                <img src="./image/30.png" alt="">
                <h2>本地调和油</h2>
             </div>
             <div class="right_main">
                               <!-- 供应地和销售地 -->
                <div class="check">
                  <div class="gongyin">
                    <div class="head">供应地</div>
                    <el-select :model="form" placeholder="请选择">
                        <el-option label="区域一" value="1"></el-option>
                        <el-option label="区域二" value="1"></el-option>
                    </el-select>
                  </div>
                  <div class="xiaoshou">
                    <div class="head">销售地</div>
                    <el-select  placeholder="请选择"
                    :label-position="labelPosition"
                    label-width ="5px"
                    >
                        <el-option label="区域一" value=""></el-option>
                        <el-option label="区域二" value=""></el-option>
                    </el-select>
                  </div>
                </div>
                <!-- 地区详情 可滚动 -->
                <div class="l_conter">

                  <div class="area">
                      <div class="come">
                         <div class="come_top">
                              <span>地区</span><i>榆林市榆神工业园区华航能源有限公司</i>
                         </div>
                         <div class="come_bottom">
                               <span>出场价</span><i>0</i>
                         </div>
                      </div>
                      <div class="tu">
                          <i class="tu_left"></i>
                          <div class="tu1">
                            <div class="tu2">
                              <p>运费</p>
                              <i>3221</i>
                              <img src="./image/che.png" alt="">
                            </div>
                          </div>
                          <span class="tu_right"></span>
                      </div>
                      <div class="price">
                         <span>5843</span>
                         <i>宁夏价格</i>
                      </div>
                  </div>

                  <div class="area">
                      <div class="come">
                         <div class="come_top">
                              <span>地区</span><i>榆林市榆神工业园区华航能源有限公司</i>
                         </div>
                         <div class="come_bottom">
                               <span>出场价</span><i>0</i>
                         </div>
                      </div>
                      <div class="tu">
                          <i class="tu_left"></i>
                          <div class="tu1">
                            <div class="tu2">
                              <p>运费</p>
                              <i>3221</i>
                              <img src="./image/che.png" alt="">
                            </div>
                          </div>
                          <span class="tu_right"></span>
                      </div>
                      <div class="price">
                         <span>5843</span>
                         <i>宁夏价格</i>
                      </div>
                  </div>

                  <div class="area">
                      <div class="come">
                         <div class="come_top">
                              <span>地区</span><i>榆林市榆神工业园区华航能源有限公司</i>
                         </div>
                         <div class="come_bottom">
                               <span>出场价</span><i>0</i>
                         </div>
                      </div>
                      <div class="tu">
                          <i class="tu_left"></i>
                          <div class="tu1">
                            <div class="tu2">
                              <p>运费</p>
                              <i>3221</i>
                              <img src="./image/che.png" alt="">
                            </div>
                          </div>
                          <span class="tu_right"></span>
                      </div>
                      <div class="price">
                         <span>5843</span>
                         <i>宁夏价格</i>
                      </div>
                  </div>

                  <div class="area">
                      <div class="come">
                         <div class="come_top">
                              <span>地区</span><i>榆林市榆神工业园区华航能源有限公司</i>
                         </div>
                         <div class="come_bottom">
                               <span>出场价</span><i>0</i>
                         </div>
                      </div>
                      <div class="tu">
                          <i class="tu_left"></i>
                          <div class="tu1">
                            <div class="tu2">
                              <p>运费</p>
                              <i>3221</i>
                              <img src="./image/che.png" alt="">
                            </div>
                          </div>
                          <span class="tu_right"></span>
                      </div>
                      <div class="price">
                         <span>5843</span>
                         <i>宁夏价格</i>
                      </div>
                  </div>

                  <div class="area">
                      <div class="come">
                         <div class="come_top">
                              <span>地区</span><i>榆林市榆神工业园区华航能源有限公司</i>
                         </div>
                         <div class="come_bottom">
                               <span>出场价</span><i>0</i>
                         </div>
                      </div>
                      <div class="tu">
                          <i class="tu_left"></i>
                          <div class="tu1">
                            <div class="tu2">
                              <p>运费</p>
                              <i>3221</i>
                              <img src="./image/che.png" alt="">
                            </div>
                          </div>
                          <span class="tu_right"></span>
                      </div>
                      <div class="price">
                         <span>5843</span>
                         <i>宁夏价格</i>
                      </div>
                  </div>

                  <div class="area">
                      <div class="come">
                         <div class="come_top">
                              <span>地区</span><i>榆林市榆神工业园区华航能源有限公司</i>
                         </div>
                         <div class="come_bottom">
                               <span>出场价</span><i>0</i>
                         </div>
                      </div>
                      <div class="tu">
                          <i class="tu_left"></i>
                          <div class="tu1">
                            <div class="tu2">
                              <p>运费</p>
                              <i>3221</i>
                              <img src="./image/che.png" alt="">
                            </div>
                          </div>
                          <span class="tu_right"></span>
                      </div>
                      <div class="price">
                         <span>5843</span>
                         <i>宁夏价格</i>
                      </div>
                  </div>

                  <div class="area">
                      <div class="come">
                         <div class="come_top">
                              <span>地区</span><i>榆林市榆神工业园区华航能源有限公司</i>
                         </div>
                         <div class="come_bottom">
                               <span>出场价</span><i>0</i>
                         </div>
                      </div>
                      <div class="tu">
                          <i class="tu_left"></i>
                          <div class="tu1">
                            <div class="tu2">
                              <p>运费</p>
                              <i>3221</i>
                              <img src="./image/che.png" alt="">
                            </div>
                          </div>
                          <span class="tu_right"></span>
                      </div>
                      <div class="price">
                         <span>5843</span>
                         <i>宁夏价格</i>
                      </div>
                  </div>

                  <div class="area">
                      <div class="come">
                         <div class="come_top">
                              <span>地区</span><i>榆林市榆神工业园区华航能源有限公司</i>
                         </div>
                         <div class="come_bottom">
                               <span>出场价</span><i>0</i>
                         </div>
                      </div>
                      <div class="tu">
                          <i class="tu_left"></i>
                          <div class="tu1">
                            <div class="tu2">
                              <p>运费</p>
                              <i>3221</i>
                              <img src="./image/che.png" alt="">
                            </div>
                          </div>
                          <span class="tu_right"></span>
                      </div>
                      <div class="price">
                         <span>5843</span>
                         <i>宁夏价格</i>
                      </div>
                  </div>

                  <div class="area">
                      <div class="come">
                         <div class="come_top">
                              <span>地区</span><i>榆林市榆神工业园区华航能源有限公司</i>
                         </div>
                         <div class="come_bottom">
                               <span>出场价</span><i>0</i>
                         </div>
                      </div>
                      <div class="tu">
                          <i class="tu_left"></i>
                          <div class="tu1">
                            <div class="tu2">
                              <p>运费</p>
                              <i>3221</i>
                              <img src="./image/che.png" alt="">
                            </div>
                          </div>
                          <span class="tu_right"></span>
                      </div>
                      <div class="price">
                         <span>5843</span>
                         <i>宁夏价格</i>
                      </div>
                  </div>

                  <div class="area">
                      <div class="come">
                         <div class="come_top">
                              <span>地区</span><i>榆林市榆神工业园区华航能源有限公司</i>
                         </div>
                         <div class="come_bottom">
                               <span>出场价</span><i>0</i>
                         </div>
                      </div>
                      <div class="tu">
                          <i class="tu_left"></i>
                          <div class="tu1">
                            <div class="tu2">
                              <p>运费</p>
                              <i>3221</i>
                              <img src="./image/che.png" alt="">
                            </div>
                          </div>
                          <span class="tu_right"></span>
                      </div>
                      <div class="price">
                         <span>5843</span>
                         <i>宁夏价格</i>
                      </div>
                  </div>

                  <div class="area">
                      <div class="come">
                         <div class="come_top">
                              <span>地区</span><i>榆林市榆神工业园区华航能源有限公司</i>
                         </div>
                         <div class="come_bottom">
                               <span>出场价</span><i>0</i>
                         </div>
                      </div>
                      <div class="tu">
                          <i class="tu_left"></i>
                          <div class="tu1">
                            <div class="tu2">
                              <p>运费</p>
                              <i>3221</i>
                              <img src="./image/che.png" alt="">
                            </div>
                          </div>
                          <span class="tu_right"></span>
                      </div>
                      <div class="price">
                         <span>5843</span>
                         <i>宁夏价格</i>
                      </div>
                  </div>

                  <div class="area">
                      <div class="come">
                         <div class="come_top">
                              <span>地区</span><i>榆林市榆神工业园区华航能源有限公司</i>
                         </div>
                         <div class="come_bottom">
                               <span>出场价</span><i>0</i>
                         </div>
                      </div>
                      <div class="tu">
                          <i class="tu_left"></i>
                          <div class="tu1">
                            <div class="tu2">
                              <p>运费</p>
                              <i>3221</i>
                              <img src="./image/che.png" alt="">
                            </div>
                          </div>
                          <span class="tu_right"></span>
                      </div>
                      <div class="price">
                         <span>5843</span>
                         <i>宁夏价格</i>
                      </div>
                  </div>
                  <div class="area">
                      <div class="come">
                         <div class="come_top">
                              <span>地区</span><i>榆林市榆神工业园区华航能源有限公司</i>
                         </div>
                         <div class="come_bottom">
                               <span>出场价</span><i>0</i>
                         </div>
                      </div>
                      <div class="tu">
                          <i class="tu_left"></i>
                          <div class="tu1">
                            <div class="tu2">
                              <p>运费</p>
                              <i>3221</i>
                              <img src="./image/che.png" alt="">
                            </div>
                          </div>
                          <span class="tu_right"></span>
                      </div>
                      <div class="price">
                         <span>5843</span>
                         <i>宁夏价格</i>
                      </div>
                  </div>

                  <div class="area">
                      <div class="come">
                         <div class="come_top">
                              <span>地区</span><i>榆林市榆神工业园区华航能源有限公司</i>
                         </div>
                         <div class="come_bottom">
                               <span>出场价</span><i>0</i>
                         </div>
                      </div>
                      <div class="tu">
                          <i class="tu_left"></i>
                          <div class="tu1">
                            <div class="tu2">
                              <p>运费</p>
                              <i>3221</i>
                              <img src="./image/che.png" alt="">
                            </div>
                          </div>
                          <span class="tu_right"></span>
                      </div>
                      <div class="price">
                         <span>5843</span>
                         <i>宁夏价格</i>
                      </div>
                  </div>

                </div>

             </div>
          </div>
      </div>
  </div>
</template>

<script>
import form from 'element-ui'
import echarts from 'echarts'
import echartsLiquidfill from 'echarts-liquidfill'
// const fruitsOptions = ['陕西东鑫恒化工有限责任公司', '神木富油能源科技有限公司', '神木市鑫义能源化工有限公司', '陕西延长石油安源化工有限公司', '神木市胜帮化工有限公司', '河南','河北'];
    export default {
         data() {
            return {
            labelPosition: 'left'
      }
    },
    mounted () {
        var myChart = echarts.init(document.getElementById('dd'))
        var value = .6353;
        var data = [value, value, value, ];
        var option = {
            backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.1, [{
                offset: 0,
                color: '#fff'
            }, {
                offset: 1,
                color: 'rgba(8,160,222,0)'
            }]),
            title: {
                text: (value * 10000) + '{a|}',
                textStyle: {
                    fontSize: 26,
                    fontFamily: 'Microsoft Yahei',
                    fontWeight: '900',
                    color: '#fff',
                    rich: {
                        a: {
                            fontSize: 28,
                        }
                    }
                },
                x: 'center',
                y: '40%'
            },
            graphic: [{
                type: 'group',
                left: 'center',
                top: '57%',
                children: [{
                    type: 'text',
                    z: 100,
                    left: '10',
                    top: 'middle',
                    style: {
                        fill: '#fff',
                        text: '模型1号油',
                        font: '14px Microsoft YaHei',
                        fontWeight: '600'
                    }
                }]
            }],
            series: [{
                type: 'liquidFill',
                radius: '80%',
                center: ['50%', '50%'],
                //  shape: 'roundRect',
                data: data,
                backgroundStyle: {
                    color: {
                        type: 'linear',
                        x: .5,
                        y: 0,
                        x2: 0.5,
                        y2: .5,
                        colorStops: [{
                            offset: 1,
                            color: 'rgba(8,160,222, .9)'
                        }, {
                            offset: 0.5,
                            color: 'rgba(6,103,170, .8)'
                        }, {
                            offset: 0,
                            color: 'rgba(6,103,170, 1)'
                        }],
                        globalCoord: false
                    },
                },
                outline: {
                    borderDistance: 0,
                    itemStyle: {
                        borderWidth: 1,
                        borderColor: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(8,160,222, .5)'
                            }, {
                                offset: 0.5,
                                color: 'rgba(6,103,170, .5)'
                            }, {
                                offset: 1,
                                color: 'rgba(8,160,222, 1)'
                            }],
                            globalCoord: false
                        },
                        shadowBlur: 10,
                        shadowColor: '#000',
                    }
                },
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 1,
                        color: 'rgba(9,160,222,.2)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(9,103,170,.2)'
                    }, {
                        offset: 0,
                        color: 'rgba(9,160,222, .2)'
                    }],
                    globalCoord: false
                },
                label: {
                    normal: {
                        formatter: '',
                    }
                }
            }, ]
        }
        myChart.setOption(option)
    }
  }
</script>

<style lang="less">
/* 外部容器 */
.prtrol {
  height: 100%;
  width: 100%;
}

/* 主要内容区 */
#main {
  box-sizing: border-box;
  width: 1890px;
  height: 959px;
  background: url(./image/kuang.png) no-repeat;
  background-size: cover;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
/* 左边区域样式 */
.left{
  width: 433px;
  height: 100%;
  padding: 30px 0px;
  .left_header{
    width: 453px;
    height: 44px;
    position: relative;
    img{
         width: 453px;
         height: 44px;
       }                
       h2{
         width: 140px;
         height: 17px;
         line-height: 80px;
         font-size: 12px;
         font-weight: 400;
         color: #fff;
         text-align: left;
         padding-left: 15px;
         position: absolute;
         top: -20px;
    }
  }
  .left_main{
      width: 416px;
      height: 836px;
      // background: #235464;
      border: 1px solid #235464;
      border-top: none;
      padding: 15px 25px 0 10px;
      // 供应和销售样式
      .check{
        width: 100%;
        height: 52px;
        display: flex;
        justify-content: space-between;
        // 供应地
        .gongyin{
          width: 310px;
          height: 52px;
          .head{
            width: 60px;
            height: 20px;
            font-size: 12px;
            font-weight: 400;
            text-align: left;
            color: #8bf3ff;
          
          }
          .el-select{
            width: 300px;
            height: 30px;
            .el-input{
                background: rgba(14,36,44,0);
                .el-input__inner{
                  background: rgba(14,36,44,0);
                  border: 1px solid #32fdf6;
                  border-radius: 2px;
                }
            }
          }
          .el-scrollbar{
            background: rgba(9,51,80,0.96)
          }
          .el-scrollbar__view .el-select-dropdown__list{
            background: rgba(9,51,80,0.96)
          }
        }
        // 销售地
        .xiaoshou{
          width: 92px;
          height: 52px;
          padding: 0;
          .head{
            width: 60px;
            height: 20px;
            font-size: 12px;
            font-weight: 400;
            text-align: left;
            color: #8bf3ff;
          }
          .el-select{
            width: 92px;
            height: 30px;
            font-size: 10px;
            
            ::v-deep.el-input__inner{
              text-align: left;
            }
            .el-input{
                background: rgba(14,36,44,0);
                text-align: left;
                .el-input__inner{
                  background: rgba(14,36,44,0);
                  border: 1px solid #32fdf6;
                  border-radius: 2px;
                  font-size: 8px;
                  text-align: left;
                }
            }
          }
          
        }
      }
      // 地区出场价 和运费
      .l_conter{
        width: 430px;
        overflow-x: hidden;
        overflow-y: auto;
        padding-top: 10px;
        height: 775px;
        .area{
          display: flex;
          margin-bottom: 12px;
          .come{
            width: 221px;
            height: 83px;
            .come_top{
              height: 40px;
              width: 219px;
              border: 1px solid #0a5a83;
              display: flex;
              justify-content: space-between;
              span{
                display: block;
                text-align: center;
                height: 100%;
                width: 60px;
                line-height: 40px;
                color: #fff;
                font-size: 12px;
                border-right: 1px solid #0a5a83;
              }
              i{
                display: inline-block;
                color: #fff;
                width: 144px;
                height: 40px;
                padding: 2px 5px 2px 10px;
                font-size: 8px;
              }
            }
            .come_bottom{
              height: 40px;
              width: 219px;
              border: 1px solid #0a5a83;
              border-top: none;
              display: flex;
              justify-content: space-between;
              span{
                display: block;
                text-align: center;
                height: 100%;
                width: 59px;
                line-height: 40px;
                color: #fff;
                border-right: 1px solid #0a5a83;
              }
              i{
                color: #fff;
                width: 149px;
                height: 40px;
                font-size: 8px;
                padding: 2px 5px;
                text-align: center;
                line-height: 40px;
              }
            }
          }
          .tu{
            height: 83px;
            display: flex;
            justify-content: space-between;
            position: relative;
            // justify-content: center;
            text-align: center;
            .tu_left{
              display: block;
              width: 15px;
              height: 1px;
              background: #0a5a83;
              position: absolute;
              top: 41px;
            }
            .tu1{
              width: 73px;
              height: 73px;
              background: rgba(50,253,246,.1);
              border-radius: 50%;
              margin: 0 15px;
              .tu2{
                width: 61px;
                height: 61px;
                background: rgba(50,253,246,.2);
                border-radius: 50%;
                // position: absolute;
                margin: 0 auto;
                margin-top: 5px;
                p{
                  color: #fff;
                  padding-top: 2px;
                }
                i{
                  display: block;
                  color: #fff;
                  padding-top: 2px 0;
                }
                img{
                  width: 30px;
                  height: 16px;
                  color: #ffffff;

                }
              }
            }
            .tu_right{
              display: block;
              width: 15px;
              height: 1px;
              background:#32fdf6;
              position: absolute;
              top: 41px;
              right: 0;
            }
          }
          .price{
            width: 92px;
            height: 58px;
            border: 1px solid #32fdf6;
            border-radius: 2px;
            color: #fff;
            text-align: center;
            margin-top: 11.5px;
            span{
              display: block;
              width: 92px;
              line-height: 32px;
            }
            i{
              display: block;
              width: 92px;
              // height: 26px;
              line-height: 28px;
              background-color: rgba(50,253,246,.4);
            }
          }
        }
      }
      .l_conter:-webkit-scrollbar-thumb {
        width: 462px;
        height: 229px;
        background: #235464;
        border: 3px solid #235464;
      }
  }
}

// 中间区域样式
.conter{
  width: 874px;
  height: 100%;
  padding: 30px 0;
  .conter_header{
    width: 874px;
    height: 44px;
    position: relative;
    img{
        width: 874px;
        height: 44px;
    }
    h2{
        width: 120px;
         height: 17px;
         line-height: 80px;
         font-size: 12px;
         font-weight: 400;
         color: #fff;
         text-align: left;
         padding-left: 15px;
         position: absolute;
         top: -20px;
    }
  }
  .conter_main{
    width: 871px;
    height: 531px;
    padding-top: 30px;
    // background: #235464;
    border: 1px solid #235464;
    border-top: none;
    background: url(./image/190.png) 100% 100% no-repeat;
    .time{
      width: 100%;
      height: 30px;
      text-align: right;
      color: #33fff7;
      line-height: 30px;
      position: relative;
      .el-date-editor{
        height: 30px;
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
        width: 100%;
        height: 70%;
        // text-align: center;
        position: relative;
       #dd{
         position: absolute;
         left: 38%;
         top: 7.3%;
       }
    }
  }
  .conter_bottom{
    padding-top: 14px;
    display: flex;
    justify-content: space-between;
    .b_left{
      position: relative;
      img{
         width: 462px;
         height: 44px;
       }                
       h2{
         width: 140px;
         height: 17px;
         line-height: 80px;
         font-size: 18px;
         font-weight: 100;
         color: #fff;
         text-align: left;
         padding-left: 15px;
         position: absolute;
         top: -20px;
      }
      .left_main{
          width: 435px;
          height: 217px;
          border: 1px solid #235464;
          padding-top: 10px;
          padding-left: 25px;
          overflow-x: hidden;
          overflow-y: auto;
          // 中下复用样式
          .area{
          display: flex;
          margin-bottom: 12px;
          .come{
            width: 221px;
            height: 83px;
            .come_top{
              height: 40px;
              width: 219px;
              border: 1px solid #0a5a83;
              display: flex;
              justify-content: space-between;
              span{
                display: block;
                text-align: center;
                height: 100%;
                width: 60px;
                line-height: 40px;
                color: #fff;
                font-size: 12px;
                border-right: 1px solid #0a5a83;
              }
              i{
                display: inline-block;
                color: #fff;
                width: 144px;
                height: 40px;
                padding: 2px 5px 2px 10px;
                font-size: 8px;
              }
            }
            .come_bottom{
              height: 40px;
              width: 219px;
              border: 1px solid #0a5a83;
              border-top: none;
              display: flex;
              justify-content: space-between;
              span{
                display: block;
                text-align: center;
                height: 100%;
                width: 59px;
                line-height: 40px;
                color: #fff;
                border-right: 1px solid #0a5a83;
              }
              i{
                color: #fff;
                width: 149px;
                height: 40px;
                font-size: 8px;
                padding: 2px 5px;
                text-align: center;
                line-height: 40px;
              }
            }
          }
          .tu{
            height: 83px;
            display: flex;
            justify-content: space-between;
            position: relative;
            // justify-content: center;
            text-align: center;
            .tu_left{
              display: block;
              width: 15px;
              height: 1px;
              background: #0a5a83;
              position: absolute;
              top: 41px;
            }
            .tu1{
              width: 73px;
              height: 73px;
              background: rgba(50,253,246,.1);
              border-radius: 50%;
              margin: 0 15px;
              .tu2{
                width: 61px;
                height: 61px;
                background: rgba(50,253,246,.2);
                border-radius: 50%;
                // position: absolute;
                margin: 0 auto;
                margin-top: 5px;
                p{
                  color: #fff;
                  padding-top: 2px;
                }
                i{
                  display: block;
                  color: #fff;
                  padding-top: 2px 0;
                }
                img{
                  width: 30px;
                  height: 16px;
                  color: #ffffff;

                }
              }
            }
            .tu_right{
              display: block;
              width: 15px;
              height: 1px;
              background:#32fdf6;
              position: absolute;
              top: 41px;
              right: 0;
            }
          }
          .price{
            width: 92px;
            height: 58px;
            border: 1px solid #32fdf6;
            border-radius: 2px;
            color: #fff;
            text-align: center;
            margin-top: 11.5px;
            span{
              display: block;
              width: 92px;
              line-height: 32px;
            }
            i{
              display: block;
              width: 92px;
              // height: 26px;
              line-height: 28px;
              background-color: rgba(50,253,246,.4);
            }
          }
        }
      }
    }
    .b_right{
         position: relative;
        img{
          width: 393px;
          height: 44px;
        }                
        h2{
          width: 120px;
          height: 17px;
          line-height: 80px;
          font-size: 18px;
          font-weight: 100;
          color: #fff;
          text-align: left;
          padding-left: 15px;
          position: absolute;
          top: -20px;
        }
        .right_main{
            width: 341px;
            height: 207px;
            border: 1px solid #235464;
            display: flex;
            justify-content: space-between;
            padding: 10px 25px;
            .r1{
              position: relative;
              text-align: center;
              span{
                color: #0895d6;
                font-size: 24px;
                position: absolute;
                top: 23px;
                left: 60px;
                background-image:-webkit-linear-gradient(bottom,#08aae4,#f2f2f2,#fff );
                -webkit-background-clip:text;
                -webkit-text-fill-color:transparent;
              }
              img{
                width: 173px;
                height: 171px;
              }
              i{
                color: #fff;
                font-size: 16px;
              }
            }
            .r2{
              position: relative;
              text-align: center;
              span{
                color: #0895d6;
                font-size: 24px;
                position: absolute;
                top: 23px;
                left: 60px;
                background-image:-webkit-linear-gradient(bottom,#08aae4,#f2f2f2,#fff );
                -webkit-background-clip:text;
                -webkit-text-fill-color:transparent;
              }
              img{
                width: 173px;
                height: 171px;
              }
              i{
                color: #fff;
                font-size: 16px;
              }
            }
        }
    }
  }
}

/* 右边区域样式 */
.right{
  width: 433px;
  height: 100%;
  padding: 30px 20px 30px 0;
  .right_header{
    width: 453px;
    height: 44px;
    position: relative;
    img{
         width: 453px;
         height: 44px;
       }                
       h2{
         width: 120px;
         height: 17px;
         line-height: 80px;
         font-size: 12px;
         font-weight: 400;
         color: #fff;
         text-align: left;
         padding-left: 15px;
         position: absolute;
         top: -20px;
    }
  }
  .right_main{
      width: 416px;
      height: 826px;
      // background: #235464;
      border: 1px solid #235464;
      border-top: none;
      padding: 15px 25px 0 10px;
            // 供应和销售样式
      .check{
        width: 100%;
        height: 52px;
        display: flex;
        justify-content: space-between;
        // 供应地
        .gongyin{
          width: 310px;
          height: 52px;
          .head{
            width: 60px;
            height: 20px;
            font-size: 12px;
            font-weight: 400;
            text-align: left;
            color: #8bf3ff;
          
          }
          .el-select{
            width: 300px;
            height: 30px;
            .el-input{
                background: rgba(14,36,44,0);
                .el-input__inner{
                  background: rgba(14,36,44,0);
                  border: 1px solid #32fdf6;
                  border-radius: 2px;
                }
            }
          }
          .el-scrollbar{
            background: rgba(9,51,80,0.96)
          }
          .el-scrollbar__view .el-select-dropdown__list{
            background: rgba(9,51,80,0.96)
          }
        }
        // 销售地
        .xiaoshou{
          width: 92px;
          height: 52px;
          padding: 0;
          .head{
            width: 60px;
            height: 20px;
            font-size: 12px;
            font-weight: 400;
            text-align: left;
            color: #8bf3ff;
          }
          .el-select{
            width: 92px;
            height: 30px;
            font-size: 10px;
            
            ::v-deep.el-input__inner{
              text-align: left;
            }
            .el-input{
                background: rgba(14,36,44,0);
                text-align: left;
                .el-input__inner{
                  background: rgba(14,36,44,0);
                  border: 1px solid #32fdf6;
                  border-radius: 2px;
                  font-size: 8px;
                  text-align: left;
                }
            }
          }
          
        }
      }
      // 地区出场价 和运费
      .l_conter{
        width: 430px;
        overflow-x: hidden;
        overflow-y: auto;
        padding-top: 10px;
        height: 765px;
        .area{
          display: flex;
          margin-bottom: 12px;
          .come{
            width: 221px;
            height: 83px;
            .come_top{
              height: 40px;
              width: 219px;
              border: 1px solid #0a5a83;
              display: flex;
              justify-content: space-between;
              span{
                display: block;
                text-align: center;
                height: 100%;
                width: 60px;
                line-height: 40px;
                color: #fff;
                font-size: 12px;
                border-right: 1px solid #0a5a83;
              }
              i{
                display: inline-block;
                color: #fff;
                width: 144px;
                height: 40px;
                padding: 2px 5px 2px 10px;
                font-size: 8px;
              }
            }
            .come_bottom{
              height: 40px;
              width: 219px;
              border: 1px solid #0a5a83;
              border-top: none;
              display: flex;
              justify-content: space-between;
              span{
                display: block;
                text-align: center;
                height: 100%;
                width: 59px;
                line-height: 40px;
                color: #fff;
                border-right: 1px solid #0a5a83;
              }
              i{
                color: #fff;
                width: 149px;
                height: 40px;
                font-size: 8px;
                padding: 2px 5px;
                text-align: center;
                line-height: 40px;
              }
            }
          }
          .tu{
            height: 83px;
            display: flex;
            justify-content: space-between;
            position: relative;
            // justify-content: center;
            text-align: center;
            .tu_left{
              display: block;
              width: 15px;
              height: 1px;
              background: #0a5a83;
              position: absolute;
              top: 41px;
            }
            .tu1{
              width: 73px;
              height: 73px;
              background: rgba(50,253,246,.1);
              border-radius: 50%;
              margin: 0 15px;
              .tu2{
                width: 61px;
                height: 61px;
                background: rgba(50,253,246,.2);
                border-radius: 50%;
                // position: absolute;
                margin: 0 auto;
                margin-top: 5px;
                p{
                  color: #fff;
                  padding-top: 2px;
                }
                i{
                  display: block;
                  color: #fff;
                  padding-top: 2px 0;
                }
                img{
                  width: 30px;
                  height: 16px;
                  color: #ffffff;

                }
              }
            }
            .tu_right{
              display: block;
              width: 15px;
              height: 1px;
              background:#32fdf6;
              position: absolute;
              top: 41px;
              right: 0;
            }
          }
          .price{
            width: 92px;
            height: 58px;
            border: 1px solid #32fdf6;
            border-radius: 2px;
            color: #fff;
            text-align: center;
            margin-top: 11.5px;
            span{
              display: block;
              width: 92px;
              line-height: 32px;
            }
            i{
              display: block;
              width: 92px;
              // height: 26px;
              line-height: 28px;
              background-color: rgba(50,253,246,.4);
            }
          }
        }
      }

  }
}

</style>