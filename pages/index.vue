<template>
  <div class="home-page">
    <section class="intro">
      <h2>Tech Updates</h2>
    </section>
    <section class="featured-posts">
      <PostPreview
        id="1"
        postTitle="First Title"
        previewText="First preview content"
        postThumbnail="https://cdn.acodez.in/wp-content/uploads/2019/08/What-is-Javascript-used-for.jpg"
      />
      <PostPreview
        id="2"
        postTitle="Second Title"
        previewText="Second preview content"
        postThumbnail="https://cdn.acodez.in/wp-content/uploads/2019/08/What-is-Javascript-used-for.jpg"
      />
      <PostPreview
        id="3"
        postTitle="Third Title"
        previewText="Third preview content"
        postThumbnail="https://cdn.acodez.in/wp-content/uploads/2019/08/What-is-Javascript-used-for.jpg"
      />
    </section>
  </div>
</template>

<script>
import PostPreview from "@/components/PostPreview";

export default {
  components: {
    PostPreview
  }
};
</script>

<style>
.home-page {
  display: flex;
  flex-direction: column;
}

.home-page h2 {
  font-size: 5rem;
  margin-bottom: 3rem;
}

.featured-posts {
  align-self: flex-start;
}
</style>
