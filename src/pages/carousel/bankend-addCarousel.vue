<template>
  <section class="sweet-home__content animated bounceInRight">
    <sweet-bread title="添加轮播图片"></sweet-bread>
    <div class="sweet-content__module">
      <carousel-form status="add" v-on:submit="handleSubmit" v-on:cancel="cancel"></carousel-form>
    </div>
  </section>
</template>
<script>
import sweetBread from '@/components/sweet-bread'
import carouselForm from '@/components/carousel/carousel-form'
import api from '@/api'

export default {
  data() {
    return {

    }
  },
  methods: {
    // 取消
    cancel() {
      this.$router.replace('/carousel')
    },
    handleSubmit(info) {
      debugger
      api.createCarousel(info).then(result => {
        if (result.code == 200) {
          this.$Message.success(result.message)
          this.$router.replace('/carousel')
        }
      })
    },
  },
  components: {
    sweetBread,
    carouselForm
  }
}
</script>