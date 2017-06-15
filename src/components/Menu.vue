<template>
    <Menu active-name="/home" width="180px" class="sunsweet-menu" @on-select="switchRoute">
        <Menu-item name="/home">
            <Icon type="home"></Icon>
            首页    
        </Menu-item>
        <Menu-item name="/carousel">
            <Icon type="images"></Icon>
            轮播图管理
        </Menu-item>
        <Menu-item name="/cate">
            <Icon type="ios-browsers"></Icon>
            分类管理
        </Menu-item>
        <Menu-item name="/info">
            <Icon type="ios-paper"></Icon>
            甜品管理
        </Menu-item>
        <Menu-item name="/set">
            <Icon type="ios-gear"></Icon>
            设置
        </Menu-item>
    </Menu>
</template>
<script>
    import router from '@/router'
    export default {
        data(){
            return {

            }
        },
        methods: {
            switchRoute(name){
                this.$router.push(name)
            }
        }
    }
</script>
<style lang="" scoped>
    /*.ivu-menu-item{
        text-align:left;
    }*/
    .sunsweet-menu{
        height:100vh;
    }
</style>