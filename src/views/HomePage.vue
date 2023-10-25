<template>
  <GameCard v-for="game in games" :key="game.id" :game="game"/>
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
  async created() {
    await this.fetchGames(this.$route.query.page);
    console.log(this.games)
  }
}
</script>