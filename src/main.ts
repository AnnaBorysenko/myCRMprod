
import App from "./App.vue";
import {createApp, h, provide} from "vue";
import '../src/styles/index.scss'
import '../src/styles/style.scss'
import {languages, defaultLocale} from "~/i18n";
import {createI18n, useI18n} from "vue-i18n";
import router from '../src/router/index';
import {apolloClient} from "~/graphql/api";
import { DefaultApolloClient } from "@vue/apollo-composable";
import 'uno.css'

const localeStorageLang = localStorage.getItem('lang')
const messages = Object.assign(languages)

const i18n = createI18n({
    legacy: false,
    fallbackLocale: "en",
    locale: localeStorageLang || defaultLocale,
    messages
})

const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient);
        const {t} = useI18n()
        return {t}
    },
    render: () => h(App),
})



app.use(i18n)
app.use(router);
app.mount("#app");
