const { createApp } = Vue

createApp({
  data() {
    return {
        index: 0,
        todolist: [
            {
                text: "Completare gli esercizi di Boolean",
                done: false,
            },
            {
                text: "Ascoltare la musica",
                done: false,
            },
            {
                text: "Scegliere il menù di Natale",
                done: true,
            },
            {
                text: "Finire gli acquisti per i regali di Natale",
                done: false,
            },
            {
                text: "Andare a trovare la nonna",
                done: false,
            },
            {
                text: "Andare in palestra",
                done: false,
            },
            {
                text: "Preparare la cena",
                done: false,
            },
      ]
    }
},
methods: {
    aggiungiTask(){
        let nuovaTask = {
            text: this.newTask,
            done: false
        };
        this.todolist.push(nuovaTask);
        this.newTask = '';
    },
    taskFatta(index){

    }


}
}).mount('#app')