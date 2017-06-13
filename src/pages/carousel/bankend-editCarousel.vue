<template>
    <section class="sweet-home__content animated bounceInRight">
        <sweet-bread title="编辑轮播图片"></sweet-bread>
        <div class="sweet-content__module">
            <carousel-form :carouselInfo="carouselInfo"  status="add" v-on:submit="handleSubmit"></carousel-form>
        </div>
    </section>
</template>
<script>
    import sweetBread from '@/components/sweet-bread'
    import carouselForm from '@/components/carousel/carousel-form'
    import api from '@/api'
    export default {
        data(){
            return {
                carouselInfo: {}
            }
        },
        methods:{
            // 修改轮播图
            handleSubmit(info){
                console.log(info)
               api.updateCarousel(info).then(data => {
                    if(data.code === 200){
                        this.$Message.success(data.message)
                        this.$router.replace('/carousel')
                    }else if(data.code == -200){
                        this.$Message.error(data.message)
                    }else {
                        this.$Message.error(data.message)
                    }
                })
            }
        },
        created(){
            const {row} = this.$route.params
            console.log(row)
            if(row){
                this.carouselInfo = Object.assign({},row)
            }
        },
        components:{
            sweetBread,
            carouselForm
        }
    }
</script>