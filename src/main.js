import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import '@/assets/css/reset.css'

Vue.config.productionTip = true

/* eslint-disable no-new */

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')