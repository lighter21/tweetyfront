<template>
  <div>
    <v-card
        class="px-3 blue-grey darken-4"
        flat
        outlined
    >

      <v-row no-gutters class="pt-2">
        <v-menu>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                dark
                icon
                v-bind="attrs"
                v-on="on"
                absolute
                right
            >
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>

          <v-list
              v-if="tweet.user.id === this.$store.state.userData.id"
              rounded
          >
            <v-list-item :href="'#'" @click="editTweet">
              <v-list-item-title>Edit tweet</v-list-item-title>
            </v-list-item>
            <v-list-item :href="'#'" @click="deleteTweet(tweet.id)">
              <v-list-item-title>Delete tweet</v-list-item-title>
            </v-list-item>

          </v-list>


          <v-list v-else rounded>
            <v-list-item :href="'#'">
              <v-list-item-title>Hide tweet</v-list-item-title>
            </v-list-item>
            <v-list-item :href="'#'">
              <v-list-item-title>Report tweet</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-avatar
            color="accent"
            size="45"
            class="align-self-center mb-1"
            autofocus
        > SE
        </v-avatar>

        <v-card-title style="padding: 0">
          <v-col>
            {{ tweet.user.name }}
            <p class="text-body-2" style="margin: 0"> {{ moment(tweet.created_at).calendar() }}</p>
          </v-col>

        </v-card-title>
        <v-card-text class="pb-0">
          {{ tweet.body }}
        </v-card-text>
      </v-row>
      <v-card-actions>
        <v-btn icon>
          <v-icon>mdi-thumb-up</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-thumb-down</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "post",
  props: {
    tweet: Object
  },
  data() {
    return {
      moment: moment,
    }
  },
  methods: {
    deleteTweet(id) {
      this.$store.dispatch('generateCookie')
      this.$store.dispatch('deletePost', id)

    }
  }

}
</script>

<style scoped>

</style>
