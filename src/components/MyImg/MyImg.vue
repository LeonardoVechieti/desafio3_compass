<template>
  <div>
    <img
      :id="id"
      class="img"
      :src="require(`@/assets/${image}.png`)"
      :alt="desc"
    />
  </div>
</template>
<script>
export default {
  name: "MyImg",
  props: {
    image: String,
    desc: String,
    id: String,
  }
};
</script>

<style lang="sass" scoped>
@import './MyImg.scss'
</style>
