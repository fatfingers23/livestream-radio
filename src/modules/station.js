const defaultState = {
    currentStation: null,
    stationIndex: null,
    stationInSetIndex: null
};

const actions = {
    ChangeStation: ({ commit, dispatch }, station, stationIndex) => {
        commit('CHANGE_STATION', station, stationIndex);
        dispatch('LoadVideo', station.id);
    },
    PreviousStation: (context, state ) => {
        let setsVuexStore = context.rootState.sets;

        if (setsVuexStore.currentSet.name) {
            if (state.stationInSetIndex <= 0) {
                state.stationInSetIndex = state.currentSet.stations.length - 1;
            } else {
                state.stationInSetIndex--;
            }            
            context.commit('CHANGE_STATION',
                setsVuexStore.currentSet.stations[state.stationInSetIndex],
                state.stationInSetIndex
            );
        }
    }
};

const mutations = {
    CHANGE_STATION: (state, station, stationIndex) => {
        state.currentStation = station.station;
        state.stationInSetIndex = stationIndex;
    }
};

const getters = {
    currentStation: state => state.currentStation
};

export default {
    state: defaultState,
    getters,
    actions,
    mutations,
};