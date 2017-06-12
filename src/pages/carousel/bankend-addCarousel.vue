<template>
    <section class="sweet-home__content animated bounceInRight">
        <sweet-bread :breadInfo="breadInfo"></sweet-bread>
        <div class="sweet-content__module">
             <carousel-form status="add"></carousel-form>
        </div>
    </section>
</template>
<script>
  import sweetBread from '@/components/sweet-bread'
  import carouselForm from '@/components/carousel/carousel-form'

  export default {
    data(){
      return {
        breadInfo:{
          title: '添加轮播图片'
        }
      }
    },
    components: {
      sweetBread,
      carouselForm
    }
  }
</script>