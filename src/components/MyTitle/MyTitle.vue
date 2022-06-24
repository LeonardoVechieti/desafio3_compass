<template>
  <div class="MyTitle" :type="type" :content="content">
    <p>Componente TITLE</p>
    <h1 v-show="h1">{{ cnt }}</h1>
    <h2 v-show="h2">{{ cnt }}</h2>
    <h3 v-show="h3">{{ cnt }}</h3>
    <h4 v-show="h4">{{ cnt }}</h4>
    <h5 v-show="h5">{{ cnt }}</h5>
    <h6 v-show="h6">{{ cnt }}</h6>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "MyTitle",
  data() {
    return {
      h1: false,
      h2: false,
      h3: false,
      h4: false,
      h5: false,
      h6: false,
      cnt: ""
    }
  },
  props: {
    type: {
      type: String
    },
    content: {
      type: String,
    }
  },
  methods: {
    ...mapActions(["setTitleType"]),

    
  },
  created() {
    switch(this.type) {
      case "h1":
        this.h1 = true
        break
      case "h2":
        this.h2 = true
        break
      case "h3":
        this.h3 = true
        break
      case "h4":
        this.h4 = true
        break
      case "h5":
        this.h5 = true
        break
      case "h6":
        this.h6 = true
        break
    }
    this.cnt = this.content
  }
}
</script>
