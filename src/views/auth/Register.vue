<template>
  <v-container>
    <v-layout>
      <v-card
          outlined
          shaped
          elevation="2"
          class="pa-5 mx-auto mt-10"
          width="500"
      >
        <v-card-title class="justify-center">
          Create your account</v-card-title>
        <v-card-subtitle class="text-center">
          Register now and have fun later!
        </v-card-subtitle>
        <v-form>
          <v-text-field
              v-model="name"
              :error-messages="nameErrors"
              label="Name"
              :counter="30"
              required
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
          ></v-text-field>

          <v-text-field
              class=""
              v-model="email"
              :error-messages="emailErrors"
              label="E-mail"
              required
              :counter="50"
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
          ></v-text-field>
          <v-text-field
              type="password"
              class=""
              :counter="30"
              v-model="password"
              :error-messages="passwordErrors"
              label="Password"
              required
              @input="$v.password.$touch()"
              @blur="$v.password.$touch()"
          ></v-text-field>
          <v-text-field
              type="password"
              class=""
              :counter="30"
              v-model="confirmPassword"
              :error-messages="confirmPasswordErrors"
              label="Confirm password"
              required
              @input="$v.password.$touch()"
              @blur="$v.password.$touch()"
          ></v-text-field>
          <v-card-actions
              class="justify-center"
          >
            <v-btn
                class="mr-4 px-4 light-blue"
                @click="submit"
            >
              sign up
            </v-btn>
            <v-btn
                @click="clear"
                class="px-4"
            >
              clear
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-layout>
  </v-container>

  </template>

<script>
export default {
  name: "Register"
}
</script>

<style lang="sass" scoped>

</style>
