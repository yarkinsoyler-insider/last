export async function fetchTopRatedTvShows() {
    try {
        const { data } = await useFetch(
            'https://api.themoviedb.org/3/discover/tv?api_key=348088421ad3fb3a9d6e56bb6a9a8f80&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200'
        );

        return data.value.results
    } catch (error) {
        console.error('Error fetching top rated movies:', error);
    }
}

export async function fetchPopularTvShows() {
    try {
        const { data } = await useFetch(
            'https://api.themoviedb.org/3/discover/tv?api_key=348088421ad3fb3a9d6e56bb6a9a8f80&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
        );

        return data.value.results
    } catch (error) {
        console.error('Error fetching popular movies:', error);
    }
}

export async function fetchPopularTvShowsByPage(page) {
    try {
        const { data } = await useFetch(`https://api.themoviedb.org/3/discover/tv?api_key=348088421ad3fb3a9d6e56bb6a9a8f80&include_adult=false&include_video=false&language=en-US&page=${ page }&sort_by=popularity.desc`);

        return data
    } catch (error) {
        console.error('Error fetching popular movies:', error);
    }
}

export async function fetchTvShow(id) {
    try {
        const { data } = await useFetch(`https://api.themoviedb.org/3/tv/${ id }?api_key=348088421ad3fb3a9d6e56bb6a9a8f80&append_to_response=credits,videos`);

        return data;
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

export async function searchTvShow(query) {
    try {
        const { data } = await useFetch(
            `https://api.themoviedb.org/3/search/tv?api_key=348088421ad3fb3a9d6e56bb6a9a8f80&query=${ query }`
          );

        return data;
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}