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
        <v-card-title class="justify-center">
          Create your account
        </v-card-title>
        <v-card-subtitle class="text-center">
          Register now and have fun later!
        </v-card-subtitle>
        <form>
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
                @click.prevent="register"
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
        </form>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios';
import {mapState} from "vuex";
import {validationMixin} from 'vuelidate'
import {email, maxLength, minLength, required} from 'vuelidate/lib/validators'

axios.defaults.withCredentials = true;
export default {
  mixins: [validationMixin],

  validations: {
    name: {required, maxLength: maxLength(30)},
    email: {required, email},
    password: {required, maxLength: maxLength(30), minLength: minLength(8)},
    confirmPassword: {required, maxLength: maxLength(30), minLength: minLength(8)},
  },

  name: "Register",
  computed: {
    nameErrors() {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
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
    confirmPasswordErrors() {
      const errors = []
      if (!this.$v.confirmPassword.$dirty) return errors
      !this.$v.confirmPassword.minLength && errors.push('Password must be at least 8 characters long')
      !this.$v.confirmPassword.maxLength && errors.push('Password must be at most 30 characters long')
      !this.$v.confirmPassword.required && errors.push('Confirm your password')
      return errors
    },
    ...mapState(['API'])
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  },
  methods: {
    register() {
      let data = {
        name: this.name,
        email: this.email,
        password: this.password
      };
      this.$store.dispatch('getCookie').then(() => {
        axios.post(`${this.$store.state.API}/api/register`, data)
      }).catch(error => {
        console.log(error);
      });
      this.clear();
    },
    clear() {
      this.$v.$reset();
      this.name = '';
      this.email = '';
      this.password = '';
      this.confirmPassword = '';
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
