<template>
  <div id="main-content" class="container w-3/4 mx-auto mt-5">
    <LibraryCard v-for="library in libraries" :key="library.id" :library="library" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useGameStore } from '../stores/game';
import LibraryCard from '../components/LibraryCard.vue';

export default {
  components: { LibraryCard },
  computed: {
    ...mapState(useGameStore, ['libraries'])
  },
  methods: {
    ...mapActions(useGameStore, ['fetchLibraries'])
  },
  created() {
    this.fetchLibraries()
  }
}
</script>