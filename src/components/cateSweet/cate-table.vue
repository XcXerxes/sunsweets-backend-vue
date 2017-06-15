<template>
  <Table :columns="columns" :data="data"> ></Table>   
</template>
<script>
  import moment from 'moment'
  export default {
    props:['data'],
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
              return h('span', moment(params.row.createdAt).format('YYYY-MM-DD HH:mm:ss'))
            }
          },
          {
            title: '管理',
            align: 'center',
            key: 'action',
            render: (h,params) =>{
              return h('div',[
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  on:{
                    click: ()=>{
                      this.show(params.row)
                    }
                  }
                }, '查看'),
                h('Button', {
                    props: {
                      size: 'small'
                    },
                    style: {
                      margin: '0 5px'
                    },
                    on: {
                      click: () =>{
                        this.edit(params.row)
                      }
                    }
                }, '编辑'),
                h('Button', {
                  props: {
                    type:'error',
                    size: 'small'
                  },
                  on: {
                    click: () =>{
                      this.remove(params.row)
                    }
                  }
                }, '删除')
              ])
            }
          },
        ]
      }
    },
    methods:{
     show(){

     },
     edit(){

     },
     remove(){
       
     }
    }
  }
</script>
