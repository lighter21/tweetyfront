<template>
  <v-app>

    <router-link to="/login">Log in</router-link>
    <router-link to="/Register">Register</router-link>
    <router-view></router-view>

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
