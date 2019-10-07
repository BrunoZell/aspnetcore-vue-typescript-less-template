import Vue from "vue";
import Vuetify from "vuetify";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify)

const vuetify: any = new Vuetify({
    theme: {
        themes: {
            // Todo: Customize themes
            light: {
                appbar: colors.green.darken3,
                primary: colors.blue.darken1,
                secondary: colors.green.darken1,
                accent: colors.orange.accent3,
                error: colors.red.darken3
            }
        },
    },
});

export default vuetify;
