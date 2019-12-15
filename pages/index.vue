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
  data() {
    return {
      fetchedPosts: [
        {
          id: "1",
          postTitle: "First Title",
          postThumbnail:
            "https://cdn.acodez.in/wp-content/uploads/2019/08/What-is-Javascript-used-for.jpg",
          postContent: "First post content"
        },
        {
          id: "2",
          postTitle: "Second Title",
          postThumbnail:
            "https://cdn.acodez.in/wp-content/uploads/2019/08/What-is-Javascript-used-for.jpg",
          postContent: "Second post content"
        },
        {
          id: "3",
          postTitle: "Third Title",
          postThumbnail:
            "https://cdn.acodez.in/wp-content/uploads/2019/08/What-is-Javascript-used-for.jpg",
          postContent: "Third post content"
        }
      ]
    };
  }
};
</script>

<style></style>
