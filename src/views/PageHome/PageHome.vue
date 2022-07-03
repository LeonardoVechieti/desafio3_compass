<template>
  <div class="page-home">
    <div class="header">
      <div class="logo">
        <MyImg image="logo2" desc="logo" class="" id="image-logo2" />
      </div>

      <div class="time">
        <h1>11:26</h1>
        <p>terça-feira, 17 de março de 2020</p>
      </div>

      <div class="temp">
        <ApiWeather />
      </div>
    </div>
    <div class="container">
      <div class="image">
        <img src="@/assets/uol2.png" alt="" id="uol-img"/>
      </div>
      <div class="message">
        <MyText size="size-24px" text="Our mission is" id="red-bold" class="item-message"/>
        <MyText size="size-24px" text="Nossa missão é" id="black" class="item-message" />
        <MyText size="size-40px" text="to transform the world" id="red-bold" class="item-message"/>
        <MyText size="size-20px" text="transformar o mundo" id="black" class="item-message"/>
        <MyText
          size="size-40px"
          text="building digital experiences"
          id="red-bold"
          class="item-message"
        />
        <MyText
          size="size-20px"
          text="construindo experiências digitais"
          id="black"
          class="item-message"
        />
        <MyText
          size="size-40px"
          text="that enable our client’s growth"
          id="red-bold"
          class="item-message"
        />
        <MyText
          size="size-20px"
          text="que permitam o crescimento dos nossos clientes"
          id="black"
          class="item-message"
        />
      </div>
    </div>

    <div class="footer">
      <div class="text1">
        <MyText
          size="size-13px"
          text="Essa janela do navegador é usada para manter sua sessão de autenticação ativa."
        />
        <MyText
          size="size-13px"
          text=" Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar."
        />
      </div>
      <div class="text2">
        <MyText size="size-16px" text="Application refresh in" />
      </div>
      <div class="text3">
        <MyText size="size-64px" text="600" />
        <MyText size="size-16px" text="seconds" />
      </div>
      <div class="buttons">
        <div class="button1" @click="continuar()">
          <MyText size="size-16px" text="Continuar Navegando" id="red-bold" class="button" />
        </div>
        <div class="button2" @click="logout()">
          <MyText size="size-16px" text="Logout" class="button" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MyImg from "@/components/MyImg/MyImg.vue";
import MyText from "@/components/MyText/MyText.vue";
import ApiWeather from "@/components/ApiWeather/ApiWeather.vue";

export default {
  name: "PageHome",
  components: {
    MyImg,
    MyText,
    ApiWeather
  },
  methods: {
    continuar() {
      this.$router.push("/home");
    },
    logout() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./PageHome.scss";
</style>
