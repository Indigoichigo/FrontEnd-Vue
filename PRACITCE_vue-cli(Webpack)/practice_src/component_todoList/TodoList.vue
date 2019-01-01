<template>
<div>
    <h1>TodoList</h1>
    <AddItem
        :propsAddItem="handleAddItem"
        :propsRemoveAll="handleRemoveAll">
    </AddItem>
    <List
        :propsListOfItems="listOfItems"
        :propsRemoveItem="handleRemoveItem"
        >
    </List>
</div>
</template>

<script>
import AddItem from './AddItem.vue';
import List from './List.vue';

export default {
    data: function() {
        return {
            itemId: 1,
            listOfItems: [
                {
                    itemId: 0,
                    itemContent: 'test1'
                }
            ]
        }
    },
    methods: {
        handleAddItem(inputItem) {
            this.listOfItems.push({ 
                itemId: this.itemId++,
                itemContent: inputItem,
            }) 
        },
        handleRemoveItem(removeId) {
            this.listOfItems.splice(removeId, 1);
        },
        handleRemoveAll() {
            this.listOfItems = []
        }
    },
    components: {
        AddItem,
        List
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
</style>