<template>
  <section class="sweet-home__content animated bounceInRight">
    <sweet-bread title="修改甜品信息"></sweet-bread>
    <div class="sweet-content__module">
      <sweet-form :sweetInfo="sweetInfo" v-on:submit="handleSubmit" v-on:cancel="handleCancel" :allCate="allCate"></sweet-form>
    </div>
  </section>
</template>
<script>
  import sweetBread from '@/components/sweet-bread'
  import sweetForm from '@/components/infoSweet/sweet-form'
  import {mapGetters} from 'vuex'
  import api from '@/api'
  import {logoutView} from '@/utils'

  export default  {
    data(){
      return {
        sweetInfo: {}
      }
    },
    computed: {
      ...mapGetters([
        'allCate'
      ])
    },
    methods: {
      handleSubmit(info){
        let {thumb} = info
        info = Object.assign({}, info,  {
          thumb: thumb.startsWith('http') ? thumb.substr(thumb.lastIndexOf('/')+1) :thumb,
        })
        api.updateSweetInfo(info).then(data => {
          if(data.code == 200){
            this.$Message.success(data.message)
            this.$router.replace('/sweet')
          }else if(data.code == -500){
            logoutView(this)
          }else {
            this.$Message.error(data.message)
          }
        }).catch(err => {
          this.$Message.error(err)
        })
      },
      handleCancel(){
        this.$router.replace('/sweet')
      }
    },
    created(){
      const row = this.$route.params.row
      if(row){
        this.sweetInfo = Object.assign({}, row)
      }
      this.$store.dispatch('fetchAllCate')
    },
    components: {
      sweetBread,
      sweetForm
    }
  }
</script>
