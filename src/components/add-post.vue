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
        > SE</v-avatar>
        <v-textarea
            no-resize
            rounded
            filled
            placeholder="What's up?"
            class="ml-3"
            :counter="300"
            dark
        />
      </v-row>
      <v-card-actions style="height: 50px;">
        <v-btn
            color="primary"
            elevation="7"
            right
            absolute
            class="px-6 "
            rounded
        >Tweet</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "add-post"
}
</script>

<style lang="sass" scoped>

</style>
