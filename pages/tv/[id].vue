<template>
    <TvPageBanner :tv="tv" />
    <CastSlider :show="tv" />
</template>

<script setup>
import { fetchTvShow } from '/server/api/tv';

const route = useRoute();
const tv = await fetchTvShow(route.params.id);
</script>