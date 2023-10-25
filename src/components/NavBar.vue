<template>
  <nav class="flex justify-center bg-dongker border-gray-200">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between p-4 gap-3 text-white">
      <RouterLink to="/" class="flex items-center me-7">
        <img src="/steam.svg" class="h-8 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap">SETIM</span>
      </RouterLink>
      <RouterLink to="/" :class="{ 'text-blue': $route.path === '/', underline: $route.path === '/', 'hover:text-gray': true, 'text-xl': true }">STORE</RouterLink>
      <RouterLink to="/libraries" :class="{ 'text-blue': $route.path.includes('/libraries'), underline: $route.path.includes('/libraries'), 'hover:text-gray': true, 'text-xl': true }">LIBRARY</RouterLink>
      <RouterLink to="/profile" :class="{ 'text-blue': $route.path.includes('/profile'), underline: $route.path.includes('/profile'), 'hover:text-gray': true, 'text-xl': true }">PROFILE</RouterLink>
    </div>
    <div class="self-center ml-20">
      <button @click="login" v-if="!isAuthenticated" class="text-white bg-blue w-[5rem] rounded py-1 hover:bg-darker-blue">Login</button>
      <button @click="logout" v-if="isAuthenticated" class="text-white bg-blue w-[5rem] rounded py-1 hover:bg-darker-blue">Logout</button>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router';
import { useUserStore } from '../stores/user';
import { mapWritableState } from 'pinia';

export default {
  components: { RouterLink },
  computed: {
    ...mapWritableState(useUserStore, ['isAuthenticated'])
  },
  methods: {
    logout() {
      localStorage.removeItem('access_token')
      this.isAuthenticated = false;
      this.$router.push('/login')
    },
    login() {
      this.$router.push('/login')
    }
  }
}
</script>