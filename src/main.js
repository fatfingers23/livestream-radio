import Vue from 'vue'
import VueYoutube from 'vue-youtube'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'

Vue.config.productionTip = false
Vue.use(VueYoutube)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
