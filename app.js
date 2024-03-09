const app = Vue.createApp({
    //template: '<h2>I am the template</h2>'
    data() {
        return {
            url: 'http://www.net.hr',
            title: 'Star trek TNG',
            author: 'Gene Rodenberry',
            age: 67,
            showBooks: true,
            x: 0,
            y: 0,
            books: [
                {title: 'Star Wars', author: 'George Lucas', age: 82, img: 'images/1.jpg'},
                {title: 'Star Trek', author: 'Gene Rodenberry', age: 88, img: 'images/2.jpg'},
                {title: 'Dune', author: 'Frank Herbert', age: 65, img: 'images/3.jpg'}
            ]
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        },
        toggleShowBook() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app')