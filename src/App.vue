<template>
  <v-app id="main-color">
    <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data: () => ({
    //
  }),
};
</script>
<style lang="sass">
#main-color
  background-color: #263238

</style>
