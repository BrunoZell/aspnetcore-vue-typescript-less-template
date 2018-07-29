import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
    { name: "home", path: "/", component: require("./components/home/home.vue.html") }
];

export default new VueRouter({
    mode: "history",
    routes: routes
});
