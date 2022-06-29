<template>
  <div>
    <h1>Olá pagina Home</h1>
    <MyTitle type="h1" content="MyTitle" />
    <MyButton classButton="white"/>
    <MyButton classButton="dark"/>
  </div>
</template>
<script>
import MyTitle from '@/components/MyTitle/MyTitle.vue';
import MyButton from '@/components/MyButton/MyButton.vue';

export default {
  
  name: "PageHome",
  components: {

    MyTitle,  
    MyButton,

  },
};
</script>
