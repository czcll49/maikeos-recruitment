import Vue from 'vue'
import VueRouter from 'vue-router'
import AntD from 'ant-design-vue'
import Axios from 'axios'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'

Vue.prototype.$axios = Axios;

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(AntD)

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
}).$mount('#app')
