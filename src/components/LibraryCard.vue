<template>
  <div class="flex bg-[#16161A] h-48 py-3 ps-3 pe-5 rounded mb-3">
    <img :src="library.game_detail.cover.url" alt="" class="rounded-sm bg-cover">
    <div class="flex flex-col ps-3">
      <h2 class="text-white font-bold text-xl">{{ library.game_detail.name }}</h2>
      <p class="text-gray text-sm">{{ library.game_detail.summary }}</p>
      <div class="flex gap-1 mt-auto">
        <div v-for="genre in library.game_detail.genres" :key="genre.id" class="bg-[#72757E] px-2 text-xs text-white rounded-full h-4 self-end">{{ genre.name }}</div>
        <button v-if="!library.isComplete" class="bg-blue hover:bg-darker-blue text-white rounded-lg py-1 px-3 text-sm ms-auto">Mark As Complete</button>
        <button v-else class="bg-blue hover:bg-darker-blue text-white rounded-lg py-1 px-3 text-sm ms-auto">Mark As Uncomplete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['library']
}
</script>