import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSkillsStore = defineStore('skills', () => {

    const Skills = ref([
        {
            name: "CSS",
            status: "available",
            img: "/public/image/CSS.png",
        }, {
            name: "HTML",
            status: "available",
            img: "/public/image/HTML.png",
        }, {
            name: "Scss",
            status: "available",
            img: "/public/image/SCSS.png",
        }
    ])

    return { Skills }
})
