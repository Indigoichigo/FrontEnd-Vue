<template>
    <div>
        <!-- 單一參數 -->
        <button class="btn btn-primary" @click="increment(100)">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>

        <!-- 多個參數傳物件 -->
        <button class="btn btn-primary" @click="asyncIncrement">asyncIncrement</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 50, duration: 1000})">asyncDecrement</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex';
    export default {
        methods: {
            // 用mapActions
            ...mapActions([
                'increment',
                'decrement',
                'asyncIncrement',
                'asyncDecrement'
            ])

            // 用mapMutation，再另外寫自己要寫的methods
            // ...mapMutations([
            //     'increment',
            //     'decrement'  
            // ]),

            // 用mutation要用commit
            // increment() {
            //     this.$store.commit('increment');
            // },
            // decrement() {
            //     this.$store.commit('decrement');
            // }

            // 一般方式，不用mutation
            // increment() {
            //     this.$store.state.counter++;
            // },
            // decrement() {
            //     this.$store.state.counter--;
            // }
        }
    }
</script>