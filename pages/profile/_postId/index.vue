<template>
  <div>
    <FormLayout :postData="fetchedPost" @onSubmit="onSubmit" />
  </div>
</template>

<script>
import axios from "axios";
import FormLayout from "@/components/FormLayout";

export default {
  middleware: "checkIfUserIsAuthenticated",
  components: {
    FormLayout
  },
  data() {
    return {
      fetchedPost: {}
    };
  },
  async asyncData(context) {
    try {
      const res = await axios.get(
        `https://tech-update-4e7f6.firebaseio.com/posts/${context.params.postId}.json`
      );
      return {
        fetchedPost: { ...res.data, id: context.params.postId }
      };
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async onSubmit(fieldData) {
      try {
        await this.$store.dispatch("editPost", fieldData);
        this.$router.push("/profile");
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped></style>
