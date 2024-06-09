<template>
  <form @submit.prevent="handleSubmit" class="mb-10">
    <div class="mb-4">
      <label for="name" class="block mb-2 text-sm font-bold text-gray-700">
        Name
      </label>
      <input
        v-model="name"
        type="text"
        id="name"
        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        required
      />
    </div>
    <div class="mb-4">
      <label for="email" class="block mb-2 text-sm font-bold text-gray-700">
        Email
      </label>
      <input
        v-model="email"
        type="email"
        id="email"
        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        required
      />
    </div>
    <div class="mb-6">
      <label for="message" class="block mb-2 text-sm font-bold text-gray-700">
        Message
      </label>
      <textarea
        v-model="message"
        id="message"
        rows="6"
        class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        required
      ></textarea>
    </div>
    <div class="flex items-center justify-between">
      <button
        type="submit"
        class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
      >
        Send Message
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const message = ref("");

const handleSubmit = (event) => {
  event.preventDefault();
  alert("Your message has been sent! Thank you for contacting us.");
  name.value = "";
  email.value = "";
  message.value = "";
};
</script>

<style scoped></style>
