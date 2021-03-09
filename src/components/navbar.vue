<template>
  <nav class="mr-3 " >
    <v-app-bar-nav-icon v-show="!drawer" @click="drawer = !drawer"/>
    <v-navigation-drawer
        class="fill-height blue-grey darken-4"
        dark
        v-model="drawer"
    >
      <template v-slot:prepend>
        <v-list-item two-line class="pl-10">
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ User.name }}</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-list rounded>
        <v-list-item
            v-for="item in items"
            :key="item.title"
            :href="item.to"
            class="pl-10"
            router :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
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
import axios from "axios";

export default {
  data() {
    return {
      items: [
        {title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/dashboard'},
        {title: 'login', icon: 'mdi-account-box', to: '/login'},
        {title: 'Register', icon: 'mdi-gavel', to: '/register'},
        {title: 'Logout test', icon: 'mdi-gavel', to: '/'}
      ],
      drawer: true,
      User: null,
    }
  },
  mounted() {
    this.User = this.$store.state.User;
  },
  computed: {
    ...mapMutations(['clearUserData', 'setLoginStatus']),
    ...mapActions(['getCookie'])
  },
  methods: {
    logout() {
      this.$store.dispatch('getCookie').then(() => {
        axios.post(`${this.$store.state.API}/api/logout`)
            .then(() => {
              this.$store.commit('clearUserData');
              this.$store.commit('setLogoutStatus');
              console.log(this.$store.state.User);
              console.log(this.$store.state.Logged);
              this.$router.push('/login');
            })
      }).catch(error => {
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>

</style>
