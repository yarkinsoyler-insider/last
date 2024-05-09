<template>
  <div
    v-if="showSearch"
    class="fixed inset-0 z-50 overflow-auto top-24 min-h-min"
    id="searchModal"
  >
    <div class="mx-auto z-10">
      <div class="bg-white shadow-lg">
        <div class="p-4">
          <input
            type="text"
            class="w-full p-2 border border-gray-300 rounded text-black"
            v-model="searchQuery"
            placeholder="Search for Movies or TV Shows"
            @input="listenSearch"
          />
        </div>
        <div class="text-black">
          <ul>
            <li
              v-for="result in searchResults"
              :key="result.id"
              class="flex p-1 m-2 border border-grey border-1 rounded"
            >
              <NuxtLink
                class="flex"
                :to="`/${result.media_type.includes('TV') ? 'tv' : 'movie'}/${ result.id }`"
                @click="closeModal"
              >
                {{ result.title || result.name }}
                <div class="ml-2 opacity-50">
                  {{ result.media_type }}
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { searchTvShow } from '/server/api/tv';
import { searchMovie } from '/server/api/movie';

const { emit } = getCurrentInstance();
const props = defineProps({
  showSearch: {
    type: Boolean,
    default: true
  }
});

const searchQuery = ref('');
const searchResults = ref([]);

const listenSearch = async () => {
  if (searchQuery.value) {
    searchResults.value = [];

  let  movies = await searchMovie(searchQuery.value);

  movies = movies.value.results?.map((movie) => {
    movie.media_type = 'Movie';

    return movie;
  });

  let  tvShows = await searchTvShow(searchQuery.value);

  tvShows = tvShows.value.results?.map((tv) => {
    tv.media_type = 'TV Show';
    return tv;
  });

  const combinedResults = [...movies, ...tvShows];
  combinedResults.sort((a, b) => b.popularity - a.popularity);

  searchResults.value = combinedResults.slice(0, 10);
  }
};

const closeModal = () => {
  emit('update:showSearch', false);
}
</script>