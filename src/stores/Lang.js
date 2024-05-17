import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLangsStore = defineStore('Langs', () => {

    const Langs = ref([
        {
            name: "JavaScript",
            status: "available",
            img: "/image/CSS.png",
        }, {
            name: "Java",
            status: "available",
            img: "/image/CSS.png",
        }
    ])

    return { Langs }
})
