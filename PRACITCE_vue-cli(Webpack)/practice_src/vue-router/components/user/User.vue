<template>
    <div>
        <h1>The User Page</h1>
        <router-view></router-view>
        <button @click="goHomePage" class="btn btn-primary">Go Home</button>
    </div>
</template>

<script>
export default {
    methods: {
        goHomePage: function() {
            this.$router.push({ name: 'home' })
        }
    }
}
</script>
