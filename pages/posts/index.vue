<template>
  <div class="posts-page">
    <h3>Articles</h3>
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

<style>
.posts-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.posts-page h3 {
  font-size: 2.5rem;
  margin-bottom: 7rem;
}
</style>
