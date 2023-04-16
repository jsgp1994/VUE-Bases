<template>
    <h1>Counter</h1>
    <h2>Direct access: {{ $store.state.count }}</h2>
    <h2>Computed {{ countCompued }}</h2>

    <button @click="increment">+1</button>
    <button @click="incrementBy">+5</button>
    <button @click="randomInt" :disabled="isLoading">Random</button>

    <h1>Map State</h1>
    <h2>Map state {{ count }} </h2>
    <h2>Last Mutation: {{ lastMutation }}</h2>

</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
    methods: {
        increment() {
            this.$store.commit('increment')
        },
        incrementBy() {
            this.$store.commit('incrementBy', { val: 5, name: 'incrementBy' } )
        },
        /*incrementRandomInt() {
            this.$store.dispatch('incrementRandomInt')
        }*/
        //...mapActions(['incrementRandomInt'])
        ...mapActions({
            randomInt: 'incrementRandomInt'
        })
    },
    //computed: mapState(['count'])
    computed: {
        countCompued() {
            return this.$store.state.count
        },
        ...mapState(['count', 'lastMutation', 'isLoading'])
        /*...mapState({
            count: state => state.count,
            lastMutation: state => state.lastMutation
        })*/
    }
}
</script>
