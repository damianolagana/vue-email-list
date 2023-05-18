const { createApp } = Vue

const ul = document.getElementById("emailList");

createApp({
    data() {
        return {
            chiave: "valore",
            emailPath: ' https://flynn.boolean.careers/exercises/api/random/mail',
            mailList: [] ,
        }
    },
    methods: {
  
    },
    mounted() {
        console.log("Mounted iniziato");

        for (let index = 1; index <= 10; index++) {
            axios.get( this.emailPath ).then((risposta) => {
            
                this.mailList.push(risposta.data.response);
                
            })  
            
            
        }

      

        console.log("Mounted terminato");
       
    }
}).mount('#app')
