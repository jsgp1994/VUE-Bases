<template lang="">
    <h1 v-if="!pokemon">
       Espere por favor.....
    </h1>
    <div v-else>
        <h1>¿Quién es este pokémon?</h1>
        <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
        <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer($event)"/>

        <template v-if="showAnswer">
            <h2 class="fade-in">{{ message }}</h2>
            <button @click="newGame">{{ reloadTxt }}</button>
        </template>


    </div>

</template>

<script>

import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import getPokemonOptions from '@/helpers/getPokemonOptions'


export default {
    components: {
        PokemonPicture,
        PokemonOptions
    },
    data() {
        return {
            reloadTxt: 'Reiniciar Juego',
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: ''
        }
    },
    methods: {
        async mixPokemonArray () {
            this.pokemonArr = await getPokemonOptions()
            const rndInt = Math.floor( Math.random() * 4 )
            this.pokemon = this.pokemonArr[ rndInt ]
        },
        checkAnswer (pokemonId) {
            this.showPokemon = true
            this.showAnswer = true
            this.message = this.pokemon.id === pokemonId ? `Corecto, el nombre del pokemon es ${ this.pokemon.name }` : `Oops, el nombre del pokemon era ${ this.pokemon.name }`
        },
        newGame () {
            this.pokemon = null
            this.pokemonArr = []
            this.showPokemon = false
            this.showAnswer = false
            this.mixPokemonArray()
        }
    },
    mounted () {
        this.mixPokemonArray()
    }
}
</script>