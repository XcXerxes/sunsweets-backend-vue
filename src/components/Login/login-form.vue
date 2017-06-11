<template>
    <Form ref="loginForm" :rules="rules" :model="loginForm">
        <Form-item>
            <div class="login-form__img">
                <img :src="loginSrc" alt="">
            </div>
        </Form-item>
        <Form-item prop="username">
            <Input v-model="loginForm.username" placeholder="用户名" />
        </Form-item>
        <Form-item prop="password">
            <Input v-model="loginForm.password" type="password" placeholder="密码" />
        </Form-item>
        <Form-item>
            <Button type="success" long @click="handleSubmit('loginForm')">提交</Button>
        </Form-item>
    </Form>
</template>

<script>
    export default {
        data(){
            return {
                loginForm:{
                    username:'',
                    password:''
                },
                rules:{
                    username:[
                        {required:true, message:'用户名不能为空',trigger:'blur'}
                    ],
                    password:[
                        {required:true, message:'密码不能为空',trigger:'blur'}
                    ]
                },
                loginSrc:require('../../assets/images/logo.png')
            }
        },
        methods:{
            handleSubmit(formName){
                this.$refs[formName].validate(valid => {
                    if(valid){
                        this.$emit('submit-login',this.loginForm)
                        console.log('submit success!!!!')
                    }
                })
            }
        }
    }
</script>
<style lang="" scoped>
    .login-form__img {
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .login-form__img img {
        width:50%;
    }
</style>