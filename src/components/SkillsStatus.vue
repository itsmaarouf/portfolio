<template>
  <div class="flex h-10">
    <a
      v-for="skill in Skills"
      :key="skill"
      href="#"
      class="flex-row items-center w-64 mx-5 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
    >
      <img
        class="object-cover w-full h-10 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        :src="skill.img"
        alt=""
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {{ skill.name }}
        </h5>
        <p class="mb-3 font-normal text-gray-700">
          {{ skill.status }}
        </p>
      </div>
    </a>
  </div>
</template>

<script setup>
import { useSkillsStore } from "../stores/skills";

const { Skills } = useSkillsStore();
</script>

<style lang="scss" scoped></style>
