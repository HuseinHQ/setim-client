<template>
  <div id="main-content" class="container w-3/4 mx-auto">
    <div class="bg-blue h-8 rounded mt-10"></div>
    <div class="my-4">
      <p class="text-sm text-gray mt-8">All Games > {{ game && game[0] && game[0].genres && game[0].genres[0] &&
        game[0].genres[0].name }} Games > {{ game && game[0] && game[0].name }}</p>
      <h1 class="text-3xl text-white font-extrabold mb-8">{{ game[0]?.name }}</h1>
      <div class="flex gap-3">
        <div class="w-7/12">
          <div class="bg-[#16161A] my-2 rounded h-[25rem] bg-cover" :style="{
            'background-image': game[0]?.cover && game[0].cover[0]?.url ? `url('${game[0].cover[0].url}')` : 'none'
          }"></div>
          <div v-if="game[0]?.screenshots" class="flex gap-2">
            <div v-for="screenshot in game[0].screenshots" :key="screenshot.id"
              class="bg-[#16161A] rounded w-56 h-24 bg-cover" :style="{ 'background-image': `url('${screenshot.url}')` }">
            </div>
          </div>
          <div class="bg-slate-600 rounded relative h-24 my-5">
            <h1 class="pl-5 pt-3 text-white text-xl">Buy {{ game[0]?.name }}</h1>
            <p class="pl-5 text-gray">SPECIAL PROMOTION! Offer ends 7 November</p>
            <div class="flex absolute right-5 -bottom-10 bg-slate-950 w-fit items-center gap-1 p-1 rounded my-5">
              <div class="rounded-xs bg-[#16161A] text-green-500 py-2 px-4">Rp.{{ price }}</div>
              <button @click="clickHandler" class="rounded bg-green-500 text-white hover:bg-green-700 py-2 px-4">Buy Game</button>
            </div>
          </div>
        </div>

        <div class="w-5/12">
          <div v-if="game[0]?.screenshots" class="bg-[#16161A] my-2 rounded h-[18rem] bg-cover"
            :style="{ 'background-image': `url('${game[0].screenshots[0].url}')` }"></div>
          <p class="text-sm text-slate-300 mb-2">{{  game[0].summary }}</p>
          <h2 class="text-sm text-slate-500">RATING</h2>
          <h2 class="text-sm text-slate-500 mb-2">RATING COUNT</h2>
          <h2 class="text-sm text-slate-500">RELEASE DATE</h2>
          <h2 class="text-sm text-slate-500 mb-2">RATING COUNT</h2>
          <h2 class="text-sm text-slate-500 mb-1">Popular user-defined tags for this product:</h2>
          <div class="flex gap-1 mt-auto">
            <div v-for="genre in game[0].genres" :key="genre.id" class="bg-[#72757E] px-2 py-1 text-xs text-white rounded-sm self-end">{{ genre.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useGameStore } from '../stores/game';
import { mapActions, mapState } from 'pinia';

export default {
  data() {
    return {
      price: (Math.floor(Math.random() * 900) + 100) * 1000
    }
  },
  computed: {
    ...mapState(useGameStore, ['game', 'transactionToken'])
  },
  methods: {
    ...mapActions(useGameStore, ['fetchGameById', 'generateMidTransToken', 'createLibrary']),
    async clickHandler() {
      await this.generateMidTransToken();
      console.log(this.transactionToken)
      const GameId = this.$route.params.id
      const cb = this.createLibrary
      const push = this.$router.push
      window.snap.pay(this.transactionToken, {
        onSuccess: async function () {
          await cb(GameId)
          push('/libraries')
        },
      })
    }
  },
  created() {
    this.fetchGameById(this.$route.params.id)
  },
}
</script>

<style>
body {
  background-color: #242629;
}
</style>