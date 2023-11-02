import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({

    state: {
        progress:false,
        network_err:false,
    },

    mutations: {
        // progress handler
        progress_status(state, payload){
            state.progress = payload
        },

        // network error handler
        network_dialog(state, payload){
            state.network_err = payload
        }
    }


})