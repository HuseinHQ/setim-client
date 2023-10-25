<template>
  <div class="max-w-sm bg-dongker border border-gray-200 rounded-lg shadow">
      <img class="rounded-t-lg" v-if="game.cover && game.cover.length > 0" :src="game.cover[0].url" alt="" />
    <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{{ game.name }}</h5>
      <p class="mb-3 font-normal text-gray-700" v-if="game.genres && game.genres.length > 0">{{ game.genres.map(el => el.name).join(' ') }}</p>
      <RouterLink :to="'/games/' + game.id" 
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
        Read more
        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    props: ['game'],
    components: { RouterLink }
}
</script>