<template>
  <div>
    <v-card
        class="px-3 blue-grey darken-4"
        outlined
        flat
        elevation="1"
    >
      <v-row no-gutters class="pt-3">
        <v-avatar
            color="accent"
            size="60"
            class="mt-1"
            autofocus
        > SE
        </v-avatar>
        <v-textarea
            no-resize
            rounded
            filled
            placeholder="What's up?"
            class="ml-3"
            :counter="300"
            dark
            v-model="body"
        />
      </v-row>
      <v-card-actions style="height: 50px;">
        <v-btn
            @click="addTweet"
            color="primary"
            elevation="7"
            right
            absolute
            class="px-6"
            rounded
            :disabled=isDisabled
        >Tweet
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "add-post",
  data() {
    return {
      body: '',
      // disabled: true
    }
  },
  computed: {
    isDisabled(){
      return this.body.length < 1;
    }
  },
  methods: {
    async addTweet() {
      await this.$store.dispatch('generateCookie')
      await this.$store.dispatch('addPost', this.body)
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
