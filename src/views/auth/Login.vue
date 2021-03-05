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
        <v-card-title class="justify-center">Log in</v-card-title>
        <v-card-subtitle class="text-center">
          Log in and have some fun!
        </v-card-subtitle>
        <v-form>
          <v-text-field
              class=""
              v-model="email"
              :error-messages="emailErrors"
              label="E-mail"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
          ></v-text-field>
          <v-text-field
              type="password"
              class=""
              v-model="password"
              :error-messages="passwordErrors"
              label="Password"
              required
              @input="$v.password.$touch()"
              @blur="$v.password.$touch()"
          ></v-text-field>

          <v-card-actions
              class="justify-center"
          >
            <v-btn
                block
                color="primary"
                @click="submit"
            >
              Log In
            </v-btn>
          </v-card-actions>
          <v-card-actions
            class="justify-center"
          >
            <router-link
                to="/forgot-password"
                class="mx-2 text-decoration-none"
            >
              Forgot password</router-link>
            ·
            <router-link
                to="/register"
                class="mx-2 text-decoration-none"
            >
              Sign up
            </router-link>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data()
  {
    return {
      password: ''
    }
  }
}


</script>

<style scoped>

</style>
