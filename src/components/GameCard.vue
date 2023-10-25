<template>
  <div class="col-span-1 group" @click="clickHandler(game.id)">
  <div class="bg-[#16161A] rounded shadow-md h-[28rem] transform transition-transform ease-in-out duration-300 hover:scale-105">
    <div class="mb-4">
      <img :src="game.cover && game.cover[0] ? game.cover[0].url : 'fallback-image-url'" alt="Image Alt Text"
        class="w-full h-80 object-cover rounded-tl rounded-tr">
    </div>
    <div class="px-4">
      <h2 class="text-xl font-semibold text-white">{{ game.name }}</h2>
      <div class="flex gap-1 mt-auto">
        <div v-for="genre in game.genres" :key="genre.id"
          class="bg-[#72757E] px-2 text-xs text-white rounded-full h-4 self-end">{{ genre.name }}</div>
      </div>
      <p class="text-white mt-2">Price: Rp.{{ price }}</p>
    </div>
  </div>
</div>

</template>

<script>
export default {
  props: ['game'],
  data() {
    return {
      price: (Math.floor(Math.random() * 900) + 100) * 1000
    }
  },
  methods: {
    clickHandler(id) {
      this.$router.push(`/games/${id}`)
    }
  }
}
</script>