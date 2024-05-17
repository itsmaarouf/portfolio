import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLibrariesStore = defineStore('Libraries', () => {

    const Libraries = ref([
        {
            name: "VueJS",
            status: "available",
            img: "/image/CSS.png",
        }, {
            name: "Vuetify",
            status: "available",
            img: "/image/CSS.png",
        }, {
            name: "Tailwindcss",
            status: "available",
            img: "/image/CSS.png",
        }
    ])

    return { Libraries }
})
