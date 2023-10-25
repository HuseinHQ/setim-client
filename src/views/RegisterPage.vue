<template>
  <h1 class="text-center text-white text-3xl tracking-widest font-light mt-20 mb-8">CREATE YOUR ACCOUNT</h1>
  <form @submit.prevent="submitHandler" class="w-1/4 mx-auto">
    <div class="flex flex-col mb-5">
      <label class="text-slate-400 mb-2">Email address</label>
      <input v-model="email" type="email" class="h-10 px-2 text-slate-300 rounded shadow-sm bg-[#16161A] focus:outline-none focus:ring-blue">
    </div>
    <div class="flex flex-col mb-5">
      <label class="text-slate-400 mb-2">Username</label>
      <input v-model="username" type="text" class="h-10 px-2 text-slate-300 rounded shadow-sm bg-[#16161A] focus:outline-none focus:ring-blue">
    </div>
    <div class="flex flex-col mb-5">
      <label class="text-slate-400 mb-2">Password</label>
      <input v-model="password" type="password" class="h-10 px-2 text-slate-300 rounded shadow-sm bg-[#16161A] focus:outline-none focus:ring-blue">
    </div>
    <button class="bg-blue text-white hover:bg-darker-blue rounded px-4 py-2" type="submit">Continue</button>
  </form>
</template>

<script>
import { mapActions } from 'pinia';
import { useUserStore } from '../stores/user'
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

export default {
  data() {
    return {
      email: '',
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(useUserStore, ['register']),
    async submitHandler() {
      const data = await this.register(this.email, this.username, this.password)
      if (data.access_token) {
        localStorage.access_token = data.access_token
        this.$router.push('/')
        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        })
      } else {
        Toast.fire({
          icon: 'error',
          title: data.response.data.message
        })
      }
    }
  }
}
</script>