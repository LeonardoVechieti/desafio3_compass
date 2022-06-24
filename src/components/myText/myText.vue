
<template>
    <p :class="MyText" :text="text">{{ text }}</p>
</template>

<script>
export default {
    name: "MyText",
    props: {
        MyText: {
            type: String
        },
        text: {
            type: String
        }
    },
}
</script>

<style lang="scss" scoped>
@import './MyText.scss'
</style>