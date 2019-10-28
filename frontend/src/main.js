import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'
import './config/msg'

Vue.config.productionTip = false

// TEMPORÁRIO!
//require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MywibmFtZSI6IkFuYSIsImVtYWlsIjoiYW5hQGVtYWlsLmNvbSIsImFkbWluIjoidHJ1ZSIsImlhdCI6MTU3MjAyNzYzMiwiZXhwIjoxNTcyMjg2ODMyfQ.ax4Ue3Xptt8nVgltHE4ePcT37LBQwjiyQzRzXpU4iJE'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
