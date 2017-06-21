<template>
    <section class="sweet-home__content animated bounceInRight">
        <sweet-bread title="轮播图列表"></sweet-bread>
        <div class="sweet-content__module">
            <carousel-table :data="list" v-on:show-carousel="showCarousel" v-on:edit-carousel="editCarousel" v-on:remove-carousel="removeCarousel" />
            <div class="carousel-pagation">
                <Button type="primary" @click="addCarousel" :disabled="total>5">添加轮播图</Button>
                <Page :total="total" :page-size="limit" :current="currentPage" :page-size-opts="[5, 10, 15]" show-elevator show-elevator show-sizer show-total @on-change="pageChange" @on-page-size-change="pageSizeChange" />
            </div>
        </div>
    </section>
</template>
<script>
import sweetBread from '@/components/sweet-bread'
import carouselTable from '@/components/carousel/carousel-table'
import api from '@/api'
import { logoutView } from '@/utils'

export default {
    data() {
        return {
            currentPage: 1,
            limit: 5,
            total: 0,
            list: []
        }
    },
    methods: {
        //查看
        showCarousel(row) {
            this.$router.push({ name: 'viewCarousel', params: { row } })
        },
        // 编辑
        editCarousel(row) {
            this.$router.push({ name: 'editCarousel', params: { row } })
        },
        // 删除
        removeCarousel(id) {
            api.removeCarouselById(id).then(data => {
                if (data.code == 200) {
                    this.$Message.success(data.message)
                    this.$router.replace('/carousel')
                    this.fetchDataList({
                        limit: this.limit,
                        currentPage: this.currentPage
                    })
                } else if (data.code == -500) {
                    logoutView(this)
                } else {
                    this.$Message.error(data.message)
                }
            }).catch(err => {
                this.$Message.error(err)
            })
        },
        // 添加
        addCarousel() {
            this.$router.push('/carousel/add')
        },
        // 页码改变时
        pageChange(currentPage) {
            this.currentPage = currentPage
            this.fetchDataList({ limit: this.limit, currentPage })
        },
        // 条数改变时
        pageSizeChange(limit) {
            this.limit = limit
            this.fetchDataList({ limit, currentPage: this.currentPage })
        },
        // 获取数据
        fetchDataList({ limit, currentPage, sort }) {
            api.getCarouselList({ limit, currentPage, sort })
                .then(data => {
                    if (data.code == 200) {
                        this.list = data.data
                        this.total = data.total
                    } else if (data.code == -500) {
                        logoutView(this)
                    } else {
                        this.$Message.error(data.message)
                    }
                }).catch(err => {
                    this.$Message.error(err)
                })
        }
    },
    created() {
        this.fetchDataList({
            currentPage: this.currentPage,
            limit: this.limit
        })
    },
    components: {
        sweetBread,
        carouselTable
    }
}

</script>
<style lang="" scoped>
.carousel-pagation {
    display: flex;
    justify-content: space-between;
    padding: 20px;
}
</style>