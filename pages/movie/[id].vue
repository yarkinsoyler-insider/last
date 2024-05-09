<template>
    <MoviePageBanner :movie="movie" />
    <CastSlider :show="movie" />
</template>

<script setup>
import { fetchMovie } from '/server/api/movie';

const route = useRoute();
const movie = await fetchMovie(route.params.id);
</script>