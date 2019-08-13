<template>
  <div class="app-bars">
    <v-app-bar app clipped-left clipped-right>
      <div class="app-bar-heading">
        <span class="font-weight-medium">Livestream</span>
        <span class="blue--text">Radio</span>
      </div>
      <v-btn icon @click="toggleDarkMode">
        <v-icon v-if="!darkMode">wb_sunny</v-icon>
        <v-icon v-else>brightness_3</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      app
      :color="backgroundColor"
      floating
      clipped
      permanent
      height="200"
      width="100"
    >
      <div class="navbar-left">
        <div class="navbar-left__item" v-for="(item, i) in views" :key="i">
          <router-link :to="item.route" style="text-decoration: none;">
            <div class="navbar-left__icon">
              <v-icon
                :color="item.name.toUpperCase() === currentViewPathName.toUpperCase() ? 'blue' : ( darkMode ? 'white' : 'black')"
              >{{item.icon}}</v-icon>
            </div>
            <div
              class="navbar-left__text"
              :class="item.name.toUpperCase() === currentViewPathName.toUpperCase() ? 'blue--text' : ( darkMode ? 'white--text' : 'black--text')"
            >{{item.name}}</div>
          </router-link>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppBars',
  props: {
    view: String,
    backgroundColor: String
  },
  data: () => ({
    views: [
      {
        name: 'home',
        icon: 'home',
        route: '/'
      },
      {
        name: 'sets',
        icon: 'library_music',
        route: '/sets'
      }
    ],
    darkMode: false
  }),
  computed: {
    ...mapGetters(['currentViewPathName'])
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      this.$emit('toggleDarkMode', this.darkMode);
    }
  },
  beforeMount() {
    this.darkMode = this.$vuetify.theme.dark;
  }
};
</script>

<style scoped lang='scss'>
.app-bar-heading {
  width: 100%;
  text-align: center;
  font-size: 1.3rem;
}

//navbar left styling
.navbar-left {
  display: flex;
  flex-wrap: wrap;

  &__item {
    flex: 0 1 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    font-size: 12px;
    color: black;

    &:hover {
      cursor: pointer;
    }

    & * {
      text-align: center;
      flex: 0 1 100%;
    }
  }
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>