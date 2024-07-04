<template>
    <button class="btn"> 
        <slot></slot>
    </button>
</template>

<script setup>

</script>

<style>
.btn{
    margin-left: 40px;
    min-width: 273px;
    min-height: 52px;
    font-size: 24px;
    font-family: 'Roboto';
    color: #FFFFFF;
    background: #4CAF50;
    border: 0px solid black;
    border-radius: 10px;    
    filter: drop-shadow(0px 5px 0.25rem #737373);
    cursor: pointer;
}
</style>