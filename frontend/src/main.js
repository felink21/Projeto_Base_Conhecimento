import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORÁRIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTAsIm5hbWUiOiJGZWxpcGUiLCJlbWFpbCI6ImZlbGlwZUBlbWFpbC5jb20iLCJhZG1pbiI6InRydWUiLCJpYXQiOjE1NzE0MDI5MDcsImV4cCI6MTU3MTY2MjEwN30.go3iwZXHR2rslJWUyYuXyLZr2gp2B20HQEzb2bHuRiY'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
