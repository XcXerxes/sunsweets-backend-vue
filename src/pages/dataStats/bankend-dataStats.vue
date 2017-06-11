<template>
    <section class="sweet-home__content animated bounceInRight">
        <sweet-bread :breadInfo="breadInfo"></sweet-bread>
        <div class="sweet-content__module">
             
        </div>
    </section>
</template>
<script>
    import sweetBread from '@/components/sweet-bread'
    export default {
        data(){
            return {
                breadInfo:{
                    title:'数据统计'
                }
            }
        },
        components:{
            sweetBread
        }
    }

</script>
<style lang="">
    
</style>