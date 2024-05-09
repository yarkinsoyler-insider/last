<template>
  <div class="mt-10 px-6">
    <h2 class="text-3xl font-bold bg-white pl-2 text-black mb-4 rounded-full">Cast</h2>
    <div
      class="flex gap-6 overflow-scroll overflow-y-auto no-scrollbar gap-5 scrollbar-hide overflow-hidden"
    >
      <div
        class="min-w-44 min-h-[128px]"
        v-for="castMember in show.credits?.cast"
        :key="castMember.id"
      >
        <div class="bg-white rounded-lg shadow-lg">
          <img
            :src="getCastImage(castMember.profile_path)"
            alt="Cast Member"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h3 class="text-xl font-semibold">{{ castMember.name }}</h3>
            <p class="text-gray-500">{{ castMember.character }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  show: {
      type: Object,
      default: () => {}
    }
})

const getCastImage = profilePath => {
  return profilePath
    ? `https://image.tmdb.org/t/p/w200/${profilePath}`
    : 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg'
}
</script>