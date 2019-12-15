<template>
  <div class="loginOrSingup">
    <AppControlInput focusAttr="email" type="email">Email</AppControlInput>
    <AppControlInput focusAttr="password" type="password"
      >Password</AppControlInput
    >
    <AppButton type="submit">{{ signup ? "Sign up" : "Log in" }}</AppButton>
    <span @click="convertAuth">Don't have an account?</span>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton";
import AppControlInput from "@/components/AppControlInput";

export default {
  components: {
    AppButton,
    AppControlInput
  },
  data() {
    return {
      signup: false
    };
  },
  methods: {
    convertAuth() {
      this.signup = !this.signup;
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
