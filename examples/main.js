import Vue from "vue";
import App from "./App.vue";
import ScrollNumberCard from '../scroll-number-card/index'

Vue.config.productionTip = false;

Vue.use(ScrollNumberCard);
new Vue({
	render: (h) => h(App),
}).$mount("#app");
