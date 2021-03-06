<template>
  <nav>
      <v-app-bar-nav-icon v-show="!drawer" @click="drawer = !drawer"/>
    <v-navigation-drawer
        class="blue-grey darken-3"
        dark
        v-model="drawer"
        app
    >
      <v-list>
        <v-list-item
            v-for="item in items"
            :key="item.title"
            link
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
              @click="drawer = !drawer"
          >
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {title: 'Dashboard', icon: 'mdi-view-dashboard'},
        {title: 'Account', icon: 'mdi-account-box'},
        {title: 'Admin', icon: 'mdi-gavel'},
      ],
      drawer: true
    }
  },
}
</script>

<style scoped>

</style>
