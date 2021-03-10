<template>
  <div>
  <v-card
      class="px-3 blue-grey darken-4"
      flat
      outlined
      v-for="tweet in tweets"
      :key="tweet.id"
  >
    <v-row no-gutters class="pt-2">

  <v-avatar
      color="accent"
      size="45"
      class="align-self-center mb-1"
      autofocus
  > SE
  </v-avatar>

    <v-card-title style="padding: 0">
      <v-col >
        {{ tweet.user.name }}
        <p class="text-body-2" style="margin: 0"> {{ moment(tweet.created_at).calendar() }}</p>
      </v-col>
    </v-card-title>
      <v-card-text class="pb-0">
      {{tweet.body}}
      </v-card-text>
    </v-row>
    <v-card-actions >
      <v-btn icon >
        <v-icon>mdi-thumb-up</v-icon>
      </v-btn>
      <v-btn icon >
        <v-icon >mdi-thumb-down</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "post",
  data() {
    return {
      tweets: null,
      moment: moment,
    }
  },
  async mounted() {
    await this.$store.dispatch('generateCookie')
    await this.$store.dispatch('generateTimeline')
    this.tweets = this.$store.state.timeline
    console.log(this.tweets)
  }

}
</script>

<style scoped>

</style>
