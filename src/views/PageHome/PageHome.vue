<template>
  <div class="page-home">
    <div class="header">
      <div class="logo">
        <MyImg image="logo2" desc="logo" class="" id="image-logo" />
      </div>

      <div class="time">
        <h1>11:26</h1>
        <p>terça-feira, 17 de março de 2020</p>
      </div>

      <div class="temp">
        <p>Passo Fundo - RS</p>
        <h1>22°</h1>
      </div>
    </div>
    <div class="message">
      <MyText size="size-36px" text="Our mission is" id="red-bold" />
      <MyText size="size-24px" text="Nossa missão é" id="black" />
      <MyText size="size-64px" text="to transform the world" id="red-bold" />
      <MyText size="size-24px" text="transformar o mundo" id="black" />
      <MyText
        size="size-64px"
        text="building digital experiences"
        id="red-bold"
      />
      <MyText
        size="size-24px"
        text="construindo experiências digitais"
        id="black"
      />
      <MyText
        size="size-64px"
        text="that enable our client’s growth"
        id="red-bold"
      />
      <MyText
        size="size-24px"
        text="que permitam o crescimento dos nossos clientes"
        id="black"
      />
    </div>
    <img src="@/assets/uol.png" alt="">
    <MyButton classButton="white" />
    <MyButton classButton="dark" />
  </div>
</template>
<script>
import MyButton from "@/components/MyButton/MyButton.vue";
import MyImg from "@/components/MyImg/MyImg.vue";
import MyText from "@/components/MyText/MyText.vue";

export default {
  name: "PageHome",
  components: {
    MyButton,
    MyImg,
    MyText,
  },
};
</script>

<style lang="scss" scoped>
@import "./PageHome.scss";
</style>
