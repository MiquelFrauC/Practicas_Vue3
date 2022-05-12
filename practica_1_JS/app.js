const app = Vue.createApp({
    // Definir los datos, funciones y plantillas para el componente en un fichero a parte.
    //template: "<h2>Soy la plantilla</h2>"

    // Crear una función que devuelve un obleto para mostrar un dato dinámico de una variable.
    data() {
        return {
            books: [
                {title: "Name of the wind", author: "Patrick Rothfuss", img: "assets/1.jpg", isFav: false},
                {title: "The Way of Kings", author: "Brandon Sanderson", img: "assets/2.jpg", isFav: false},
                {title: "The Final Empire", author: "Brandon Sanderson", img: "assets/3.jpg", isFav: false},
            ],
            showBooks: true,
            x: 0,
            y: 0,
            url: "http://www.thenetninja.co.uk",
        }
    },

    // Crear un método para cambiar el título del libro.
    methods: {

        toggleShowBooks() {
            //Cambia el valor de 'showBooks' al contrario del que tiene actualmente.
            this.showBooks = !this.showBooks
        },

        handleEvent(event) {
            console.log(event, event.type)
        },

        handleMousemove(evento) {
            this.x = evento.offsetX
            this.y = evento.offsetY
        },
    },

    // Crear propiedades computadas.
    // Son propiedades que dependen de otros datos, estas propiedades se actualizan cuando esos datos se actualizan.
    computed: {

        // Devolver un array con los libros que tenemos agregados a favoritos.
        filteredBooks() {
            return this.books.filter((book) => book.isFav) // Si el libro tiene la propiedad 'isFav' en 'true', se mantrendrá en el nuevo array, si es 'false' no se incluirá
            
        }
    }
})

app.mount("#app")