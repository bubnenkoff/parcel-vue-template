import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui'

// change this for localization
//import locale from 'element-ui/lib/locale/lang/ru-RU'
//Vue.use(ElementUI, { locale })

window.axios = require('axios');

import './components/assets/element-variables.scss'

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});