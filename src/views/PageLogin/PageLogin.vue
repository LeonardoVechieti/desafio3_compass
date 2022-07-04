<template>
  <div class="page-login">
    <div class="date">
      <div class="container">
        <MyImg image="logo" desc="logo" class="logo-mobile" />
        <MyTitle type="h1" content="Olá," size="size-60px" class="title" />
        <MyText
          size="size-16px"
          text="Para continuar navegando de forma segura, efetue o login na rede."
        />
        <MyTitle type="h2" content="Login" size="size-30px" class="login" />
        <div class="input-icon">
          <label for="user"><i class="fa fa-user"></i></label>
          <MyInput
            Type="text"
            idInputs="user"
            classInputs="inputs"
            placeholder="Usuário"
            class="input"
          />
        </div>
        <div class="input-icon">
          <label for="password"><i class="fa fa-lock"></i></label>
          <MyInput
            Type="password"
            idInputs="password"
            classInputs="inputs"
            placeholder="Senha"
            class="input"
          />
        </div>
        <div class="error">
          <MyText
            size="size-16px"
            id="erro"
            text="Ops, usuário ou senha inválidos. Tente novamente!"
          />
        </div>
        <MyInput
          Type="submit"
          idInputs="submit"
          classInputs="register"
          value="Continuar"
        />
      </div>
    </div>
    <div class="img">
      <div class="fundo">
        <MyImg image="logo" desc="logo" id="image-logo" />
      </div>
    </div>
  </div>
</template>

<script>
import MyText from "@/components/MyText/MyText.vue";
import MyTitle from "@/components/MyTitle/MyTitle.vue";
import MyImg from "@/components/MyImg/MyImg.vue";
import MyInput from "@/components/MyInput/MyInput.vue";

export default {
  name: "PageLogin",
  components: {
    MyText,
    MyTitle,
    MyImg,
    MyInput,
  },
};
</script>

<style lang="scss" scoped>
@import "./PageLogin.scss";
</style>
