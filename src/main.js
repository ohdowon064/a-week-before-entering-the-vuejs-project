import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from "@/mixins";
import i18nPlugin from "@/plugins/i18n"

const app = createApp(App)
app.use(router)
const i18nStrings = {
    en: {
        hi: "Hello!"
    },
    ko: {
        hi: "안녕하세요!"
    }
}

app.use(i18nPlugin, i18nStrings)
app.mixin(mixins).mount('#app')