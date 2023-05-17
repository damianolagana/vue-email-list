const { createApp } = Vue

createApp({
    data() {
        return {
            chiave: "valore",
            emailPath: ' https://flynn.boolean.careers/exercises/api/random/mail',
        }
    },
    methods: {
        metodo() {
            console.log("metodo che stampa un dato: ", this.chiave);
        }
    },
    mounted() {
        console.log("Mounted iniziato");

        axios.get( this.emailPath ).then((risposta) => {
            // debugger;
            this.risposta = risposta.data.response;
            console.log(risposta);
        })  

        console.log("Mounted terminato");
    }
}).mount('#app')
