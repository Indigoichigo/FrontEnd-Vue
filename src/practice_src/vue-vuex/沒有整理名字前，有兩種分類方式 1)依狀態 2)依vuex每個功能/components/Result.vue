<template>
    <div>
        <!-- 不用mapGetter的寫法 -->
        <!-- <p>Counter is: {{ counter }}</p>
        <p>Click Time is: {{ clicks }}</p> -->

        <!-- 用mapGetter的寫法 -->
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Click Time is: {{ stringCounter }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        // 不用mapGetter的寫法
        // computed:
            // {
            // counter() {
            //     return this.$store.getters.doubleCounter;
            // },
            // click() {
            //     return this.$store.getters.stringCounter;
            // }
            
        // }

        // 用mapGetter的寫法
        // computed: mapGetters([
        //         'doubleCounter',
        //         'stringCounter'
        //     ])

        // 用mapGetter的寫法外，再另外寫自己要寫的computed
        computed: {
            ...mapGetters([
                'doubleCounter',
                'stringCounter'
            ])
            //這裡可以再寫其他的computed
        }
    }
</script>