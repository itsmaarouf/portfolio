<template>
  <header class="fixed z-50 w-full p-4 text-white bg-gray-800">
    <div class="container mx-auto text-center sm:text-left">
      <h1 class="text-3xl font-bold">{{ fullName }}</h1>
      <nav class="mt-2">
        <a href="#about" class="px-2 text-gray-300 hover:text-white"
          >About Me</a
        >
        <a href="#projects" class="px-2 text-gray-300 hover:text-white"
          >Projects</a
        >
        <a href="#skills" class="px-2 text-gray-300 hover:text-white">Skills</a>
        <a href="#resume" class="px-2 text-gray-300 hover:text-white">Resume</a>
        <a href="#contact" class="px-2 text-gray-300 hover:text-white"
          >Contact</a
        >
        <a
          href="https://github.com/itsmaarouf/portfolio"
          class="px-2 text-gray-300 hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repository</a
        >
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const fullName = ref("Hamza el Maarouf");
</script>
