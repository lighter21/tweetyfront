<template>
  <div class="blue-grey darken-4 content-container ">
    <navbar/>
    <content-container>
      <add-post/>
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


export default {
  name: "Dashboard",
  components: {Post, SidebarContainer, ContentContainer, Navbar, AddPost},
}
</script>

<style lang="sass" scoped>
.content-container
  display: flex
  justify-content: center
  height: 100%
</style>
