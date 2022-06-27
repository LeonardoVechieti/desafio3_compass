<template>
    <div>
        <input 
        :type="Type"
        :class="classInputs"
        :id="idInputs"
        :placeholder="placeholder" 
        :value="value"
        />
    </div>
</template>

<script>
export default {
    name: "MyInput",
    props: {
        Type: String,
        classInputs: String,
        placeholder: String,
        idInputs: String
    }
}
</script>

<style lang="sass" scoped>
@import './MyInput.scss'
</style>