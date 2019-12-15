<template>
  <div class="home-page">
    <h1>Home</h1>
    <PostList :posts="fetchedPosts" />
  </div>
</template>

<script>
import PostList from "@/components/PostList";

export default {
  components: {
    PostList
  },
  computed: {
    fetchedPosts() {
      return this.$store.getters.fetchedPosts;
    }
  }
};
</script>

<style></style>
