<template>
  <div class="blue-grey darken-4 content-container ">
    <navbar/>
    <content-container>
      <add-post/>
      <post v-for="tweet in tweets" :key="tweet.id" :tweet="tweet" />
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

export default {
  name: "Dashboard",
  components: {Post, SidebarContainer, ContentContainer, Navbar, AddPost},
  data() {
    return {
      tweets: null
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

<style lang="sass" scoped>
.content-container
  display: flex
  justify-content: center
  height: 100%
</style>
