<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <a href="javascript: void(0);" @click="up">上</a>
        <a href="javascript: void(0);" @click="down">下</a>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'App',
        methods: {
            up() {
                this.$router.go(-1);
            },
            down() {
                this.$router.go(1);
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
