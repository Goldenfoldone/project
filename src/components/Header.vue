<template>
    <div class="header">
        <Pop-up v-model='show'>
        </Pop-up>
        <img src="@/components/img/logo.png" class="header__img"/>
        <MyInput  placeholder="Поиск по имени" v-model="namesearch" @blur="serchname"/>
        <MyButton @click="openPopUp">Добавить</MyButton>
        <div class="header__user">
            <p class="header__user_text">Посетители</p>
            <div class="header__user_counter">
                <p class="header__user_counter_on">280</p>
                <img src="@/components/img/slash.png" alt="" class="header__user_counter_img">
                <p class="header__user_counter_off">35</p>
            </div>    
        </div>
    </div>
  
</template>

<script setup>
import { ref } from 'vue';
import PopUp from './UI/Pop-up.vue';
import MyInput from './UI/MyInput.vue'
import MyButton from './UI/MyButton.vue';
const namesearch = ref('')
const show = ref(false)
const emit = defineEmits(['namefilter'])
function openPopUp(){
    show.value = true
}
function serchname(){
    emit('namefilter', namesearch.value)
}
</script>

<style scoped>
.header{
    display: flex;
    align-items: flex-end;
}
.header__user{
    margin-left: auto;
    font-size: 30px;
    font-weight: bold;
}
.header__user_text{color: #4E3000;}
.header__user_counter{
    display: flex;
    gap: 12px;
    justify-content: flex-end;
}
.header__user_counter_on{color: #80BB00;}
.header__user_counter_off{color: #EC5937;}


</style>