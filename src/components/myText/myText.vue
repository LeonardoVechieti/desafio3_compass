
<template>
    <p :class="MyText">OlaText</p>
</template>

<script>
export default {
    name: "MyText",
    props: {
        Text: String
    }
}
</script>

<style lang="scss" scoped>
@import './MyText.scss'
</style>