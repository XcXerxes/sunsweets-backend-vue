<template>
  <section class="sweet-home__content animated bounceInRight">
    <sweet-bread title="分类列表"></sweet-bread>
    <div class="sweet-content__module">
      <cate-table :data="cateList" v-on:show="show" v-on:edit="edit" v-on:remove="remove" />
      <div class="cate-pagation">
        <Button type="primary" @click="addCate">添加分类</Button>
        <Page :total="total" :page-size="limit" :current="currentPage" :page-size-opts="[5,10,15]" show-elevator show-elevator show-sizer show-total @on-change="pageChange" @on-page-size-change="pageSizeChange" />
      </div>
    </div>
  </section>
</template>
<script>
import sweetBread from '@/components/sweet-bread'
import cateTable from '@/components/cateSweet/cate-table'
import {mapGetters} from 'vuex'
import api from '@/api'

export default {
  data() {
    return {
     /* data: [],
      total: 0,*/
      limit: 5,
      currentPage: 1
    }
  },
  computed: {
  // 使用对象展开运算符将 getters 混入 computed 对象中
    ...mapGetters([
      'cateList',
      'total',
      // ...
    ])
  },
  methods: {
    // 查看
    show(row) {
      debugger
      this.$router.push({ name: 'viewCate', params: { id: row.id, row } })
    },
    // 编辑
    edit(row) {
      debugger
      this.$router.push({ name: 'editCate', params: { id: row.id, row } })
    },
    // 删除
    remove(id) {
      api.deleteCateInfo(id).then(data => {
        if (data.code == 200) {
          this.$Message.success(data.message)
          const { limit, currentPage } = this
          this.fetchDataList({ limit, currentPage })
        } else if (data.code == -500) {

        } else {
          this.$Message.error(data.message)
        }
      }).catch(err => {
        this.$Message.error(err)
      })
    },
    // 添加
    addCate() {
      this.$router.push('/cate/add')
    },
    // 页码改变
    pageChange(currentPage) {
      this.currentPage = currentPage
      this.$store.dispatch('fetchCateList',{
        currentPage,
        limit: this.limit
      })
      /*this.fetchDataList({
        currentPage,
        limit: this.limit
      })*/
    },
    // 条数改变
    pageSizeChange(limit) {
      this.limit = limit
      this.$store.dispatch('fetchCateList',{
        limit,
        currentPage: this.currentPage,
      })
     /* this.fetchDataList({
        limit,
        currentPage: this.currentPage,
      })*/
    },
    /*// 获取列表
    fetchDataList({ currentPage, limit, sort }) {
      console.log('fetchDataList')
      api.getCateList({ currentPage, limit, sort })
        .then(data => {
          console.log(data)
          if (data.code == 200) {
            this.total = data.total
            this.data = data.data
          } else if (data.code == -200) {
            this.$Message.error(data.message)
          } else if (data.code == -500) {

          } else {
            this.$Message.error(data.message)
          }
        }).catch(err => {
          this.$Message.error(err)
        })
    }*/
  },
  created() {
    const { limit, currentPage } = this
    this.$store.dispatch('fetchCateList',{limit, currentPage}).then(data=>{

    }).catch(err => {

    })
    /*this.fetchDataList({ limit, currentPage })*/
  },
  components: {
    sweetBread,
    cateTable
  }
}
</script>
<style scoped>
.cate-pagation {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
</style>
