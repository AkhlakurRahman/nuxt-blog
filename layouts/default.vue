<template>
  <div>
    <TheHeader />
    <nuxt />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";

export default {
  components: {
    TheHeader
  }
};
</script>

<style>
*,
*:before,
*:after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
}

body {
  font-family: "Fira Sans", arial, sans-serif;
  font-weight: 300;
  line-height: 1.6;
  max-width: 70vw;
  margin: 0 auto;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: rgba(0, 0, 0, 0.84);
}
</style>
