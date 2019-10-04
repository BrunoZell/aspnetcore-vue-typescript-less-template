import Vue from "vue";
import { Component } from "vue-property-decorator";
import { State } from "vuex-class";

@Component
export default class AppComponent extends Vue {
    @State appVersion: string;

    menuOpen: boolean = false;
    toolbarTitle: string = "VueTemplate";

    menuItems = [
        { icon: "mdi-settings", text: "Settings" },
        { icon: "mdi-message", text: "Send feedback" },
        { icon: "mdi-help-circle", text: "Help" }
    ];
}
