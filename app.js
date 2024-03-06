const app = Vue.createApp({
    //template: '<h2>I am the template</h2>'
    data() {
        return {
            title: 'Star trek TNG',
            author: 'Gene Rodenberry',
            age: 67,
            showBooks: true
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        },
        toggleShowBook() {
            this.showBooks = !this.showBooks
        },
        handleEvent() {
            console.log('event')
        }
    }
})

app.mount('#app')