<template>
  <div class="bg-setim-background bg-cover shadow-md">
    <h1 class="text-center py-48 text-5xl text-white">WELCOME TO SETIM</h1>
  </div>
  <div class="flex w-3/4 mx-auto justify-between mt-10">
    <p @click="prev" class="text-white text-xl hover:cursor-pointer">Previous</p>
    <p @click="next" class="text-white text-xl hover:cursor-pointer">Next</p>
  </div>
  <div class="w-3/4 mx-auto grid grid-cols-3 gap-4 my-8">
    <GameCard v-for="game in games" :key="game.id" :game="game"/>
  </div>
</template>

<script>
import GameCard from '../components/GameCard.vue';
import { mapActions, mapState } from 'pinia';
import { useGameStore } from '../stores/game';

export default {
  components: { GameCard },
  computed: {
    ...mapState(useGameStore, ['games'])
  },
  methods: {
    ...mapActions(useGameStore, ['fetchGames']),
    next() {
      const currentPage = Number(this.$route.query.page) || 1;
      const nextPage = currentPage + 1;
      this.$router.push({ query: { ...this.$route.query, page: nextPage } });
      this.fetchGames()
    },
    prev() {
      const currentPage = Number(this.$route.query.page) || 1;
      const prevPage = currentPage > 1 ? currentPage - 1 : 1;
      this.$router.push({ query: { ...this.$route.query, page: prevPage } });
      this.fetchGames()
    },
  },
  created() {
    this.fetchGames(this.$route.query.page);
  }
}
</script>