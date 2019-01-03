import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vue-axios-13cdc.firebaseio.com';
//以下還不太懂，之後看
axios.defaults.headers.common['Authroization'] = 'fdafa';
axios.defaults.headers.get['Accepts'] = 'application/json';

const reqInterceptors = axios.interceptors.request.use(config => {
  console.log('Request Interceptor', config);
  return config
})

const resInterceptors = axios.interceptors.response.use(res => {
  console.log('Response Interceptor', res);
  return res
})

//可以中斷上面兩個執行，不常使用
axios.interceptors.request.eject(reqInterceptors)
axios.interceptors.response.eject(resInterceptors)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
