<template>
  <article class="post-preview">
    <div class="post-content">
      <nuxt-link :to="editOrViewPost"
        ><h4>{{ postTitle }}</h4></nuxt-link
      >
      <p>{{ postContent }}</p>
    </div>
    <img class="post-thumbnail" :src="postThumbnail" :alt="postTitle" />
  </article>
</template>

<script>
export default {
  name: "PostPreview",
  props: {
    id: {
      type: String,
      required: true
    },
    postTitle: {
      type: String,
      required: true
    },
    postContent: {
      type: String,
      required: true
    },
    postThumbnail: {
      type: String,
      required: true
    },
    editable: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    editOrViewPost() {
      return this.editable ? `profile/${this.id}` : `posts/${this.id}`;
    }
  }
};
</script>

<style scoped>
.post-preview {
  width: 60rem;
  margin-top: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #ddd;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 3rem;
  align-items: center;
}

.post-preview:last-child {
  border-bottom: none;
}

.post-content {
  grid-column: 1 / 6;
}

.post-content a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.84);
}

.post-content a h4 {
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 0.15rem;
}

.post-content p {
  font-size: 1.8rem;
  color: #444444;
  font-weight: 300;
}

.post-thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>
