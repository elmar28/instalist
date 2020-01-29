import Vue from 'vue'
import 'es6-promise/auto'
import Vuex from 'vuex'
import App from './App.vue'
import { store } from './store/Store'
import VueHead from 'vue-head'
import router from './router'

Vue.use(Vuex)
Vue.use(VueHead)

Vue.config.productionTip = false

new Vue({
  router,
  store: store,
  render: h => h(App),
  head: {
    meta: [
      {name: 'description', content: 'instagramのユーザー画像一覧'},
      {property: 'og:type', content: 'website'},
      // Twitter
      { name: 'twitter:title', content: 'instagramのユーザー一覧' },
      // with shorthand
      { n: 'twitter:description', c: 'Content description less than 200 characters'},
      // Facebook / Open Graph
      { property: 'fb:app_id', content: '123456789' },
      { property: 'og:title', content: 'instagramのユーザー一覧' },
      // with shorthand
      //{ p: 'og:image', c: 'https://xxxx.xx/image.jpg' },
    ],
  }
}).$mount('#app')
