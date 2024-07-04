<template>
    <div class="foot">
        <p class="foot__text">Фильтровать по:</p>
        <button class="foot__btn" v-for="(item, index) in btn_text" :key="index" 
        :class="{ active: active == (index + 1) }"
        @click="filterList(index)">{{ item }}</button>
    </div>
</template>

<script setup>
import { ref } from "vue"

const btn_text = ['Отсутсвующим', 'Присутствующим', 'Без фильтра']
const active = ref('3')
const emit = defineEmits(['filter_img'])
function filterList(item) {
    active.value = item + 1
    emit('filter_img', item)
}
</script>

<style  scoped>
.foot {
    display: flex;
    gap: 50px;
}

.foot__text {
    font-size: 30px;
    font-weight: bold;
    color: #4E3000;
}

.foot__btn {
    background: none;
    font-size: 25px;
    border: 0px solid;
    cursor: pointer;
}

.active {
    background-color: #C4C4C4;
    color: #FFFFFF;
    padding: 10px;
    border-radius: 20px;
}</style>

