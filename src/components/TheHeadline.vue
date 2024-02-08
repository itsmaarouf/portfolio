<template>
  <div class="container flex flex-col flex-1 p-0">
    <div
      class="flex flex-col flex-1 gap-5 px-2 py-4 md:px-6 md:py-12 sm:py-8 sm:px-4"
    >
      <h1
        class="text-3xl tracking-[4px] text-center sm:text-4xl md:text-5xl lg:text-6xl font-black capitalize"
      >
        {{ title }}
      </h1>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
});
</script>

<style lang="scss" scoped></style>
