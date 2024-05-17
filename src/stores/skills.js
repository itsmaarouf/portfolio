import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSkillsStore = defineStore('skills', () => {

    const Skills = ref([
        {
            name: "CSS",
            status: "available",
            img: "/image/CSS.png",
        }, {
            name: "HTML",
            status: "available",
            img: "/image/HTML.png",
        }, {
            name: "Scss",
            status: "available",
            img: "/image/SCSS.png",
        }
    ])

    return { Skills }
})
