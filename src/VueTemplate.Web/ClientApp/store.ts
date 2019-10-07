import axios from "axios";
import AppState from "state";
import Vue from "vue";
import Vuex, { MutationTree } from "vuex";

Vue.use(Vuex);

export default async function () {
    // Initialize Vuex store while loading screen is still shown
    const state = await initializeState();
    return new Vuex.Store({ state, mutations });
};

async function initializeState() {
    const version = await axios.post<{ version: string }>("/api/version");

    return <AppState>{
        appVersion: version.data.version,
    };
}

const mutations = <MutationTree<AppState>>{
    // Todo: Add mutations
}
