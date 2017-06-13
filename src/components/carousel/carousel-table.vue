<template>
    <Table :columns="columns" :data="data">
    </Table>
</template>

<script>
import moment from 'moment'
import clientConfig from '@/api/client-config'
export default {
    props: ['data'],
    data() {
        return {
            columns: [
                {
                    title: '缩略图',
                    key: 'img',
                    align: 'center',
                    render: (h, params) => {
                        debugger
                        return h('img', {
                            attrs: {
                                src: params.row.img.startsWith('http') ? params.row.img : `${clientConfig.originalUrl}${params.row.img}`
                            },
                            style: {
                                width: '80px',
                                height: '48px'
                            }
                        });
                    }
                },
                {
                    title: '标题',
                    key: 'title',
                    align: 'center',
                    ellipsis: true
                },
                {
                    title: '描述',
                    key: 'caption',
                    align: 'center',
                    ellipsis: true
                },
                {
                    title: '创建时间',
                    key: 'createdAt',
                    align: 'center',
                    ellipsis: true,
                    render: (h, params) => {
                        return h('span', moment(params.row.createdAt).format('YYYY-MM-DD HH-mm-ss'))
                    }
                },
                {
                    title: '管理',
                    key: 'action',
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.show(params)
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
                                        this.edit(params)
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
                                        this.remove(params.row.id)
                                    }
                                }
                            }, '删除')
                        ]);
                    }
                }
            ],
        }
    },
    methods: {
        show(params) {
            this.$emit('show-carousel', params.row)
            console.log(params)
        },
        remove(id) {
            this.$Modal.confirm({
                title: '对话框',
                content: '<p>确认删除吗?</p>',
                onOk: () => {
                    this.$emit('remove-carousel', id)
                },
                onCancel: () => {

                }
            });
            console.log(id)
        },
        edit(params) {
            this.$emit('edit-carousel', params.row)
            console.log(params)
        }
    }
}
</script>