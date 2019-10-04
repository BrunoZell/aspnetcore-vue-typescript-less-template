import components from "components";
import router from "router";
import Store from "store";
import vuetify from "theme";
import Vue from "vue";

Store()
    .then(store => {
        // Store successfully initialized.
        // Now initialize Vue and exit loading screen
        new Vue({
            el: "#app-root",
            vuetify,
            store,
            router,
            render: (h: any) => h(components.layout.app)
        });
    })
    .catch(error => {
        // Error while initializing store.
        // Todo: render new Vue with error page
        console.error("Site can't be initialized. Show error page.");
        console.error(error);
    });
