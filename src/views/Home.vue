<template>
  <CurrentlyPlaying
    :currentSet="currentSet"
    :currentStation="currentStation"
    :userData="userData"
    @changeStation="changeStation"
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
    ...mapGetters(['currentSet', 'currentStation', 'userData'])
  }
};
</script>