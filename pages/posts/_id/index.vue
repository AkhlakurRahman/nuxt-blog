<template>
  <div class="single-post">
    <section class="post">
      <h1>{{ fetchedPost.postTitle }}</h1>
      <div class="post__details">
        <div>{{ fetchedPost.createdAt | date }}</div>
        <div>{{ fetchedPost.authorName }}</div>
      </div>
      <p class="content">{{ fetchedPost.postContent }}</p>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  async asyncData(context) {
    const res = await axios.get(
      `https://tech-update-4e7f6.firebaseio.com/posts/${context.params.id}.json`
    );
    return {
      fetchedPost: res.data
    };
  }
};
</script>

<style scoped>
.post {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.post h1 {
  font-size: 2.5rem;
  margin: 3rem 0;
}

.post__details {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.4rem;
  margin-bottom: 2rem;
}

.post p {
  font-size: 1.6rem;
}
</style>
