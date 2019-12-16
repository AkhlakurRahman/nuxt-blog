<template>
  <div class="home-page">
    <h1>Home</h1>
    <PostList :posts="fetchedPosts" />
  </div>
</template>

<script>
export default {
  computed: {
    fetchedPosts() {
      return this.$store.getters.fetchedPosts;
    }
  }
};
</script>

<style></style>
