<template>
  <v-dialog v-model="dialog" persistent max-width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-list>
        <v-list-item v-bind="attrs" v-on="on">
          <v-list-item-title>Edit tweet</v-list-item-title>
        </v-list-item>
        <v-list-item @click="deleteTweet(tweet.id)">
          <v-list-item-title>Delete tweet</v-list-item-title>
        </v-list-item>
      </v-list>
    </template>
    <v-card>
      <v-card-title class="headline justify-center">
        Edit your post
        <v-btn
            dark
            icon
            @click="dialog = false"
            absolute
            right
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-textarea
          no-resize
          rounded
          class="mx-5"
          :counter="300"
          v-model="body"
          dark
      />
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="primary" rounded @click="editTweet(tweet)">
          Submit
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  name: "menu-logged",
  props: {tweet: Object},
  data() {
    return {
      dialog: false,
      body: ''
    }
  },
  computed: {},
  methods: {
    deleteTweet(id) {
      this.$store.dispatch('generateCookie')
      this.$store.dispatch('deletePost', id)
      this.$forceUpdate();
    },
    editTweet(tweet) {
      this.$store.dispatch('generateCookie')
      this.$store.dispatch('editPost', {tweet: tweet, body: this.body})
      this.tweet.body = this.body
      this.$forceUpdate();
    },
  }
}
</script>
<style scoped>
</style>
