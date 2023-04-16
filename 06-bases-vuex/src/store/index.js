import { createStore } from 'vuex'
import getRandomInt from '@/helper/getRandomInt'

export default createStore({
    state: {
        count: 1,
        lastMutation: 'none',
        isLoading: false,
        lastRandomInt: 0
    },
    mutations: {
        increment( state ) {
            state.count++
            state.lastMutation = 'increment'
        },
        incrementBy( state, objtect ) {
            const { val, name } = objtect
            state.count += val
            state.lastMutation = `${name} ${val}`
            state.lastRandomInt = val
        },
        setLoading( state, value) {
            state.isLoading = value
        }
    },
    actions: {
        async incrementRandomInt( { commit } ) {
            commit('setLoading', true)
            const randomInt = await getRandomInt()
            commit('incrementBy', { val: randomInt, name: 'incrementBy' } )
            commit('setLoading', false)
        }
    }
})