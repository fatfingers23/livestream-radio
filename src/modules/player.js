const defaultState = {
    player: null,
    playing: false,
    volume: 100
};

const actions = {
    HandleSetPlayer: (context, player) => {
        context.commit('SET_PLAYER', player);
    },
    LoadVideo: (context, videoId) => {
        context.commit('SET_VIDEO', videoId);
    },
    StopVideo: (context) => {
        context.commit('STOP_VIDEO');
    },
    PlayVideo: (context) => {
        context.commit('PLAY_VIDEO');
    },
    PauseVideo: (context) => {
        context.commit('PAUSE_VIDEO');
    },
    HandleFootClick: ({ commit, dispatch, state }, buttonName) => {

        switch (buttonName) {
            case 'play_arrow':
                commit('TOGGLE_VIDEO');
                break;

            case 'skip_previous':
                dispatch('PreviousStation');
                //commit('PREVIOUS_STATION');
                break;

            case 'skip_next':
                this.nextStation();
                break;

            default:
                break;
        }
    }

};

const mutations = {
    SET_PLAYER: (state, player) => {
        state.player = player;
    },
    SET_VIDEO: (state, videoId) => {
        state.player.loadVideoById(videoId);
    },
    STOP_VIDEO: (state) => {
        state.playing = false;
        state.player.stopVideo();
    },
    PLAY_VIDEO: (state) => {
        state.playing = true;
        state.player.playVideo();
    },
    PAUSE_VIDEO: (state) => {
        state.playing = false;
        state.player.pauseVideo();
    },
    TOGGLE_VIDEO: (state) => {
        state.playing ? state.player.pauseVideo() : state.player.playVideo();
        state.playing = !state.playing;
    },
    PREVIOUS_STATION: (state) => {
        console.log(state.currentSet.name);
    }

};

const getters = {
    player: state => state.player,
    playing: state => state.playing,
    volume: state => state.volume
};

export default {
    state: defaultState,
    getters,
    actions,
    mutations,
};