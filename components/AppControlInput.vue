<template>
  <div class="input-control">
    <label :for="focusAttr"><slot /></label>
    <input
      v-if="controlType === 'input'"
      v-bind="$attrs"
      :id="focusAttr"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <textarea
      v-if="controlType === 'textarea'"
      rows="10"
      v-bind="$attrs"
      :id="focusAttr"
      :value="value"
      @input="$emit('input', $event.target.value)"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "AppInputControl",
  props: {
    controlType: {
      type: String,
      default: "input"
    },
    value: {
      type: String,
      default: ""
    },
    focusAttr: {
      type: String
    }
  }
};
</script>

<style scoped>
.input-control {
  margin: 2rem 0;
}

.input-control label {
  display: block;
  font-weight: bold;
  font-size: 1.6rem;
}

.input-control input,
.input-control textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-size: 1.6rem;
  font-weight: 300;
  font-family: inherit;
  border: 1px solid #ccc;
  padding: 5px;

  transition: all 0.2s ease-in-out;
}

.input-control input:focus,
.input-control textarea:focus {
  /* background-color: #eee; */
  border: 1px solid #714fb0;
  outline: none;
}
</style>
