<template>
  <nav
    class="flex justify-around bg-slate-900 text-white shadow text-lg px-12 py-6 min-h-24"
  >
    <HeaderNavbarLogo />
    <HeaderNavbarRegularButtonGroup :array="categoriesButtonGroup" />
    <HeaderNavbarRegularButtonGroup :array="infoButtonGroup" />
    <HeaderNavbarSearch @click="toggleSearch" />
    <SearchResultsMain v-if="showSearch" v-model:showSearch="showSearch" :showSearch="showSearch" />
  </nav>
</template>

<script setup>
const categoriesButtonGroup = [
  {
    text: 'Movies',
    path: '/movie',
  },
  {
    text: 'TV Shows',
    path: '/tv',
  },
  {
    text: 'People',
    path: '/people',
  },
]

const infoButtonGroup = [
  {
    text: 'Home',
    path: '/',
  },
  {
    text: 'About',
    path: '/about',
  },
  {
    text: 'Contact',
    path: '/contact',
  },
]

const showSearch = ref(false)

const toggleSearch = () => {
  showSearch.value = !showSearch.value
}

const closeSearch = () => {
  showSearch.value = false
}
</script>
