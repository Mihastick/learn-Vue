const App = {
    data() {
        return {
            array: [
                {
                    title: 'first element',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam optio, tempora, labore quis vel illo veritatis fugiat'
                },
                {
                    title:'second element',
                    content: 'eius laborum consectetur reiciendis officia aliquam, voluptatem veniam in expedita facere illum. Voluptas suscipit tempora '
                },
                {
                    title:'third element',
                    content:' culpa quam molestiae delectus, iusto quis debitis, ullam adipisci veniam minima facere dicta amet cumque perspiciatis ut odio.'
                }
            ],
            todos: ['Совершить подвиг'],
            currentTodo: '',
            currentItem:{},
            currentIndex:0,
        }
    },
    methods: {
        addTodoItem() {
            let temp = this.currentTodo.trim();
            if(temp.length>0){
                this.todos.push(this.currentTodo);
            }
            this.currentTodo = '';
        },
        showCurrentItem(index) {
            this.currentItem = this.array[index];
        }
    },
    created(){
        this.currentItem = this.array[0];
    }
}
Vue.createApp(App).mount('#app');