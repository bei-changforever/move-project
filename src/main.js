import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from "vant"
import "vant/lib/index.css"
import "./assets/reset.css"
import "./assets/ico/iconfont.css"
import { Badge } from 'vant';

Vue.use(Badge);
Vue.use(Vant)
Vue.config.productionTip = false

import dayjs from 'dayjs'
Vue.prototype.dayjs=dayjs
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
