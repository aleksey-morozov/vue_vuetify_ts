import Vue from 'vue';
import router from './router';
import vuetify from './plugins/vuetify';
import AppMain from './components/AppMain.vue';

new Vue({
    components: {
        AppMain
    },
    router,
    vuetify,
}).$mount('#app');