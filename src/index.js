import './components/assets/element-variables.scss'
import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui'
import Router from 'vue-router'

// change this for localization
//import locale from 'element-ui/lib/locale/lang/ru-RU'
//Vue.use(ElementUI, { locale })

window.axios = require('axios');
// globalThis.base_url = "http://127.0.0.1:8000"

Vue.use(ElementUI);
Vue.use(Router)

new Vue({
  el: '#app',
  // locale: 'ru',
  render: h => h(App)
});