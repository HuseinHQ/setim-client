<template>
  <nav class="flex justify-center bg-dongker border-gray-200">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between p-4 gap-2">
      <RouterLink to="/" class="flex items-center me-7">
        <img src="/steam.svg" class="h-8 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">SETIM</span>
      </RouterLink>
      <RouterLink to="/" class="text-white hover:text-gray text-xl">STORE</RouterLink>
      <RouterLink to="/" class="text-white hover:text-gray text-xl">LIBRARY</RouterLink>
      <RouterLink to="/" class="text-white hover:text-gray text-xl">ABOUT</RouterLink>
    </div>
    <div class="">
      <button class="bg-blue text-white">Login</button>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  components: { RouterLink }
}
</script>