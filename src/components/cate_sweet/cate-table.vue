<template>
  <Table :columns="columns" :data="data"> ></Table>   
</template>
<script>
  export default {
    props:[],
    data(){
      return {
        columns:[
          {
            title:'分类名称',
            align:'center',
            key:'title'
          },
          {
            title: '分类排序',
            align: 'center',
            key: 'sweet_order'
          },
          {
            title: '创建时间',
            align: 'center',
            key: 'createdAt',
            render: (h,params) =>{
              return h('span', moment(params.row.createdAt).format('YYYY-MM-DD HH-mm-ss'))
            }
          },
        ]
      }
    },
    methods:{
     
    }
  }
</script>
