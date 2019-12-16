<template>
  <section class="form-control">
    <FormLayout @onSubmit="onSubmit" />
  </section>
</template>

<script>
import axios from "axios";

import FormLayout from "@/components/FormLayout";

export default {
  components: {
    FormLayout
  },
  methods: {
    async onSubmit(fieldData) {
      const res = await axios.post(
        "https://tech-update-4e7f6.firebaseio.com/posts.json",
        { ...fieldData, createdAt: new Date() }
      );
      this.$router.push("/profile");
    }
  }
};
</script>

<style scoped></style>
