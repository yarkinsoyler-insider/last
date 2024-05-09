<template>
  <div
    class="container space-x-12 mx-auto flex items-center justify-evenly px-6"
  >
    <ul class="flex space-x-12">
      <li v-for="item in array" :key="item.text" class="flex">
        <NuxtLink class="self-center" :to="`${item.path}`">{{
          item.text
        }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { props } = defineProps(['array'])
</script>
