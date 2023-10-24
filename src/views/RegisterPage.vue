<template>
  <NavBar />
  <form @submit.prevent="submitHandler">
    <label>Email address</label>
    <input v-model="email" type="email">
    <label>Username</label>
    <input v-model="username" type="username">
    <label>Password</label>
    <input v-model="password" type="password" autocomplete="current-password">
    <button type="submit">Continue</button>
    <!-- <input type="password"> -->
  </form>
</template>

<script>
import NavBar from '../components/NavBar.vue'
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
  components: { NavBar },
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