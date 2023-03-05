// const API_KEY = "c6271a40e09ec721dac0ecbdb77ccd82";
const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&langauge=en-us`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchRomance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentary: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
};

export default requests;
