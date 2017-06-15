<template>
  <section class="sweet-home__content animated bounceInRight">
    <sweet-bread title="查看轮播图片"></sweet-bread>
    <div class="sweet-content__module">
      <carousel-info :carouselInfo="carouselInfo"></carousel-info>
    </div>
  </section>
</template>
<script>
import sweetBread from '@/components/sweet-bread'
import carouselInfo from '@/components/carousel/carousel-info'
import api from '@/api'

export default {
  data() {
    return {
      carouselInfo:{}
    }
  },
  methods: {

  },
  created() {
    const { row } = this.$route.params
    console.log(row)
    if (row) {
      this.carouselInfo = Object.assign({}, row)
    }
  },
  components: {
    sweetBread,
    carouselInfo
  }
}
</script>