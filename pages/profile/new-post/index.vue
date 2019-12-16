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
      try {
        await this.$store.dispatch("addPost", fieldData);
        this.$router.push("/profile");
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped></style>
