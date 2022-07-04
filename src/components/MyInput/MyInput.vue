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
import router from "@/router";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "MyInput",
  data() {
    return {
      isOK: false,
    };
  },

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
    ...mapActions(["setUserName", "setUserPassword", "setOK"]),
    ...mapGetters(["getUserName", "getUserPassword"]),
    getVal(e) {
      if (this.idInputs === "user") {
        this.setUserName(e.target.value);
        console.log("Username =", e.target.value);
        return;
      }

      if (this.idInputs === "password") {
        this.setUserPassword(e.target.value);
        console.log("Password =", e.target.value);
        return;
      }
    },

    submitVal() {
      if (this.Type === "submit") {
        document.getElementById("erro").style.display = "none";
        let userName = this.getUserName();
        let userPassword = this.getUserPassword();
        if (userName.includes(".")) {
          this.isOK = true;
          document.getElementById("erro").style.display = "none";
        } else {
          document.getElementById("erro").style.display = "flex";
        }

        if (userPassword.length > 6 && userPassword.length < 9) {
          this.isOK = true;
          document.getElementById("erro").style.display = "none";
        } else {
          document.getElementById("erro").style.display = "flex";
        }

        if (this.isOK) {
          localStorage.setItem("token", true);
          router.push("/home");
        }
      }
    },
  },
};
</script>
<style lang="sass" scoped>
@import './MyInput.scss'
</style>
