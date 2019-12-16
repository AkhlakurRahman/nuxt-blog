<template>
  <div>
    <FormLayout :postData="fetchedPost" @onSubmit="onSubmit" />
  </div>
</template>

<script>
import axios from "axios";
import FormLayout from "@/components/FormLayout";

export default {
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
        fetchedPost: res.data
      };
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async onSubmit(fieldData) {
      try {
        const res = await axios.put(
          `https://tech-update-4e7f6.firebaseio.com/posts/${this.$route.params.postId}.json`,
          fieldData
        );
        this.$router.push("/profile");
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped></style>
