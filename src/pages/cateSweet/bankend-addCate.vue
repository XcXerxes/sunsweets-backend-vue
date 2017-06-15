<template>
  <section class="sweet-home__content animated bounceInRight">
    <sweet-bread title="添加分类信息"></sweet-bread>
    <div class="sweet-content__module">
      <cate-form v-on:submit="handleSubmit" v-on:cancel="handleCancel" />
    </div>
  </section>
</template>
<script>
import sweetBread from '@/components/sweet-bread'
import cateForm from '@/components/cateSweet/cate-form'
import api from '@/api'

export default {
  data() {
    return {

    }
  },
  methods: {
    handleSubmit(info) {
      api.addCateInfo(info).then(data => {
        if (data.code == 200) {
          this.$Message.success(data.message)
          this.$router.replace('/cate')
        } else if (data.code == -500) {

        } else {
          this.$Message.error(data.message)
        }
      }).catch(err => {
        this.$Message.error(err)
      })
    },
    handleCancel() {
      this.$router.replace('/cate')
    }
  },
  components: {
    sweetBread,
    cateForm
  }
}
</script>
