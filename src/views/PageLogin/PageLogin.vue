<template>
  <div id="PageLogin">
    <div class="date">
      <div class="container">
        <MyTitle type="h1" content="Olá," size="size-60px" />
        <MyText size="size-16px"
          text="Para continuar navegando de forma segura, efetue o login na rede."
        />
      </div>
    </div>
    <div class="img">
      <div class="logo">
        <MyImg img="img/logo.png" desc="logo" />
      </div>
      <div class="fundo">
        <MyImg img="img/fundo.png" desc="fundo" />
      </div>
    </div>
  </div>
</template>

<script>
import MyText from "@/components/MyText/MyText.vue";
import MyTitle from "@/components/MyTitle/MyTitle.vue";
import MyImg from "@/components/MyImg/MyImg.vue";
export default {
  name: "PageLogin",
  components: {
    MyText,
    MyTitle,
    MyImg,
  },
};
</script>

<style lang="scss" scoped>
@import "./PageLogin.scss";
</style>
