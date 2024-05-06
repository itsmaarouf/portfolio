import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLibrariesStore = defineStore('Libraries', () => {

    const Libraries = ref([
        {
            name: "VueJS",
            status: "available",
        }, {
            name: "Vuetify",
            status: "available",
        }, {
            name: "Tailwindcss",
            status: "available",
        }
    ])

    return { Libraries }
})
