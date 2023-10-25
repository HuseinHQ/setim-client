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
          <button @click="clickHandler"
            class="rounded bg-blue text-white py-1 px-3 hover:bg-darker-blue font-semibold mt-2">Buy Game</button>
        </div>

        <div class="w-5/12">
          <div v-if="game[0]?.screenshots" class="bg-[#16161A] my-2 rounded h-[18rem] bg-cover"
            :style="{ 'background-image': `url('${game[0].screenshots[0].url}')` }">.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useGameStore } from '../stores/game';
import { mapActions, mapState } from 'pinia';

export default {
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