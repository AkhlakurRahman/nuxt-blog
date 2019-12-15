<template>
  <div class="nav-wrapper">
    <section class="intro">
      <nuxt-link to="/"><h2>Tech Updates</h2></nuxt-link>
    </section>
    <nav class="navbar">
      <ul class="nav-list">
        <li class="nav-item"><nuxt-link to="/posts">Articles</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
        <li class="nav-item">
          <nuxt-link to="/profile/auth">Log in</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/profile">Profile</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 4rem 0;
}

a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.83);
}

.intro h2 {
  font-size: 3rem;
  color: rgba(0, 0, 0, 0.83);
}

.nav-list {
  list-style: none;
  display: flex;
}

.nav-item a {
  padding: 1.5rem;
  font-size: 1.6rem;
  font-weight: 400;
  transition: color 0.2s ease-in;
}

.nav-item a:hover,
.nav-item a:active,
a.nuxt-link-active {
  color: #000;
}
</style>
