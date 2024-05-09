<template>
  <div class="py-20 banner bg-cover mb-10">
    <div class="flex m-auto flex flex-col gap-5 px-12">
      <div class="flex flex-col">
        <h1
          class="text-5xl font-bold text-white mb-2 fons-sans tracking-normal"
        >
          Welcome.
        </h1>
        <div class="text-3xl text-white">
          Millions of movies, TV shows and people to discover. Explore now.
        </div>
      </div>

      <div class="flex items-center relative pt-5 mt-4">
        <input
          type="text"
          class="w-full rounded-full py-4 px-6 focus:outline-none text-lg"
          placeholder="Search for a movie, tv show, person......"
        />
        <div class="flex absolute right-0">
          <div
            class="rounded-full px-6 py-4 hover:text-blue-800 text-white text-lg bg-cyan-400 cursor-pointer button"
          >
            Search
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.banner {
  background-image: url('https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/xpba0Dxz3sxV3QgYLR8UIe1LAAX.jpg');
}
</style>