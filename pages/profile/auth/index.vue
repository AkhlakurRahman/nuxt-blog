<template>
  <div class="loginOrSingup">
    <form @submit.prevent="onSubmit">
      <AppControlInput focusAttr="email" v-model="email" type="email"
        >Email</AppControlInput
      >
      <AppControlInput focusAttr="password" v-model="password" type="password"
        >Password</AppControlInput
      >
      <AppButton type="submit">{{ signup ? "Sign up" : "Log in" }}</AppButton>
      <span @click="convertAuth">{{
        signup ? "I already have an account!" : "I don't have an account?"
      }}</span>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      signup: false,
      email: "",
      password: ""
    };
  },
  methods: {
    convertAuth() {
      this.signup = !this.signup;
    },
    async onSubmit() {
      const formData = {
        email: this.email,
        password: this.password,
        signup: this.signup
      };
      await this.$store.dispatch("authenticateUser", formData);
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
span {
  font-size: 1.2rem;
  font-weight: 400;
  cursor: pointer;
  color: #1768ac;
}
</style>
