<template>
  <div class="osnova">
    <Header @namefilter="name" />
    <Body :spisok="tabletext" :client="filterData" />
    <Footer @filter_img="filter_img"/>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Body from '@/components/Body.vue'
import { computed, ref } from 'vue'
import {  fetchPost } from '@/http/clientAPI.js'
const tabletext = ref(['Номер', 'ФИО', 'Компания', 'Группа', 'Присутствие'])
const client = ref([])
const filters = ref({
  FIO: '',
  img: null
})
const filterData = computed(() => {
  return client.value.filter((item) => {
    return ((filters.value.FIO == ''  || item.includes(filters.value.FIO)) && (filters.value.img == null ? true : (item.img == filters.value.img)))
  })
})
function filter_img(index) {
    if (index == 0){
      filters.value.img = false
    } else if (index == 1) {
      filters.value.img = true
    } else {
      filters.value.img = null
    }
}
fetchPost().then(result => {
  client.value = result
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans';
}

.osnova {
  min-height: calc(100vh - 47px);
  display: grid;
  grid-template-rows: auto 1fr auto;
  margin: 24px 50px 47px 50px;

}
</style>

