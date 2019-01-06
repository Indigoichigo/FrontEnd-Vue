const state = {
    counter: 0,
}

const getters = {
    doubleCounter: state => state.counter*2,
    stringCounter: state => state.counter + ' clicks',
}

const mutations = {
    increment: (state, param = 1) => state.counter += param,
    decrement: state => state.counter--,
}

const actions = {
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
}

export default {
    state,
    getters,
    mutations,
    actions
}