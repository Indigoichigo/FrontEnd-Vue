<template>
    <div>
        <Calendar></Calendar>
    </div>
</template>

<script>
    import Calendar from './Calendar.vue';

    export default {
        components: {
            Calendar
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        /* outline: red 1px solid */
    }

    ul, li {
        list-style: none;
    }
</style>