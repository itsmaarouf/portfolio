import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLangsStore = defineStore('Langs', () => {

    const Langs = ref([
        {
            name: "JavaScript",
            status: "available",
        }, {
            name: "Java",
            status: "available",
        }
    ])

    return { Langs }
})
