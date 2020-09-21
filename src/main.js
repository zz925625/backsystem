import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/css样式文件.css'
import axios from 'axios'
import '../mock/index'


Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.use(ElementUI);



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')