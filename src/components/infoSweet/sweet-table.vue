<template>
    <Table :columns="columns" :data="data">
    </Table>
</template>

<script>
import clientConfig from '@/api/client-config'
import regionData from '@/utils/regionData' 
import _ from 'lodash'

export default {
    props: ['data'],
    data() {
        return {
            columns: [
                {
                    title: '缩略图',
                    align: 'center',
                    width:'100',
                    render: (h, params) => {
                        return h('img', {
                            attrs: {
                                src: params.row.thumb.startsWith('http') ? params.row.thumb : `${clientConfig.originalUrl}${params.row.thumb}`
                            },
                            style:{
                                width:'48px',
                                height: '48px',
                                verticalAlign: 'bottom',
                                borderRadius: '4px',
                                margin:'2px 0'
                            }
                        })
                    }
                },
                {
                    title: '标题',
                    align: 'center',
                    key: 'title',
                    ellipsis: true
                },
                {
                    title: '分类',
                    align: 'center',
                    ellipsis: true,
                    render: (h, params) =>{
                        return h('span', params.row.sweet_cate.title)
                    }
                },
                {
                    title: '描述',
                    align: 'center',
                    key: 'caption',
                    ellipsis: true
                },
                {
                    title: '地区',
                    align: 'center',
                    render: (h, params) => {
                        return h('span', this.transformIdToLabel(params.row.area))
                    }
                },
                {
                    title: '管理',
                    align: 'center',
                    key: 'action',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
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
                                    click: () => {
                                        this.edit(params.row)
                                    }
                                }
                            }, '编辑'),
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
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
    methods: {
        // 根据地区的id 返回值
        transformIdToLabel(id){
            const obj = _.find(regionData, (item) => item.value == id)
            if(obj){
                return obj.label
            }
            return id
        },
        show(row) {
            this.$emit('show', row)
        },
        edit(row) {
            this.$emit('edit', row)
        },
        remove(row) {
            this.$Modal.confirm({
                title: '对话框',
                content: '<p>确认删除吗?</p>',
                onOk: () => {
                    this.$emit('remove', row.id)
                },
                onCancel: () => {
                    
                }
            });
        }
    }
}
</script>
