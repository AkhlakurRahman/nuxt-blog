<template>
  <section class="form-control">
    <form @submit.prevent="onSubmit">
      <AppControlInput v-model="fieldData.authorName" focusAttr="authorName"
        >Author Name</AppControlInput
      >
      <AppControlInput v-model="fieldData.postTitle" focusAttr="postTitle"
        >Title</AppControlInput
      >
      <AppControlInput
        v-model="fieldData.thumbnailLink"
        focusAttr="thumbnailLink"
        >Thumbnail Link</AppControlInput
      >
      <AppControlInput
        controlType="textarea"
        v-model="fieldData.postContent"
        focusAttr="content"
        >Write Something Amazing</AppControlInput
      >
      <AppButton type="submit">Publish</AppButton>
    </form>
  </section>
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
      fieldData: {
        authorName: "",
        postTitle: "",
        thumbnailLink: "",
        postContent: ""
      }
    };
  },
  methods: {
    onSubmit() {
      // Publish post
      console.log(this.fieldData);
    }
  }
};
</script>

<style scoped></style>
