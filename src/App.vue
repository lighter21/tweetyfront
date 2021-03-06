<template>
  <v-app>
    <navbar/>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

import Navbar from "@/components/navbar";

export default {
  name: 'App',

  components: {Navbar},

  data: () => ({
    //
  }),
};
</script>
<style lang="sass">
</style>
