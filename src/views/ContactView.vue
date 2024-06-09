<template>
  <div class="container flex flex-col flex-1 p-0 mx-auto">
    <div><TheHeadline title="Contact Us" /></div>
    <div class="w-[80%] items-center m-auto">
      <p class="mb-6 text-center text-gray-700">
        Feel free to send us a message using the form below. We'll get back to
        you as soon as possible.
      </p>
      <ContactForm />
    </div>
  </div>
</template>

<script setup>
import TheHeadline from "../components/TheHeadline.vue";
import ContactForm from "../components/ContactForm.vue";
</script>
