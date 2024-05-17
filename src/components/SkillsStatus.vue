<template>
  <div>
    <div class="h-5 my-8 text-2xl text-left border-b-2 border-gray-200">
      <span class="px-5 ml-5 text-gray-400 bg-white"
        >Programming Languages</span
      >
    </div>
    <div
      v-for="skill in Skills"
      :key="skill"
      class="inline-flex flex-row w-[350px] mx-6 my-4 bg-white border shadow-sm rounded-xl"
    >
      <div class="px-4 py-3 bg-gray-100 border-b rounded-t-xl md:py-4 md:px-5">
        <h3 class="mt-1 text-lg font-bold text-gray-800">{{ skill.name }}</h3>
      </div>
      <div class="p-4 md:p-5">
        <p class="mt-2 text-gray-500">
          {{ skill.status }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSkillsStore } from "../stores/skills";

const { Skills } = useSkillsStore();
</script>

<style lang="scss" scoped></style>
