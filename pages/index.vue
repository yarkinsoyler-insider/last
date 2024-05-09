<template>
  <Title>TMDB</Title>

  <MainPageBanner />
  <MovieSlider v-if="topRatedMovies.length > 0 && popularMovies.length > 0" title="Movies" :show="'movie'" :topRated="topRatedMovies" :popular="popularMovies" />
  <MovieSlider v-if="topRatedTVs.length > 0 && popularTVs.length > 0" title="TV Shows" :show="'tv'" :topRated="topRatedTVs" :popular="popularTVs" />
</template>

<script setup>
import { fetchTopRatedMovies, fetchPopularMovies } from '/server/api/movie';
import { fetchTopRatedTvShows, fetchPopularTvShows } from '/server/api/tv';

const topRatedMovies = await fetchTopRatedMovies();
const popularMovies = await fetchPopularMovies();
const topRatedTVs = await fetchTopRatedTvShows();
const popularTVs = await fetchPopularTvShows();
</script>