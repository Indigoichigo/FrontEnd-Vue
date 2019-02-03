<template>
        <ul class="cal_weekday">
            <li v-for="(n, index) in propsMonthArr" :key="index">{{ n }}</li>
        </ul>
</template>

<script>
    export default {
        props: {
            propsMonthArr: Array,
        },
        mounted: function() {
            this.$emit('initRenderMonthDays')
        }
    }
</script>

<style scoped>
    .cal_weekday {
        width: 100%;
        text-align: center;
    }

    .cal_weekday::after {
        content: '';
        display: block;
        clear: both
    }

    .cal_weekday > li {
        float: left;
        width: 14.26%;
    }
</style>