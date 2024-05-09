<template>
  <div class="px-6 slider bg-contain bg-no-repeat min-h-[500px]">
    <div class="flex justify-start items-center mb-4">
      <div class="px-4">
        <div class="text-2xl font-bold">{{ title }}</div>
      </div>
      <div class="flex bg-gray-300 rounded-full">
        <div
          :class="{
            'bg-gray-800 text-white': selectedOption === 'popular',
            'bg-gray-300 text-gray-700': selectedOption !== 'popular',
          }"
          class="h-max cursor-pointer rounded-full px-6 py-2"
          @click="popular"
        >
          Popular
        </div>
        <div
          :class="{
            'bg-gray-800 text-white': selectedOption === 'top-rated',
            'bg-gray-300 text-gray-700': selectedOption !== 'top-rated',
          }"
          class="h-max cursor-pointer rounded-full px-6 py-2"
          @click="topRated"
        >
          Top Rated
        </div>
      </div>
    </div>
    <div v-if="movies.length > 0">
      <div
        class="flex flex-nowrap overflow-scroll overflow-y-auto no-scrollbar gap-5 scrollbar-hide"
      >
        <MovieSliderCard
          v-for="movie in movies"
          :show="show"
          :key="movie.id"
          :movie="movie"
          :title="title"
        />
      </div>
    </div>
    <div v-else>
      <p>No movies found.</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  show: {
    type: String,
    default: () => '',
  },
  title: {
    type: String,
    default: () => '',
  },
  popular: {
    type: Array,
    default: () => [],
  },
  topRated: {
    type: Array,
    default: () => [],
  },
})

const selectedOption = ref('popular')
const movies = ref(selectedOption.value === 'popular' ? props.popular : props.topRated);

const topRated = () => {
  selectedOption.value = 'top-rated'
}

const popular = () => {
  selectedOption.value = 'popular'
}

watch(selectedOption, newValue => {
  console.log('Selected option:', newValue);
  if (newValue === 'popular') {
    movies.value = props.popular
  } else {
    movies.value = props.topRated
  }
})

onMounted(() => {
  if (selectedOption.value === 'popular') {
    movies.value = props.popular;
  } else {
    movies.value = props.topRated;
  }
})
</script>


<style>
.slider {
  background-image: url('https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg');
  background-position: 50% 150px;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
