import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLibrariesStore = defineStore('Libraries', () => {

    const Libraries = ref([
        {
            name: "VueJS",
            status: "The toolkit that makes building web pages feel like magic (abracadabra, new website!) 🛠️",
            img: "/image/CSS.png",
        }, {
            name: "Vuetify",
            status: "The fashion designer for VueJS web pages (runway ready in no time) 👗💻.",
            img: "/image/CSS.png",
        }, {
            name: "Tailwindcss",
            status: "The box of colorful Lego bricks for web page styling (build it your way, brick by brick) 🧩🏗️.",
            img: "/image/CSS.png",
        }
    ])

    return { Libraries }
})
