<template>
  <div>
    <input
      :type="Type"
      :class="classInputs"
      :id="idInputs"
      :placeholder="placeholder"
      :value="value"
    />
  </div>
</template>

<script>
export default {
  name: "MyInput",
  props: {
    Type: {
      type: String,
      default: "text",
    },
    classInputs: {
      type: String,
      default: "inputs",
    },
    placeholder: {
      type: String,
      default: "",
    },
    idInputs: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="sass" scoped>
@import './MyInput.scss'
</style>
