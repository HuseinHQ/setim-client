<template>
  <section class="bg-setim-background h-[85vh] w-full bg-no-repeat bg-cover">
    <div class="container mx-auto w-[30rem] pt-20">
      <h1 class="mb-8 font-extrabold text-2xl text-white">Sign In</h1>
      <form @submit.prevent="submitHandler" class="bg-dongker px-10 py-16 rounded">
        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium text-blue">SIGN IN WITH USERNAME</label>
          <input type="text" v-model="username" autocomplete="username"
            class="bg-white border border-gray-300 text-black text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Zense" required>
        </div>
        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium text-gray">PASSWORD</label>
          <input type="password" v-model="password" autocomplete="current-password"
            class="bg-white border border-gray-300 text-black text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required>
        </div>
        <div class="flex justify-center">
          <button type="submit"
            class="text-white bg-blue hover:bg-darker-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm sm:w-auto px-5 py-2.5 text-center"
            style="width: 14rem;">Sign In</button>
        </div>
      </form>
    </div>
  </section>
  <SignFooter />
</template>

<script>
import SignFooter from '../components/SignFooter.vue'
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
  components: { SignFooter },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(useUserStore, ['login']),
    async submitHandler() {
      const data = await this.login(this.username, this.password)
      if (data.access_token) {
        localStorage.access_token = data.access_token
        this.$router.push('/')
        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        })
      } else {
        console.log(data.response)
        Toast.fire({
          icon: 'error',
          title: data.response.data.message
        })
      }
    }
  }
}
</script>

<style>
div {
  color: #6c4ad1;
}
</style>