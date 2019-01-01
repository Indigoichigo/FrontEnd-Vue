<template>
    <div>
        <ListItem></ListItem>
        <ul>
            <li v-for="(n, index) in propsListOfItems"
                 :key="n.itemId">{{ n.itemContent }}      
                <span @click="propsRemoveItem(index)">remove</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import ListItem from './ListItem.vue';
    
    export default {
        props: {
            propsListOfItems: Array,
            propsRemoveItem: Function
        },
        components: {
            ListItem
        },
        methods: {
            tryconsole: function() {
                console.log(propsListOfItem);
            }
        }

    }
</script>

<style>

</style>