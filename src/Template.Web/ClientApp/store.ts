import AppState from "state";
import Urls from "urls";
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default async function () {
    // Initialize Vuex store while loading screen is still shown
    const state = await initializeState();
    return new Vuex.Store({ state });
};

async function initializeState() {
    // Todo: Make api calls or similar to initialize the SPA state

    return <AppState>{
        urls: Urls
    };
}
