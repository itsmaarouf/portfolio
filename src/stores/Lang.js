import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLangsStore = defineStore('Langs', () => {

    const Langs = ref([
        {
            name: "JavaScript",
            status: "The superpowers that make web pages do tricks (like a superhero for your browser) ",
            img: "/image/CSS.png",
        }, {
            name: "Java",
            status: "The wizardry for building apps and games (no, it’s not coffee) 🧙‍♂️☕.",
            img: "/image/CSS.png",
        }
    ])

    return { Langs }
})
