import Components from "components";
import Router from "router";
import Store from "store";
import Vue from "vue";
import Vuetify from "vuetify";
Vue.use(Vuetify)

Store()
    .then(store => {
        // Store successfully initialized.
        // Now initialize Vue and exit loading screen
        new Vue({
            el: "#app-root",
            store: store,
            router: Router,
            render: (h: any) => h(Components.app)
        });
    })
    .catch(error => {
        // Error while initializing store.
        // Todo: render new Vue with error page
        console.log("Site can't be initialized. Show error page.");
        console.log(error);
    });
