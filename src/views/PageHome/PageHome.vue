<template>
  <div>
    <h1>Olá pagina Home</h1>
    <MyTitle />
  </div>
</template>
<script>
import MyTitle from '@/components/MyTitle/MyTitle.vue';

export default {
  
  name: "PageHome",
  components: {
    
    MyTitle
  },
};
</script>
