<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <hr>
                <app-counter></app-counter>
                <hr>

                <!-- 模擬two-way binding 用:和@-->
                <!-- <input type="text" :value="value" @input="changeValue">
                <p>{{ value }}</p> -->

                <!-- 模擬two-way binding 只用v-model -->
                <input type="text" v-model="value">
                <p>{{ value }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import Result from './components/Result.vue';

    

    export default {
        // 模擬two-way binding 用:和@
        // computed: {
        //     value() {
        //         return this.$store.getters.getValue
        //     }
        // },
        // methods: {
        //     changeValue(event) {
        //         this.$store.dispatch('updateValue', event.target.value)
        //     }
        // },

        // 模擬two-way binding 只用v-model
        computed: {
            value: {
                get() {
                    return this.$store.getters.getValue
                },
                set(value) {
                    this.$store.dispatch('updateValue', event.target.value)
                }
            }
        },
        components: {
            appCounter: Counter,
            appResult: Result,
        }
    }
</script>

