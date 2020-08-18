import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import ru from 'vuetify/src/locale/ru';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md',
    },
    theme: {
        dark: false,
    },
    themes: {
        light: {
            primary: "#4682b4",
            secondary: "#b0bec5",
            accent: "#8c9eff",
            error: "#b71c1c",
        },
    },
    lang: {
        locales: { ru },
        current: 'ru',
    },
})
