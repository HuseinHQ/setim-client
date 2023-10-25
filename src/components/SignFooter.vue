<template>
  <footer class="flex justify-center h-[18vh] bg-dongker items-center gap-3">
    <div>
      <h1 class=" text-3xl text-white font-extrabold mb-2">New To Setim?</h1>
      <RouterLink to="/register"><p class="w-full p-1 bg-blue rounded text-white hover:bg-darker-blue text-center">Create an account</p></RouterLink>
    </div>
    <div>
      <p class="text-gray w-56 text-center">It's free and easy. Discover thousands of games to play with millions of new friends.</p>
    </div>
  </footer>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
  components: { RouterLink }
}
</script>