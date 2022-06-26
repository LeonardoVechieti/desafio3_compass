<template>
  <div>
    <img class="img" :src="img" :alt="desc" />
  </div>
</template>
<script>
export default {
  name: "MyImg",
  props: {
      img: String,
      desc: String,
  },
};
</script>
<style scoped>
.img {
    width: 100%;
    height: 100%; 
}
 

</style>

