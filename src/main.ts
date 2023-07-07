import {createApp, h, provide} from "vue";
import {languages, defaultLocale} from "~/i18n";
import {createI18n, useI18n} from "vue-i18n";
import App from "./App.vue";
import router from '../src/router/index';
import {apolloClient} from "~/api";
import { ApolloClients } from "@vue/apollo-composable";
import "~/styles/index.scss";
import "uno.css";
import "element-plus/theme-chalk/src/message.scss";
const localeStorageLang = localStorage.getItem('lang')
import '../src/styles/index.scss'
import '../src/styles/style.scss'
const messages = Object.assign(languages)

const i18n = createI18n({
    legacy: false,
    fallbackLocale: "en",
    locale: localeStorageLang || defaultLocale,
    messages
})


const app = createApp(App, {
    setup() {
        provide(ApolloClients, {
            default: apolloClient,
        });
        const {t} = useI18n()
        return {t}
    },
    render: () => h(App),
})



app.use(i18n)
app.use(router);
app.mount("#app");
