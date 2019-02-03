import Vue from 'vue';
// import App from './component_todoList/App.vue';
import App from './element-ui/App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

new Vue({
  el: '#app',
  render: h => h(App)
});
