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
        <PostList />
      </section>
    </div>
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import AppButton from "@/components/AppButton";

export default {
  components: {
    PostList,
    AppButton
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
