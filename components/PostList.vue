<template>
  <section class="featured-posts">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :editable="editable"
      :id="post.id"
      :postTitle="post.postTitle"
      :postContent="post.postContent"
      :postThumbnail="post.postThumbnail"
    />
  </section>
</template>

<script>
import PostPreview from "@/components/PostPreview";
export default {
  components: {
    PostPreview
  },
  props: {
    editable: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
.featured-posts {
  align-self: flex-start;
}
</style>
