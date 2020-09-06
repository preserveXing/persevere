// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
//调用  axios  请求插件
// import axios from 'axios'
// import qs from 'qs'
import service from "./service"
Vue.prototype.service = service
//引入icon图标库
import 'font-awesome/css/font-awesome.min.css'
//引入echarts  并挂在到原型
import echarts from "echarts"
Vue.prototype.$echarts = echarts
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})