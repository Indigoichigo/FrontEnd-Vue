<template>
    <div class="container">
        <Header></Header>
        <div class="row">
            <div class="col-xs-12">
                <router-view></router-view>
            </div>
        </div>
        
    </div>
</template>

<script>
    import Header from './components/Header';
    export default {
        components: {
            Header
        }
    }
</script>

<style>
    h1 {
        padding: 30px
    }
</style>
