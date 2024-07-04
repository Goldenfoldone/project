<template>
    <div class="popup" v-if="show" @click="openpopUp" >
        <div  @click.stop class="popup__content">
            <button @click="openpopUp" class="popup__content_btn_img"><img class="close_img" src="@/components/img/ionic-close.png" alt=""></button>
            <div class="innerPart">
                <p v-for="(item, index) in spisok" :key="index" class="innerPart_text_p">{{ item }}</p>
                <MyInput class="column" v-model="card.FIO"/>
                <MyInput class="column" v-model="card.Company"/>
                <select v-model="card.Group" class="select">
                    <option disabled :value="Выбрать">Выбрать</option>
                    <option v-for="(item,index) in grup" :key="index">{{item}}</option>
                </select>
                <label class="input__checbox">
                    <input type="checkbox" class="icheckbox" v-model="card.img" />
                    <span class="checkbox"/>
                </label>
            </div>
            <div class="innerBTN">
                <MyButton @click="createClient" v-if="props.obj == undefined" >Добавить</MyButton>             
                <MyButton @click="saveClik" v-else>Сохранить</MyButton>        
                <MyButton class="close" @click="closePopUp">Закрыть</MyButton>
            </div>
        </div>
    </div>
  
</template>

<script setup>
import { ref } from 'vue';
import MyInput from '../UI/MyInput.vue'
import MyButton from '../UI/MyButton.vue';
import { updateOnepost, createPost } from '@/http/clientAPI';
const grup = ['Прохожий','Клиент', 'Партнер']
const spisok = ['ФИО','Компания','Группа', 'Присутствие']
const show = defineModel()
const props = defineProps(['obj'])
const card = ref({})
if (props.obj){
    card.value = props.obj
} 
function openpopUp(){
    show.value = false
}
function closePopUp(){
    show.value = false
}
function createClient() {
        if (card.value.FIO == undefined || card.value.Company == undefined){
            alert('Заполните поля с ФИО и компанией запись не добавлена')
            return;
        }else if (card.value.Group == undefined){
            alert('Заполните к какой группе вы относитесь')
            return;
        }
    show.value = false
    createPost(card.value).then(console.log('Win'))
    window.location.reload()
}      
function saveClik(){
    show.value = false
    updateOnepost(card.value).then(console.log('exit'))   
}
</script>

<style scoped>
.popup{
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
    z-index: 9999;
}
.popup__content{
    margin: auto;
    background: white;
    border-radius: 30px;
    max-width: 1461px;
    max-height: 581px;
    padding: 66px 269px 53px 417px;
    z-index: 99999;
}
.popup__content_btn_img{
    cursor: pointer;
}
.close_img{
    display: block;
    position: absolute;
    top: 410px;
    right: 140px;
}
.column {    
    grid-column: 2;
}
.select{
    min-width: 394px;
    min-height: 52px;
    font-size: 30px;
    margin-left: 32.11px;
    border: 0px solid black;
    filter: drop-shadow(0 0 0.25rem #737373);
    outline:none;
    padding-left: 19px ;
}
.input__checbox{
    display: flex;
    align-items: center;
    max-width: 394px; 
    margin-left: 32.1px;
}
.icheckbox{display: none;}
.checkbox::before{
    content: "";
    display: inline-block;
    box-sizing: border-box;
    width: 34px;
    height: 34px;
    background-color: white;
    border: 2px solid #B0B0B0;
    border-radius: 2px;
    margin-right: 6px;
    vertical-align: baseline;
    text-align: center;
    font-family: Arial, sans-serif;
    font-size: 16px;
    line-height: 16px;
    font-weight: bold;
    color: #808080;
}
.icheckbox:checked + .checkbox::before { 
    background-color: #80BB00;
    background-size: 10%; }
.checkbox:checked:before{
    border-color: #0b76ef;
    background-color: #0b76ef;
}
.innerBTN{
    margin-top: 44px;
}
.close{
    background-color:#737373;
}
.innerPart_text_p{
    grid-column: 1;

    font-size: 32px;
    font-weight: 600;
    color: #4E3000;
}
.innerPart{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows:repeat(4, 1fr) ;
    row-gap: 20px;
    grid-auto-flow: row dense;
}
</style>