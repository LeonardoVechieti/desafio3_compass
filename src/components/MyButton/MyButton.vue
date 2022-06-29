
<template>
    <div class="button">
    <button :class="classButton" @click="buttonRegister">{{ name }}</button>
  </div>
</template>

<script>
export default {
    name: "MyButton",
    props: {
        text: {
            type: String,
            default: "Button"
        },
        name: {
            type: String,
            default: "Button"
        },
        classButton: {
            type: String,
            default: "dark"
        }
    },
    methods: {
        onClick() {
            this.$emit("click");
        }
    }
}
</script>

<style lang="scss" scoped>
@import './MyButton.scss'
</style>