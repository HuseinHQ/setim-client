<template>
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
    ...mapActions(useGameStore, ['fetchGames'])
  },
  created() {
    this.fetchGames(this.$route.query.page);
  }
}
</script>