<template> 
    <div>
        <div class="body" >
        <p v-for="(item, index) in props.spisok" :key="index" class="body__text">
            {{item}}
        </p>
        </div>
        <div v-for="(item, index) in props.client" :key="index">
            <OneClient :pol="item" />
        </div>          
    </div>
</template>

<script setup>
    import OneClient from "@/components/UI/OneClient.vue"
    const props = defineProps(['spisok', 'client'])
</script>

<style scoped>
.body {
    display: grid;
    grid-template-columns: 1fr 3fr 2fr 3fr 1fr;
    margin-top: 31.6px;
    border-bottom: 4px solid #E5E5E5;
}
.body__text {
    color:#4E3000;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 7px;
}

</style>