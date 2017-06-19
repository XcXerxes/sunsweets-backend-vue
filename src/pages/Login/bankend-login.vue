<template>
    <section class="container">
        <Spin fix v-if="spinShow">
            <Icon type="load-a" size=36 class="sunsweets-spin-icon-load"></Icon>
                <div>玩命加载中...</div>
        </Spin> 
        <div class="mask"></div>
        <div class="login animated bounceInDown" ref="login">
            <login-form v-on:submit-login="submitLogin" />
        </div>
    </section>
</template>

<script>
    import api from '@/api'
    import md5 from 'blueimp-md5'
    import loginForm from '@/components/Login/login-form'
    import {setCookie} from '@/utils'

    export default {
        data(){
            return {
                spinShow:true
            }
        },
        methods: {
            submitLogin(loginInfo){ 
                loginInfo = Object.assign(loginInfo,{
                    password: md5(loginInfo.password)
                })
                api.login(loginInfo).then(result => {
                    if(result.code == 200){
                        setCookie('sun_userid', result.data, 1/24*3)
                        this.$Message.success({
                            content: result.message
                        })
                        this.$router.push('/home')
                    }else {
                        this.$Message.error(result.message)
                    }
                    console.log(result)
                }).catch(err => {
                    this.$Message.error(err)
                })
            }
        },
        mounted(){
            //this.$ref.login.
            /*setTimeout(() =>{
                this.spinShow = false
            },1500)*/
        },
        created(){
            this.spinShow = false
        },
        components: {
            loginForm
        }
    }
</script>

<style lang="" scoped>
    .container {
        height:100%;
        display:flex;
        justify-content: center;
        position:relative;
        background:url('../../assets/images/cheesecake-743754_1920.jpg') no-repeat;
    }
    .mask{
        width:100%;
        height:100%;
        background-color: rgba(176, 216, 179, 0.3)
    }

    .login {
        position:absolute;
        top:28%;
        box-shadow: 0 0 2px #e2e2e2;
        width:460px;
        padding: 20px;
        background-color: #f9f9f9;
        border-radius: 5px;
    }
</style>