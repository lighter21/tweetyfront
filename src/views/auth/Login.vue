<template>
  <v-container class="blue-grey darken-4">
    <v-layout>
      <v-card
          outlined
          shaped
          elevation="2"
          class="pa-5 mx-auto mt-10 blue-grey darken-4"
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
                @click.prevent="submit"
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
              Forgot password
            </router-link>
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
import {validationMixin} from "vuelidate";
import {email, maxLength, minLength, required} from "vuelidate/lib/validators";
import {mapMutations, mapState} from "vuex";
import axios from "axios";

axios.defaults.withCredentials = true;

export default {
  mixins: [validationMixin],

  validations: {
    email: {required, email},
    password: {required, maxLength: maxLength(30), minLength: minLength(8)},
  },
  name: "Login",
  data() {
    return {
      email: '',
      password: '',
    }
  },
  computed: {
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    passwordErrors() {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.minLength && errors.push('Password must be at least 8 characters long')
      !this.$v.password.maxLength && errors.push('Password must be at most 30 characters long')
      !this.$v.password.required && errors.push('Password is required')
      return errors
    },
    ...mapState(['API', 'logged']),
    ...mapMutations(['setLoginStatus', 'setCookie', 'setUser'])
  },
  methods: {
    async submit() {
      await this.$store.dispatch('getCookie')
      await this.$store.dispatch('login', {email: this.email, password: this.password})
      await this.$router.push('/dashboard');
    },
  }
}
</script>

<style scoped>

</style>
