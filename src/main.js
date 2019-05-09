import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false;
Vue.use(ElementUI)

Vue.use(VueAnalytics, {
  id: 'UA-136598251-3'
})

new Vue({
  render: h => h(App),
}).$mount('#app');
