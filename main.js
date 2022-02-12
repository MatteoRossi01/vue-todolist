const app = new Vue (

    {
        el: '#root',

        data: {

            /* Creao un array di oggetti dove pushare i to-do */
            todoItems: [],

            /* Testo del to-do */    
            todoText: '',
    
        },

        methods : {

            /* Funzione per aggiungere il to-do */
            newTodo(){

                if (this.todoText == '') {

                    alert('Non hai inserito alcun to-do!')

                } else {

                    this.todoItems.push({
                        text: this.todoText,
                    }) 

                }
                this.todoText ='';
            },

            /* Funzione per rimuovere il to-do*/ 
            removeTodo(index) {
                this.todoItems.splice(index, 1);
            },

        },
    }
);