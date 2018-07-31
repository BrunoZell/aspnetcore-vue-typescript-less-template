import Vue from "vue";
import { Component } from "vue-property-decorator";
import * as V from "vuetify/es5/components/*";

@Component
export default class AppComponent extends Vue {
    menuOpen: boolean = false;
    menuItems = [
        { icon: "settings", text: "Settings" },
        { icon: "chat_bubble", text: "Send feedback" },
        { icon: "help", text: "Help" }
    ];
}
