import { useMovieStore } from './stores/movie';
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

import "./index.css";

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.component("DatePicker", Datepicker);

app.mount("#app");
