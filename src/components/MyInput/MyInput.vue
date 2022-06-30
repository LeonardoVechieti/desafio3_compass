<template>
  <div>
    <input
      :type="Type"
      :class="classInputs"
      :id="idInputs"
      :placeholder="placeholder"
      :value="value"
      @input="getVal"
      @click="submitVal"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "MyInput",
  
  props: {
    Type: {
      type: String,
      default: "text",
    },
    classInputs: {
      type: String,
      default: "inputs",
    },
    placeholder: {
      type: String,
      default: "",
    },
    idInputs: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },
  methods: {
    ...mapActions(["setUserName", "setUserPassword", "getUserName", "getUserPassword", "isCharAt", "foo"]),

    getVal(e) {
      if(this.idInputs === "user") {
        this.setUserName(e.target.value);
        console.log("Username =", e.target.value)
        return;
      }
      
      if(this.idInputs === "password") {
        this.setUserPassword(e.target.value);
        console.log("Password =", e.target.value)
        return;
      }
    },
    
    submitVal() {
      if(this.Type === "submit") {
        //TODO: Find a way to make this work
      }
    }

  },
};
</script>

<style lang="sass" scoped>
@import './MyInput.scss'
</style>
