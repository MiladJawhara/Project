import './bootstrap'
import 'bootstrap4-toggle'

import App from './pages/App'
import router from './router/index'
import vuetify from './plugins/vuetify'
import store from './Store/index'
window.Vue = require('vue')

if (document.getElementById('app')) {
    new Vue({
        el: '#app',
        store,
        router,
        vuetify,
        components: { App }
    })
}
