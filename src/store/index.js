import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);
const API = process.env.VUE_APP_OMD_BASE_URL;
const API_KEY = process.env.VUE_APP_OMD_API_KEY;

export default new Vuex.Store({
  state: {
    movies: [],
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = [...movies];
    },
    setMovie(state, movie) {
      state.movies = state.movies.map((m) => (m.imdbID === movie.imdbID ? movie : m));
    },
  },
  actions: {
    getMoviesByTitle({ commit }, title) {
      axios.get(`${API}?apikey=${API_KEY}&s=${title}`)
        .then((res) => {
          if (res.data && res.data.Search) {
            commit('setMovies', res.data.Search);
          }
        });
    },
    getMovieDetails({ commit }, imdbID) {
      axios.get(`${API}?apikey=${API_KEY}&i=${imdbID}`)
        .then((res) => {
          if (res.data) {
            commit('setMovie', res.data);
          }
        });
    },
  },
});
