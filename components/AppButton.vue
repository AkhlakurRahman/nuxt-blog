<template>
  <button class="button" :class="btnStyle" v-bind="$attrs" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    btnStyle: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.button {
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

.button:hover,
.button:active {
  background: #714fb0;
}

.inverted {
  background: #714fb0;
  color: #fff;
  border: 1px solid transparent;
}

.inverted:hover,
.inverted:active {
  background: #896eb9;
  border: 1px solid transparent;
}
</style>
