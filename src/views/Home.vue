<template>
  <CurrentlyPlaying
    :currentStation="currentStation"
    @deleteStation="deleteStation"
    @addToSet="addToSet"
    @removeFromSet="removeFromSet"
    @youtubeTogglePlayPause="togglePlayPauseButton"
  ></CurrentlyPlaying>
</template>
<script>
import { mapGetters } from 'vuex';
import CurrentlyPlaying from '@/components/CurrentlyPlaying';

export default {
  name: 'home',
  components: {
    CurrentlyPlaying
  },

  computed: {
    ...mapGetters(['currentStation', 'userData'])
  }
};
</script>