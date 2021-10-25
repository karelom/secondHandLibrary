// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router/router'
import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false
Vue.prototype.$login = false /* determine if user has login */

/* eslint-disable no-new */
// compiler
// new Vue({
//   el: '#app',
//   router,
//   vuetify,
//   components: {
//     App
//   },
//   template: '<App/>'
// })

// runtime
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
