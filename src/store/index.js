import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

import auth from './modules/auth'
import github from './modules/github'

// Create a new store instance.
const store = createStore({
    plugins: [createPersistedState({ paths: ["auth"] })],
    modules: { auth, github },
    state() { },
    mutations: {}
})

export default store