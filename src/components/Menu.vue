<template>
    <div class="sunsweet-menu" :class="isSpread ? 'spread':'close'">
        <div @click="switchSpread" class="sunsweet-menu__icon" ><Icon color="#2d8cf0" type="navicon-round"></Icon></div>
        <Menu :active-name="actName" width="auto" class="sunsweet-menu__main" @on-select="switchRoute">
            <Menu-item name="/home">
                <Icon size="18" type="home"></Icon>
                {{isSpread ? '首页' : ''}}
            </Menu-item>
            <Menu-item name="/carousel">
                <Icon  size="18" type="images"></Icon>
                {{isSpread ? '轮播图管理' : ''}}
            </Menu-item>
            <Menu-item name="/cate">
                <Icon size="18" type="ios-browsers"></Icon>
                {{isSpread ? '分类管理' : ''}}
            </Menu-item>
            <Menu-item name="/sweet">
                <Icon size="18" type="ios-paper"></Icon>
                {{isSpread ? '甜品管理' : ''}}
            </Menu-item>
            <Menu-item name="/set">
                <Icon size="18" type="ios-gear"></Icon>
                {{isSpread ? '设置' : ''}}
            </Menu-item>
        </Menu>
    </div>
</template>
<script>
import router from '@/router'
import {mapGetters} from 'vuex'

export default {
    data() {
        return {
            actName: '/home',
        }
    },
    computed:{
        ...mapGetters([
            'isSpread'
        ])
    },
    methods: {
        switchRoute(name) {
            this.$router.push(name)
        },
        switchSpread(){
            this.$store.commit('switchMenu')
        }
    },
    created() {
        this.actName = this.$route.path
        //this.switchRoute(this.$route.path)
        //debugger
    }
}
</script>
<style lang="" scoped>
/*.ivu-menu-item{
        text-align:left;
    }*/

.sunsweet-menu__main{
    height:inherit;
}
.sunsweet-menu {
    height: 100vh;
    /*width:180px;*/
    position: relative;
}
.sunsweet-menu.spread {
    width:180px;
    transition: all .3s ease;
}
.sunsweet-menu.close {
    width:50px;
    transition: all .3s ease;
}

.sunsweet-menu__icon {
    position: absolute;
    z-index: 1000;
    right: -16px;
    font-size: 1.4rem;
    top: -7px;
    cursor: pointer
}
</style>