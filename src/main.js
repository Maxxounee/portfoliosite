import { createApp, ref } from "vue";
import VueCookies from "vue-cookies";

import App from "./App.vue";
// Глобальные события
import mitt from "mitt";

const emitter = mitt();
const app = createApp(App);
app.use(VueCookies);
app.config.globalProperties.emitter = emitter;
app.mount("#app");
