<template>
    <input type="text" class="input" v-model="model">
</template>

<script setup>
const model = defineModel()
</script>

<style>
.input{
    min-width: 394px;
    min-height: 52px;
    font-size: 16px;
    margin-left: 32.11px;
    border: 0px solid black;
    filter: drop-shadow(0 0 0.25rem #737373);
    outline:none;
    padding-left: 19px;
}
</style>