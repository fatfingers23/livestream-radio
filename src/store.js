import Vue from 'vue';
import Vuex from 'vuex';
import setsModule from '@/modules/sets.js';
import userData from '@/modules/userData.js';
import player from '@/modules/player.js';
import station from '@/modules/station.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  actions:{
    SetCurrentViewName:({commit}, viewPathName) => {
      commit('SET_VIEW_PATH_NAME', viewPathName);
    }
  },
  state:{
    currentViewPathName: 'Home'
  },
  getters:{
    currentViewPathName: state => state.currentViewPathName
  },
  mutations: {
    SET_VIEW_PATH_NAME: (state, viewPathName) =>{
      state.currentViewPathName = viewPathName;
    }
  },
  modules: {
    sets: setsModule,
    userData: userData,
    player: player,
    station: station
  }
});

export default store;