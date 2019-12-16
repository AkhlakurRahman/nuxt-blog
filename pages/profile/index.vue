<template>
  <div>
    <div class="profile-page">
      <section class="create-new">
        <AppButton
          @click="$router.push('/profile/new-post')"
          btnStyle="inverted"
        >
          Create New Post
        </AppButton>
      </section>
      <section class="existing-posts">
        <h3>Existing Posts</h3>
        <PostList :posts="fetchedPosts" editable />
      </section>
    </div>
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

<style scoped>
.profile-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.existing-posts h3 {
  font-size: 2rem;
  margin: 5rem 0;
}
</style>
