import { createApp } from "vue";
import App from "./App.vue";
import router from "./composable/router";

const app = createApp(App);
app.use(router);

app.mount("#app");
