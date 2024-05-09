<template>
  <div class="px-8 py-10 h-full">
    <div class="mb-5 px-2">
      <h1 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">Popular Movies</h1>
    </div>
    <div class="flex">
        <div class="flex flex-col w-1/5  h-full">
            <div class="sorting-section px-2">
                <div class="h-full">
                    <h2 class="text-lg font-semibold bg-gray-200">Sort</h2>
                    <select v-model="selectedSortOption" class="mt-2 p-2 border border-gray-300 rounded-md">
                        <option value="none" disabled selected>Select sorting option</option>
                        <option value="alphabeticAscending">Alphabetic (A-Z)</option>
                        <option value="alphabeticDescending">Alphabetic (Z-A)</option>
                        <option value="ratingAscending">Rating (Low to High)</option>
                        <option value="ratingDescending">Rating (High to Low)</option>
                    </select>
                </div>
            </div>
            <div class="filter-section px-2">
                <div class="h-full bg-gray-200">Filter</div>
            </div>
        </div>
      <div class="flex justify-center align-center flex-col product-list w-4/5 px-2">
        <div class="flex flex-wrap justify-center align-center">
            <div v-for="movie in allMovies" :key="movie.id" class="flex flex-col p-px relative">
                <a :href="`movie/${movie.id}`">
                    <img :src="movie.poster_path ? `https://image.tmdb.org/t/p/w200/${ movie.poster_path }` : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'" class="min-w-[160px] mb-6 rounded-xl" :alt="movie.title || movie.name" />
                </a>
                <div class="text-base flex flex-col text-bold min-h-24 max-w-[200px]">
                    <div class="text-base font-bold movie-title">{{ movie.title || movie.name }}</div>
                    <div class="text-base text-slate-500">{{ movie.first_air_date || movie.release_date }}</div>
                    <div class="movie-vote">{{ Number((movie.vote_average || 0).toFixed(1)) || '-' }}</div>
                </div>
            </div>
        </div>
        <div class="flex justify-center align-center mt-4">
            <button class="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm" @click="loadMore">Load more</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { fetchPopularMoviesByPage } from '/server/api/movie';

const allMovies = ref([]);
const currentPage = ref(1);
const totalPages = ref(1);
const selectedSortOption = ref('none');

try {
  const fetchedMovies = await fetchPopularMoviesByPage(currentPage.value);
  allMovies.value = fetchedMovies.value.results;
  totalPages.value = fetchedMovies.value.total_pages;
} catch (error) {
  console.error('Error fetching movies:', error);
}

const loadMore = async () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;

    const nextPageItems = await fetchPopularMoviesByPage(currentPage.value);

    allMovies.value = allMovies.value.concat(nextPageItems.value.results);

    sortMovies();
  }
};

const sortMovies = () => {
  switch (selectedSortOption.value) {
    case 'alphabeticAscending':
      allMovies.value.sort();
      break;
    case 'alphabeticDescending':
      allMovies.value.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case 'ratingAscending':
      allMovies.value.sort((a, b) => a.vote_average - b.vote_average);
      break;
    case 'ratingDescending':
      allMovies.value.sort((a, b) => b.vote_average - a.vote_average);
      break;
    default:
      break;
  }
};

watch(selectedSortOption, sortMovies);
</script>

<style scoped>
.filter-section {
  /* Adjust the height of the filter section as needed */
  min-height: 500px;
}

.product-list {
  /* Adjust the width of the product list section as needed */
  min-width: calc(80% - 50px); /* 50px accounts for the filter section width */
}

.movie-title {
  white-space: normal;
}
</style>
