<template>
    <header class="sweet-header">
        <div class="sweet-header__logo">
            <i></i>
        </div>
        <div class="sweet-header__userInfo" @click="logout">
            <img class="sweet-header__userImg" :src="require('../assets/images/ai4gjet4l4tjpg.jpg')" />
            <Icon size="18" color="#c70000" type="power"></Icon>
        </div>
    </header>
</template>
<script>
    export default {
        methods: {
            logout(){
                this.$router.replace('/')
            }
        }
    }
</script>
<style lang="">
.sweet-header {
    height: 58px;
    line-height: 58px;
    background: #020202;
    /*background: #2d8cf0;*/
    display: flex;
}

.sweet-header__logo {
    flex: 0 1 180px;
    text-align: center;
}

.sweet-header__logo i {
    display: inline-block;
    width: 100px;
    height: 58px;
    line-height: 58px;
    background: url('../assets/images/logo.png') no-repeat;
    background-size: contain;
}

.sweet-header__userImg {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: aliceblue;
    margin-right: 16px;
}

.sweet-header__userInfo {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    padding-right: 3.5rem;
    cursor: pointer;
}
.sweet-header__userInfo i {
    
}

</style>