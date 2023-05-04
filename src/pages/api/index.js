import axios from "axios";

// api for most popular movies now
export const getData = async () => {
    const key = process.env.TMDB_SECRET_KEY
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=pl-US&page=1`;
    try {
        const response = await axios.get(URL);
        return response.data;
    } catch (err) {
        console.log(err)
    }

}

// api for most rated tv series
export const getTvData = async () => {
    const key = process.env.TMDB_SECRET_KEY
    const URL = `https://api.themoviedb.org/3/discover/tv?api_key=${key}&language=pl-US&sort_by=vote_average.desc&vote_count.gte=1000&page=1`;
    try {
        const response = await axios.get(URL);
        return response.data;
    } catch (err) {
        console.log(err)
    }
}

// api for movies or tv series based on keyword (query)
export const getByQuery = async (query) => {
    const key = process.env.TMDB_SECRET_KEY
    const URL = `https://api.themoviedb.org/3/search/multi?api_key=${key}&language=pl-US&query=${query}&include_adult=false`;
    try {
        const response = await axios.get(URL);
        const data = await response.data;
        return data.results;
    } catch (err) {
        console.log(err)
    }
}