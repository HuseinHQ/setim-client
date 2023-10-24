<template>
  <section class="bg-setim-background h-[85vh] w-full bg-no-repeat bg-cover">
    <div class="container mx-auto w-[30rem] pt-20">
      <h1 class="mb-8 font-extrabold text-2xl text-white">Sign In</h1>
      <form class="bg-dongker px-10 py-16 rounded">
        <div class="mb-6">
          <label for="email" class="block mb-2 text-sm font-medium text-blue">SIGN IN WITH EMAIL</label>
          <input type="email" id="email"
            class="bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@flowbite.com" required>
        </div>
        <div class="mb-6">
          <label for="password" class="block mb-2 text-sm font-medium text-gray">PASSWORD</label>
          <input type="password" id="password"
            class="bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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

  export default {
    components: { SignFooter }
  }
</script>

<style>
div {
  color: #6c4ad1;
}
</style>