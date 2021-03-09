<template>
  <nav class="mr-3 ">
    <v-app-bar-nav-icon v-show="!drawer" @click="drawer = !drawer"/>
    <v-navigation-drawer
        class="fill-height blue-grey darken-4"
        dark
        v-model="drawer"
        app
    >
      <template v-slot:prepend>
        <v-list-item two-line class="">
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-if="user">{{ user.name }}</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-list rounded>
        <v-list-item
            v-for="item in items"
            :key="item.title"
            :href="item.to"
            router :to="item.to"
            class="align-content-center text-xl-body-2"
        >
          <v-list-item-icon>
            <v-icon c>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn
              block
              rounded
              @click="logout"
          >
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </nav>
</template>
<script>
import {mapActions, mapMutations} from "vuex";

export default {
  data() {
    return {
      items: [
        {title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/dashboard'},
        {title: 'Explore', icon: 'mdi-compass', to: '#'},
        {title: 'Notifications', icon: 'mdi-bell', to: '#'},
        {title: 'More', icon: 'mdi-dots-horizontal-circle', to: '#'}
      ],
      drawer: true,
      user: null,
    }
  },
   async mounted() {
    await this.$store.dispatch('generateCookie');
    await this.$store.dispatch('findUser');
    this.user = this.$store.state.userData;
 },
  computed: {
    ...mapMutations(['clearUserData', 'setLoginStatus']),
    ...mapActions(['generateCookie'])
  },
  methods: {
    async logout() {
      await this.$store.dispatch('generateCookie');
      await this.$store.dispatch('logout');
      await this.$router.push('/login');
    },
  },
}
</script>

<style scoped>

</style>
