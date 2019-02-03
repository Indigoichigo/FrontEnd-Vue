import Vue from 'vue';
import App from './play_src/playground/App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
