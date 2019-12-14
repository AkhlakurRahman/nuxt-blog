<template>
  <div class="posts-page">
    <h3>Articles</h3>
    <PostList />
  </div>
</template>

<script>
import PostList from "@/components/PostList";

export default {
  components: {
    PostList
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
