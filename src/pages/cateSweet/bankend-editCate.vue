<template>
  <section class="sweet-home__content animated bounceInRight">
    <sweet-bread title="编辑分类信息"></sweet-bread>
    <div class="sweet-content__module">
      <cate-form :cateInfo="cateInfo" v-on:submit="handleSubmit" v-on:cancel="handleCancel" />
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
      cateInfo: {}
    }
  },
  methods: {
    handleSubmit(info) {
      api.updateCateInfo(info).then(data => {
        if (data.code == 200) {
          this.$Message.success(data.message)
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
  created() {
    const { row } = this.$route.params
    if (row) {
      this.cateInfo = Object.assign({}, row)
    }
  },
  components: {
    sweetBread,
    cateForm
  }
}
</script>
