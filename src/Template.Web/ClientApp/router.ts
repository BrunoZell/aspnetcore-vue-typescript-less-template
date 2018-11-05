import Components from "components";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
Vue.use(VueRouter);

const routes = <RouteConfig[]>[
    {
        name: "home",
        path: "/",
        component: Components.pages.home
    }
];

export default new VueRouter({
    mode: "history",
    routes: routes
});
