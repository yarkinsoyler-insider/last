<template>
  <div
    class="bg-cover"
    :style="{
      'background-image': `url(https://image.tmdb.org/t/p/w1280/${tv.backdrop_path})`,
    }"
  >
    <div class="flex mb-10 py-20 custom-bg">
      <img
        class="ml-24 rounded-2xl"
        :src="`https://image.tmdb.org/t/p/w300/${tv.poster_path}`"
        alt="TV Show Poster"
      />
      <div class="flex flex-col gap-5 px-12">
        <div class="flex flex-col">
          <h1
            class="text-5xl font-bold text-white mb-2 font-sans tracking-normal"
          >
            {{ tv.name }}
          </h1>
          <div class="text-3xl text-white">{{ tv.tagline }}</div>
        </div>
        <div class="text-white">
          <p class="text-lg mb-4">{{ tv.overview }}</p>
          <p><strong># of Seasons:</strong> {{ tv.number_of_seasons || '-' }}</p>
          <p><strong># of Episodes:</strong> {{ tv.number_of_episodes }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  tv: {
    type: Object,
    default: () => {},
  }
})
</script>

<style>
div.custom-bg {
  background-image: linear-gradient(to right, rgb(6 44 44 / 40%) calc((50vw - 170px) - 340px), rgb(6 44 44 / 40%) 60%, rgb(6 44 44 / 60%) 100%);
}
</style>