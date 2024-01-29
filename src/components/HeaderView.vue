<template>
  <nav class="p-4 bg-gray-800">
    <div class="container flex items-center justify-between mx-auto">
      <div class="flex items-center mb-4 sm:mb-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 32 32"
          class="mr-3 text-3xl text-white"
        >
          <path
            fill="currentColor"
            d="m31 16l-7 7l-1.41-1.41L28.17 16l-5.58-5.59L24 9zM1 16l7-7l1.41 1.41L3.83 16l5.58 5.59L8 23zm11.42 9.484L17.64 6l1.932.517L14.352 26z"
          />
        </svg>
        <router-link class="text-xl font-semibold text-white" to="/">{{
          fullName
        }}</router-link>
      </div>
      <div class="hidden space-x-4 md:flex">
        <router-link
          class="px-5 font-bold text-gray-100 hover:text-red-400"
          to="/skills"
          >Skills</router-link
        >
        <router-link
          class="px-5 font-bold text-gray-100 hover:text-red-400"
          to="/projects"
          >Projects</router-link
        >
        <router-link
          class="px-5 font-bold text-gray-100 hover:text-red-400"
          to="/experiences"
          >Experiences</router-link
        >
        <router-link
          class="px-5 font-bold text-gray-100 hover:text-red-400"
          to="/contact"
          >contact</router-link
        >
        <a
          class="px-5 font-bold text-gray-100 hover:text-red-400"
          href="/resume"
          target="_blank"
          rel="noopener noreferrer"
          >Resume</a
        >
      </div>
      <!-- Mobile Menu Button -->
      <div class="md:hidden">
        <button @click="toggleMobileMenu" class="text-white">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div
      v-if="isMobileMenuOpen"
      class="flex flex-col items-center mt-2 md:hidden"
    >
      <router-link class="font-mono text-gray-100" to="/">Home</router-link>
      <router-link class="font-mono text-gray-100" to="/skills"
        >Skills</router-link
      >
      <router-link class="font-mono text-gray-100" to="/projects"
        >Projects</router-link
      >
      <router-link class="font-mono text-gray-100" to="/experiences"
        >Experiences</router-link
      >
      <router-link class="font-mono text-gray-100" to="/contact"
        >Contact</router-link
      >
      <a
        class="font-mono text-gray-100"
        href="/resume"
        target="_blank"
        rel="noopener noreferrer"
        >Resume</a
      >
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isMobileMenuOpen = ref(false);
const fullName = ref("Hamza el Maarouf");

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>
