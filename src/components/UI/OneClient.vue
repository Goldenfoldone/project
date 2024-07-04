<template>
    <div class="client">
        <p class="client__text">{{ props.pol.id}}</p>
        <p class="client__text name" @click="OneClient">{{ props.pol.FIO }}</p>
        <p class="client__text">{{ props.pol.Company }}</p>
        <p class="client__text">{{ props.pol.Group }}</p>
        <img class="client__img" src="@/components/img/on.png"  alt="" v-if="props.pol.img">
        <img class="client__img" src="@/components/img/off.png"  alt="" v-else>
        <PopUp v-model='show' :key="client" :obj="client"/>
    </div>
  
</template>

<script setup>
import { ref } from 'vue';
import PopUp from '../UI/Pop-up.vue';
const props = defineProps([ 'pol'])
const show = ref(false)
const client = ref({})
function OneClient() {
    client.value = props.pol
    show.value = true   
}
</script>

<style scoped>
.client{
    display: grid;
    grid-template-columns: 1fr 3fr 2fr 3fr 1fr;
    padding-top: 33px;
}
.client__text{
    font-size: 30px;
}
.client__img{
    justify-self: center;
}
.name{
    cursor: pointer;
}
</style>