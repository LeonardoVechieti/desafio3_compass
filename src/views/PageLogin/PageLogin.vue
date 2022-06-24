<template>
  <div id="PageLogin">
    <MyTitle type="h1" content="Olá" />
    <MyText text="Para continuar navegando de forma segura, efetue o login na rede."/>
  </div>
</template>

<script>
import MyText from '@/components/MyText/MyText.vue';
import MyTitle from '@/components/MyTitle/MyTitle.vue';
export default {
  name: "PageLogin",
  components: {
    MyText,
    MyTitle
  },
  
};
</script>

<style lang="scss" scoped>
@import './PageLogin.scss'


</style>
