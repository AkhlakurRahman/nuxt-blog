<template>
  <form @submit.prevent="onSubmit">
    <AppControlInput v-model="fieldData.authorName" focusAttr="authorName"
      >Author Name</AppControlInput
    >
    <AppControlInput v-model="fieldData.postTitle" focusAttr="postTitle"
      >Title</AppControlInput
    >
    <AppControlInput v-model="fieldData.postThumbnail" focusAttr="thumbnailLink"
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
</template>

<script>
export default {
  props: {
    postData: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      fieldData: this.postData
        ? { ...this.postData }
        : {
            authorName: "",
            postTitle: "",
            postThumbnail: "",
            postContent: ""
          }
    };
  },
  methods: {
    onSubmit() {
      this.$emit("onSubmit", this.fieldData);
    }
  }
};
</script>

<style scoped></style>
