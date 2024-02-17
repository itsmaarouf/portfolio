<template>
  <div class="container flex flex-col flex-1 p-0 mx-auto">
    <div><TheHeadline title="Resume" /></div>
    <div class="flex-1 gap-5 col">
      <div class="flex justify-center mt-5">
        <button
          disabled="disabled"
          class="p-1 px-4 py-1 border-2 cursor-pointer rounded-2xl"
        >
          no CV at the moment.
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheHeadline from "../components/TheHeadline.vue";
</script>
