<template>
  <div>
    <FormLayout :postData="loadedData" />
  </div>
</template>

<script>
import FormLayout from "@/components/FormLayout";

export default {
  components: {
    FormLayout
  },
  data() {
    return {
      loadedData: {
        authorName: "Akhlakur Rahman",
        postTitle: "Test Title",
        thumbnailLink:
          "https://cdn.acodez.in/wp-content/uploads/2019/08/What-is-Javascript-used-for.jpg",
        postContent: "Dummy Content"
      }
    };
  }
};
</script>

<style scoped></style>
