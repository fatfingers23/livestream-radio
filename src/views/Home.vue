<template>
<CurrentlyPlaying
        v-show="view === 'home'"
        key="home"
        :currentSet="currentSet"
        :currentStation="currentStation"
        :userData="userData"
        @setPlayer="handleSetPlayer"
        @changeStation="changeStation"
        @deleteStation="deleteStation"
        @addToSet="addToSet"
        @removeFromSet="removeFromSet"
        @youtubeTogglePlayPause="togglePlayPauseButton">
</CurrentlyPlaying>
</template>
<script>
import CurrentlyPlaying from '@/components/CurrentlyPlaying'

export default {
  name:'home',
  components:{
    CurrentlyPlaying
  },
  props: {
    userData: Object,
    currentSet: Object,
    currentStation: Object
  },
}
</script>