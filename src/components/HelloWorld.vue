<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <router-link to="/Home">Home</router-link>
        <router-link to="/About">About</router-link>
        <a-button type="primary" @click="test">测试</a-button>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data() {

            return {}
        },
        mounted() {
            this.initData()
        },
        methods: {
            initData() {
                console.log('初始化')
            },
            test() {
                this.$message.success('测试')
                this.$router.push({
                    path: 'Home',
                    query: {
                        id: '124578'
                    }
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
