import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import globalComponents from "./global-components";
import utils from "./utils";
import "./assets/css/app.css";
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import 'mosha-vue-toastify/dist/style.css';
import { VueQueryPlugin } from 'vue-query';


const app = createApp(App).use(router).use(createPinia());

globalComponents(app);
utils(app);

app.use(VueQueryPlugin);
app.use(router);
app.mount("#app");
