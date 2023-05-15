<template lang="">
    <Navbar />


    <div class="row justify-content-md-center" v-if="isLoading">
        <div class="col-3 alert-info text-center mt-5 spinner">
            Espere por favor...
            <h3 class="mt-2">
                <i class="fa fa-spin fa-sync"></i>
            </h3>
        </div>
    </div>


    <div v-else
        class="d-flex">
        <div class="col-4">
            <EntryList/>
        </div>
        <div class="col">
            <router-view></router-view>
        </div>
    </div>

</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapActions, mapState } from 'vuex'

export default {
    components: {
        Navbar: defineAsyncComponent( () => import('@/modules/daybook/components/Navbar')),
        EntryList: defineAsyncComponent( () => import('@/modules/daybook/components/EntryList'))
    },
    computed: {
        ...mapState('journal', ['isLoading'])
    },
    methods: {
        ...mapActions('journal', ['loadentries'])
    },
    created () {
        this.loadentries()
    }
}
</script>


<style scoped>
    .spinner {
        background-color: #60a5e9;
    }
</style>
