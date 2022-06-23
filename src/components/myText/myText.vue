<template>
    <p :class="myText">OlaText</p>
</template>

<script>
export default {
    name: "myText",
    props: {
        Text: String
    }
}
</script>

<style lang="scss" scoped>

@import './myText.scss'

</style>