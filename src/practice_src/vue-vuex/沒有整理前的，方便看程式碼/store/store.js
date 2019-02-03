import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        value: 0
    },
    getters: {
        doubleCounter: state => state.counter*2,
        stringCounter: state => state.counter + ' clicks',
        getValue: state => state.value
    },
    mutations: {
        increment: (state, param) => state.counter += param,
        decrement: state => state.counter--,
        updateValue: (state, param) => state.value = param
    },
    actions: {
        increment: ({ commit }, param) => commit('increment', param),
        decrement: ({ commit }) => commit('decrement'),
        asyncIncrement: ({ commit }) => {
            setTimeout(() => {
                commit('increment')
            }, 1000)
        },
        asyncDecrement: ({ commit }, params) => {
            setTimeout(() => {
                commit('decrement', params.by)
            }, params.duration)
        },
        updateValue({commit}, param) {
            commit('updateValue', param)
        }
    }
})