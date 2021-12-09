const App = {
    data() {
        return {
            active: false,
            imgSrc: '/img/sat.jpg',
            array: [
                {
                    title: 'first',
                    content: 'first'
                },
                {
                    title: 'second',
                    content: 'second'
                },
                {
                    title: 'third',
                    content: 'third'
                }
            ],
            colorImg: [
                {
                    color: '#FF1493',
                    img: '/img/sat.jpg'
                },
                {
                    color: '#7CFC00',
                    img: '/img/sat2.jpg'
                },
                {
                    color: '#008B8B',
                    img: '/img/unnamed.jpg'
                }
            ],
            currentItem: {},
            currentIndexImg: 0,
            currentImg: {},
            currentMislya: {},
            currentZadacha: {},
            value: 20,
            square: false,
            color: '#ffffff',
            misli: [],
            line:'',
            animals: ['Слон', 'Бегемот', 'Жираф', 'Медведь'],//список игр , картинка платформа,действие по нажатию на название игры
            isError: false,
            zadachi:['read book','walk','do homework'],
            newAnimal: "",
            numbers: [10, 20],
            newMislya: "",
        }
    },
    methods: {
        activeBtn() {
            this.active = !this.active
        },
        // boxEnter() {
        //     this.isActive = true
        // },
        // boxLeave() {
        //     this.isActive = false
        // },
        imgEnter() {
            this.imgSrc = '/img/sat2.jpg'
        },
        imgLeave() {
            this.imgSrc = '/img/sat.jpg'
        },
        getRandom() {
            return ~~(Math.random() * (35 + 20)) - 20;
        },
        addNum() {
            this.numbers.push(this.getRandom());
        },
        showCurrentItem(index) {
            this.currentItem = this.array[index];
        },
        addAnimal() {
            let temp = this.newAnimal.trim();
            if (temp.length > 0) {
                this.animals.push(this.newAnimal);
                this.isError = false;
            }
            else {
                this.isError = true;
            }

            this.newAnimal = "";
        },
        setImg(index) {
            this.currentImg = this.colorImg[index];
            this.currentIndexImg = index;
        },
        addMislya() {
            this.misli.push(this.newMislya);
        },
        removeMisli(index) {
            delete this.misli[index];
        },
        zadachaDone(index) {
            this.currentZadacha = this.zadachi[index];
            if(this.currentZadacha == this.currentZadacha){
                this.line = 'line-through';
            }
            console.log(this.currentZadacha);
        }
    },
    created() {
        this.currentItem = this.array[0];
    },
    
}
Vue.createApp(App).mount('#app');