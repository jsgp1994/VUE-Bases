<template lang="">
    <div>
        <h2>{{ customTitle }}</h2>
        <p data-testid="counter"> {{ counter }} </p>
        <p> {{ counter }} <sup>2</sup> = {{ squareCounter }} </p>

        <div>
            <button @click="managementCounter('add')">+1</button>
            <button data-test-btn="btn-decrease" @click="managementCounter('delete')">-1</button>
        </div>

    </div>
</template>

<script>
export default {
    props:{
        'title': String,
        'start': {
            type: Number,
            //required: true
            default: 100,
            validator( value ) {
                return value > 0
            }
        }
    },
    data() {
        return {
            counter: this.start
        }
    },
    methods: {
        getSquareValue () {
            return this.counter * this.counter
        },
        managementCounter (type) {
            return type === 'add'? this.counter++ : this.counter--
        }
    },
    computed: {
        squareCounter () {
            return this.counter * this.counter
        },
        customTitle () {
            return this.title || 'Counter'
        }
    }
}
</script>

<style scoped>
    button {
        background-color: #64BB87;
        border-radius: 5px;
        border: 1px solid white;
        color: white;
        cursor: pointer;
        margin: 0 5px;
        padding: 5px 15px;
        transition: 0.3s ease-in-out;
    }

    button:hover{
        background-color: #5aa67b;
        transition: 0.3s ease-in-out;
    }

</style>