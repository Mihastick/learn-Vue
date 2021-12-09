const App = {
    data() {
        return {
            zametki:[],
            newZametka: "",
            count:0,
        }
    },
    methods: {
        addZametka() {
            this.zametki.push(this.newZametka);
            this.count++;
        },
        removeZametka(index) {
            delete this.zametki[index];
        }
    }
}
Vue.createApp(App).mount('#app');