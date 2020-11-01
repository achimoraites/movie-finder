import Vue from 'vue';
import Vuex from 'vuex';

import EventBus, { ERROR } from '@/utils/eventBus';
import axios from 'axios';
import router from '../router';

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
      axios.get(`${API}?apikey=${API_KEY}&s=${title}&type=movie`)
        .then((res) => {
          if (res.data.Search) {
            commit('setMovies', res.data.Search);
            router.push('/results');
          } else {
            EventBus.$emit(ERROR, {
              message: res.data.Error,
              type: ERROR,
            });
            commit('setMovies', []);
          }
        })
        .catch((err) => {
          EventBus.$emit(ERROR, {
            message: err.message,
            type: ERROR,
          });
        });
    },
    getMovieDetails({ commit }, imdbID) {
      axios.get(`${API}?apikey=${API_KEY}&i=${imdbID}`)
        .then((res) => {
          if (res.data) {
            commit('setMovie', res.data);
          }
        }).catch((err) => {
          EventBus.$emit(ERROR, {
            message: err.message,
            type: ERROR,
          });
        });
    },
  },
});
