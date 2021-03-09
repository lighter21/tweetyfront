<template>
  <div class="blue-grey darken-4 jebanegowno ">
    <navbar/>
    <content-container>
      <add-post/>
      <post/>
      <post/>
      <post/>
      <post/>
    </content-container>
    <sidebar-container/>

  </div>
</template>

<script>
import AddPost from "@/components/add-post";
import Navbar from "@/components/navbar";
import ContentContainer from "@/components/content-container";
import SidebarContainer from "@/components/sidebar-container";
import Post from "@/components/post";
import axios from "axios";

export default {
  name: "Dashboard",
  components: {Post, SidebarContainer, ContentContainer, Navbar, AddPost},
  mounted() {
    if (this.$store.state.Logged) {
      this.$store.dispatch('getCookie').then(() => {
        axios.get(`${this.$store.state.API}/api/user`)
            .then((response) => {
              this.$store.commit('setUser', response);
              console.log(this.$store.state.User);
            })
      }).catch(error => {
        console.log(error);
      });
    }

  },

}
</script>

<style lang="sass" scoped>
.jebanegowno
  display: flex
  justify-content: center
  height: 100%
</style>
