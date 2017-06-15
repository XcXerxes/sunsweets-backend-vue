<template>
    <section class="sweet-home__content animated bounceInRight">
        <sweet-bread title="甜品信息列表" />
        <div class="sweet-content__module">
            <sweet-table v-on:show="show" v-on:edit="edit" v-on:remove="remove" :data="data"></sweet-table>
            <div class="sweet-pagation">
                <Button type="primary" @click="addSweet">添加甜品信息</Button>
                <Page :total="total" :page-size="limit" :current="currentPage" :page-size-opts="[5,10,15]" show-elevator show-elevator show-sizer show-total @on-change="pageChange" @on-page-size-change="pageSizeChange" />
            </div>
        </div>
    </section>
</template>
<script>
import sweetBread from '@/components/sweet-bread'
import sweetTable from '@/components/infoSweet/sweet-table'
import api from '@/api'

export default {
    data() {
        return {
            total: 0,
            currentPage: 1,
            limit: 5,
            data: []
        }
    },
    methods: {
        addSweet(){
            this.$router.push('/sweet/add')
        },
        show(row){
            this.$router.push({name:'viewSweet',params: {id:row.id, row}})
        },
        edit(row){
            this.$router.push({name:'editSweet',params: {id:row.id, row}})
        },
        remove(id){

        },
        fetchDataList({currentPage, limit, sort}){

        }
    },
    created(){

    },
    components: {
        sweetBread,
        sweetTable
    }
}

</script>
<style scoped>
    .sweet-pagation{
        display: flex;
        justify-content: space-between;
        padding: 20px;
    }
</style>

