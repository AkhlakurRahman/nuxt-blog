<template>
  <div class="single-post">
    <section class="post">
      <h1>Title of the post</h1>
      <div class="post__details">
        <div>Published on XXXX</div>
        <div>Writer Name</div>
      </div>
      <p class="content">Post content</p>
    </section>
  </div>
</template>

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
