<template>
  <div>
    <div class="profile-page">
      <section class="create-new">
        <button>Create New Post</button>
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

export default {
  components: {
    PostList
  }
};
</script>

<style scoped>
.profile-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.create-new button {
  border: none;
  border-radius: 2px;
  cursor: pointer;
  padding: 1rem 1.5rem;
  background: #896eb9;
  color: #fff;
  font-family: "Fira Sans", arial, sans-serif;
  font-size: 1.8rem;
  transition: all 0.3s ease-out;
}

.create-new button:hover {
  background: #714fb0;
}

.existing-posts h3 {
  font-size: 2rem;
  margin: 5rem 0;
}
</style>
