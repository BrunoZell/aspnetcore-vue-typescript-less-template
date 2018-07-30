import Router from "router";
import Store from "store";
import Vue from "vue";

Store()
    .then(store => {
        // Store successfully initialized.
        // Now initialize Vue and exit loading screen
        new Vue({
            el: "#app-root",
            store: store,
            router: Router,
            render: h => h(require("components/app/app.vue.html").default)
        });
    })
    .catch(error => {
        // Error while initializing store.
        // Todo: render new Vue with error page
        console.log("Site can't be initialized. Show error page.");
        console.log(error);
    });
