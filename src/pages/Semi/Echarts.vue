<template>
   <div id="bb"></div>
</template>

<script>
import echarts from 'echarts'
export default {
    data () {
        return {

        }
    },
    mounted() {
        
      // 四柱图
    var myChart = echarts.init(document.getElementById('bb'))
    var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadowColor'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: []
    },
    grid: {
        left: '5%',
        right: '4%',
        bottom: '6%',
        containLabel: false
    },
    xAxis: [
        {
            type: 'category',
            data: ['10.11', '10.12', '10.13', '10.14', '10.15', '10.16', '10.17', '10.18','10.19','10.20']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            data: [320, 332, 301, 334, 390, 330, 320, 390, 330, 320],
            barWidth: 3,
            itemStyle:{
                    normal:{
                    color:'#00fea3'
                            }
                }
        },
        {
            name: '视频广告',
            type: 'bar',
            stack: '广告',
            data: [150, 232, 201, 154, 190, 330, 410,390, 330, 320],
            barWidth: 3,
            itemStyle:{
                    normal:{
                    color:'#fb6f38'
                            }
                }
        },
        {
            name: '搜索引擎',
            type: 'bar',
            data: [862, 862, 862,862,862,862,862, 862, 862, 862],
            barWidth: 3,
            itemStyle:{
                    normal:{
                    color:' #f1e291'
                            }
                },
            
            markLine: {
                lineStyle: {
                    type: 'dashed'
                },
                data: [
                    // [{type: 'min'}, {type: 'max'}]
                ]
            },
        },
        {
            name: '百度',
            type: 'bar',
            // barWidth: 5,
            stack: '搜索引擎',
            data: [620, 620,620,620,620,620,620,620,620,620],
            barWidth: 3,
            itemStyle:{
                    normal:{
                    color:'#4d7fd0'
                            }
                }
        }
        
    ]
        }
    myChart.setOption(option)

    }
}
</script>

<style>
    #bb{
        width: 750px;
        height: 200px;
    }
</style>