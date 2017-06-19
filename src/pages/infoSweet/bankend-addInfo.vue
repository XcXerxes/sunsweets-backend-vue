<template>
  <section class="sweet-home__content animated bounceInRight">
    <sweet-bread title="添加甜品信息"></sweet-bread>
    <div class="sweet-content__module">
      <sweet-form v-on:submit="handleSubmit" v-on:cancel="handleCancel" :allCate="allCate" />
    </div>
  </section>
</template>
<script>
import sweetBread from '@/components/sweet-bread'
import sweetForm from '@/components/infoSweet/sweet-form'
import api from '@/api'
import {mapGetters} from 'vuex'
import {logoutView} from '@/utils'

export default {
  data() {
    return {

    }
  },
  computed:{
    ...mapGetters([
      'allCate'
    ])
  },
  methods: {
    handleSubmit(info) {
      info = Object.assign({},info,{
        thumb: info.thumb.substr(info.thumb.lastIndexOf('/')+1),
        shop_id: '22323123'
      })
      console.log(info)

      api.addSweetInfo(info).then(data => {
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
      /*api.addCateInfo(info).then(data => {
        if (data.code == 200) {
          this.$Message.success(data.message)
          this.$router.replace('/cate')
        } else if (data.code == -500) {

        } else {
          this.$Message.error(data.message)
        }
      }).catch(err => {
        this.$Message.error(err)
      })*/
    },
    handleCancel() {
      this.$router.replace('/sweet')
    }
  },
  created(){
    this.$store.dispatch('fetchAllCate').then(data => {
      if(data){
        if(data.code == -500){
          logoutView(this)
        }else {
          this.$Message.error(data.message)
        }
      }
    }).catch(err => {
      this.$Message.error(err)
    })
  },
  components: {
    sweetBread,
    sweetForm
  }
}
</script>
