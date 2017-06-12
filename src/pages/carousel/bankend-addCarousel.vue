<template>
    <section class="sweet-home__content animated bounceInRight">
        <sweet-bread :breadInfo="breadInfo"></sweet-bread>
        <div class="sweet-content__module">
             <carousel-form status="add" v-on:submit="handleSubmit"></carousel-form>
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
        breadInfo:{
          title: '添加轮播图片'
        }
      }
    },
    methods: {
      handleSubmit(info){debugger
        api.createCarousel(info).then(result => {
          if(result.code == 200){
            this.$Message.success(result.message)
          }
        })
      }
    },
    components: {
      sweetBread,
      carouselForm
    }
  }
</script>