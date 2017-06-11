<template>
    <div>
        <sun-header></sun-header>
        <sun-menu></sun-menu>
        <router-view></router-view>
    </div>
</template>
<script>
    import sunHeader from '@/components/Header'
    import sunMenu from '@/components/Menu'

    export default {
        data(){
            return {
                aniClass:''
            }
        },
        updated(){
            this.aniClass= 'bounceInRight'
        },
        created(){ 
        console.log('mounte')
            this.aniClass= 'bounceInRight'
        },
        components: {
            sunHeader,
            sunMenu
        }
    }
    
</script>

