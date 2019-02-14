export default {
    layout: {
        get app() { return require("layout/app/app.vue.html").default },
    },
    com: {
        
    },
    pages: {
        get home() { return require("pages/home/home.vue.html").default }
    }
};
