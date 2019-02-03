<template>
    <div>
        <div class="cal_header">
            <p @click="propshandleLastMonth()">上個月</p>
            <p>{{ propsYear }}-{{ propsMonth }}</p>
            <p @click="propshandleNextMonth()">下個月</p>
        </div>
        <ul class="cal_weekday">
            <li v-for="n in weekArr" :key="n">{{ n }}</li>
        </ul>
    </div>
</template>

<script>
    
    export default {
        props: {
            propsYear: Number,
            propsMonth: Number,
            propshandleLastMonth: Function,
            propshandleNextMonth: Function,
        },
        data() {
            return {
                weekArr: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            }
        },
        
    }

</script>

<style scoped>
    .cal_header {
        width: 100%;
        font-size: 0;
        text-align: center;
    }

    .cal_header > p:first-child,
    .cal_header > p:last-child {
        display: inline-block;
        vertical-align: middle;
        width: 20%;
        font-size: 16px;
    }

    .cal_header > p:nth-child(2) {
        display: inline-block;
        vertical-align: middle;
        width: 60%;
        font-size: 16px;
    }

    .cal_weekday {
        text-align: center;
        display: flex;
    }

    .cal_weekday > li {
        flex: 14.26
    }

</style>