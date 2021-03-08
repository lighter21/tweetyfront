<template>
  <v-card
      class="px-3 blue-grey darken-4"
      width="650"
      flat
      outlined
  >
    <v-row no-gutters class="pt-3">
      <v-avatar
          color="accent"
          size="50"
          class="mt-1"
          autofocus
      > SE
      </v-avatar>
      <v-card-title>
        Patryk Skwara
      </v-card-title>
      <v-card-text

      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aspernatur atque corporis deleniti eaque expedita hic incidunt iste laboriosam, laudantium minima modi porro quas reiciendis saepe vero. Cumque, omnis!
      </v-card-text>
    </v-row>
    <v-card-actions style="height: 50px;">
      <v-btn
          color="primary"
          elevation="7"
          right
          absolute
          class="px-6 "
          rounded
      >Like
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "post"
}
</script>

<style scoped>

</style>
