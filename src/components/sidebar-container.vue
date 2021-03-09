<template>
  <nav class="mr-3">
    <v-navigation-drawer
        class="blue-grey darken-4 fill-height"
        dark
        v-model="drawer"
        app
        right
    >
      <v-list rounded>
        <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            class="pl-10"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
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
