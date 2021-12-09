

const getRandom = (min, max) => {
    if (min > max) {
        [min, max] = [max, min];
        return ~~(Math.random() * (max - min)) + min;
    } else return ~~(Math.random() * (max - min)) + min;
}



const App = {
    data() {
        return {
            hello: 'Hello World',
            x: getRandom(10, 20),
            y: getRandom(10, 20),
            res: 0,
            countClick: 0,
            img: 'img/sat.jpg',
            chislo: 0,
            question: 0,
            week: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
            num: getRandom(1, 100),
            name: '',
            surname: '',
            email: '',
            age: '',
            activeFire: false,
        }
    },
    methods: {
        getSum() {
            this.res = this.x + this.y;
        },
        calcClick() {
            this.countClick++;
        },
        getTodayAndTomorrowDate() {
            let date = new Date();
            dateCrat = date.toLocaleDateString();
            let d1 = this.week[date.getDay()];
            let tomorrow = new Date(date.getTime() + (24 * 60 * 60 * 1000));
            let tomorrowCrat = tomorrow.toLocaleDateString();
            let d2 = this.week[tomorrow.getDay()];
            return `Сегодня ${dateCrat} ${d1}, а завтра ${tomorrowCrat} ${d2}`;
        },
        chetNechet() {
            if (this.chislo % 2 == 0) {
                alert('Четное');
            } else alert('Не четное')
        },
        Ugadayka() {
            console.log(this.num);
            localStorage.setItem('num', this.num);
            // if (this.num == this.question) {
            //     alert('Вы отгодали');
            //     localStorage.removeItem('num');
            // }
            // else alert('Вы не отгодали');
        },
        ProverkaUgadayka() {
            if (localStorage.getItem('num') < this.question) {
                alert('Меньше');
            }
            else if (localStorage.getItem('num') > this.question) {
                alert('Больше');
            }
            else if (localStorage.getItem('num') == this.question) {
                alert ('Вы отгодали');
                this.activeFire = true;
                localStorage.removeItem('num');
                setTimeout(()=>{
                    this.activeFire = false;
                },5000);
            }
        },
        Authorisation() {
            let modal = document.getElementById('modal');
            modal.style.display = 'flex';
        },
        Rel() {
            modal.style.display = 'none';
            this.name = '';
            this.surname = '';
            this.email = '';
            this.age = '';
        }
    }
}
Vue.createApp(App).mount('#app');