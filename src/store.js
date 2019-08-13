import Vue from 'vue';
import Vuex from 'vuex';
import setsModule from '@/modules/sets.js';
import userData from '@/modules/userData.js';
import player from '@/modules/player.js';
import station from '@/modules/station.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sets: setsModule,
    userData: userData,
    player: player,
    station: station
  }
});
