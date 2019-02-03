<template>
    <div>
        <input type="text" class="add_item" v-model="newItemContent">
        <button @click="propsAddItem(newItemContent)">Add Item</button>
        <button @click="propsRemoveAll()">Remove All</button>
    </div>
</template>

<script>
    import AddItem from './AddItem.vue';
    
    export default {
        data() {
            return {
                newItemContent: ''
            }
        },
        props: {
            propsAddItem: Function,
            propsRemoveAll: Function
        },
        components: {
            AddItem
        }
    }
</script>

<style scoped>

</style>