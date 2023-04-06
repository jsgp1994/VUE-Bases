const app = Vue.createApp({
    data() {
        return {
            quote: "I'm Batman",
            author: "Bruce Wayne"
        }
    },
    methods: {
        changeQuote( ) {
            this.author = 'Fernando Herrera'
            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase()
        }
    },
})

app.mount('#myApp')