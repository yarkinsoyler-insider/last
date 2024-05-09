<template>
  <div class="flex flex-col p-2 relative w-100">
    <a :href="`${show}/${movie.id}`">
      <img
        :src="`https://image.tmdb.org/t/p/w200/${movie.poster_path}`"
        class="min-w-[160px] mb-6 rounded-xl"
        :alt="movie.title || movie.name"
      />
    </a>
    <div class="text-base flex flex-col text-bold">
      <div class="text-base font-bold">{{ movie.title || movie.name }}</div>
      <div class="text-base text-slate-500">
        {{ movie.first_air_date || movie.release_date }}
      </div>
      <div class="movie-vote">
        {{ Number((movie.vote_average || 0).toFixed(1)) || '-' }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  show: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  movie: {
    type: Object,
    default: () => {},
  },
})
</script>