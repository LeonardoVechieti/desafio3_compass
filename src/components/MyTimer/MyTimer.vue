<template>
  <div>{{ count }}</div>
</template>

<script>
import Router from "../../router/index.js";

export default {
  name: "MyTimer",
  props: {
    type: Number,
  },

  data() {
    return {
      timer_run: true,
      count: "",
    };
  },

  methods: {
    increment() {
      if (this.timer_run) {
        this.count--;
        if (this.count == 0) {
          this.back();
        }
      }
    },
    back() {
      this.timer_run = false;
      Router.push({ name: "Login" });
    },
  },

  created() {
    this.count = 600;
    setInterval(() => {
      this.increment();
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
@import "./MyTimer.scss";
</style>
