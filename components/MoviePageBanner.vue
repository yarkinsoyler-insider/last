<template>
  <div
    class="bg-cover"
    :style="{
      'background-image': `url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`,
    }"
  >
    <div class="flex mb-10 py-20 custom-bg">
      <img
        class="ml-24 rounded-2xl"
        :src="`https://image.tmdb.org/t/p/w300/${movie.poster_path}`"
        alt="Movie Poster"
      />
      <div class="flex flex-col gap-5 px-12">
        <div class="flex flex-col">
          <h1
            class="text-5xl font-bold text-white mb-2 font-sans tracking-normal"
          >
            {{ movie.title }}
          </h1>
          <div class="text-3xl text-white">{{ movie.tagline }}</div>
        </div>
        <div class="text-white">
          <p class="text-lg mb-4">{{ movie.overview }}</p>
          <p v-if="movie.credits"><strong>Director:</strong> {{ getDirector() }}</p>
          <p><strong>Released Year:</strong> {{ getReleasedYear() }}</p>
          <p><strong>Revenue:</strong> ${{ movie.revenue }}</p>
          <p><strong>Budget:</strong> ${{ movie.budget }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  movie: {
      type: Object,
      default: () => {}
    }
})

const getDirector = () => {
  console.log(props.movie.credits)
  if (props.movie.credits && props.movie.credits.crew) {
    const director = props.movie.credits.crew.find(member => member.job === 'Director');
    return director ? director.name : '-';
  }
  return '-';
};

const getReleasedYear = () => {
  if (props.movie.release_date) {
    return new Date(props.movie.release_date).getFullYear();
  }
  return '-';
};
</script>

<style>
div.custom-bg {
  background-image: linear-gradient(to right, rgb(6 44 44 / 40%) calc((50vw - 170px) - 340px), rgb(6 44 44 / 40%) 60%, rgb(6 44 44 / 60%) 100%);
}
</style>