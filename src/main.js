// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MagnifyIcon from 'vue-material-design-icons/Magnify.vue'
import HomeIcon from 'vue-material-design-icons/Home.vue'
import AccountIcon from 'vue-material-design-icons/Account.vue'
import TwitterIcon from 'vue-material-design-icons/Twitter.vue'
import FacebookIcon from 'vue-material-design-icons/Facebook.vue'
import InstagramIcon from 'vue-material-design-icons/Instagram.vue'
import KeyIcon from'vue-material-design-icons/Key.vue'

Vue.config.productionTip = false

Vue.component('home-icon', HomeIcon)
Vue.component('key-icon', KeyIcon)
Vue.component('search-icon', MagnifyIcon)
Vue.component('account-icon', AccountIcon)
Vue.component('twitter-icon', TwitterIcon)
Vue.component('facebook-icon', FacebookIcon)
Vue.component('instagram-icon', InstagramIcon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
