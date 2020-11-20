import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import less from 'less'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.use(less)

Vue.config.productionTip = false

Vue.use(ElementUI,{ size: 'small' })

new Vue({
  render: h => h(App),
}).$mount('#app')
