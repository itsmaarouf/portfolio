import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSkillsStore = defineStore('skills', () => {

    const Skills = ref([
        {
            name: "CSS",
            status: "The makeup that makes a web page pretty (even pages need a makeover sometimes!) 💅🎨.",
            img: "/image/CSS.png",
        }, {
            name: "HTML",
            status: "The bones that hold up a web page (like a skeleton, but for the internet) 🦴💻.",
            img: "/image/HTML.png",
        }, {
            name: "Scss",
            status: "The magic wand that makes styling less messy (like cleaning your room with a snap) ✨🧹.",
            img: "/image/SCSS.png",
        }
    ])

    return { Skills }
})
