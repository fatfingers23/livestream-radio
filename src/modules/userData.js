const defaultState = {
    stations: [],
    sets: [],
    prevVolume: 10,
    darkMode: false
};

const actions = {
    LoadLocalStorage: (context) => {
        let storedData = JSON.parse(localStorage.getItem('userData'));
        if (storedData) {
            context.commit('LOAD_LOCAL_STORAGE', storedData);
        } else {
            localStorage.setItem('userData', JSON.stringify(defaultState));
        }
    }
};

const mutations = {
    LOAD_LOCAL_STORAGE: (state, userDataFromLocalStorage) => {
        state.stations = userDataFromLocalStorage.stations;
        state.sets = userDataFromLocalStorage.sets;
        state.prevVolume = userDataFromLocalStorage.prevVolume;
        state.darkMode = userDataFromLocalStorage.darkMode;
    }
};

const getters = {
    stations: state => state.stations,
    sets: state => state.sets,
    prevVolume: state => state.prevVolume,
    darkMode: state => state.darkMode,
    userData: state => state
};

export default {
    state: defaultState,
    getters,
    actions,
    mutations,
};