import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
Vue.use(VueRouter);

const routes = <RouteConfig[]>[
    {
        name: "home",
        path: "/",
        component: require("components/home/home.vue.html").default
    }
];

export default new VueRouter({
    mode: "history",
    routes: routes
});
