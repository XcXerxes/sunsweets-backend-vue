<template>
    <section class="sweet-home__content animated bounceInRight">
        <sweet-bread :breadInfo="breadInfo"></sweet-bread>
        <div class="sweet-content__module">
             <carousel-table :data="list"></carousel-table>
             <div class="carousel-pagation">
                <Button type="primary" @click="addCarousel" >添加轮播图</Button>
                <Page :total="total" :page-size="limit" :current="currentPage" 
                :page-size-opts="[5, 10, 15]" show-elevator show-elevator show-sizer show-total />
             </div>
        </div>
    </section>
</template>
<script>
    import sweetBread from '@/components/sweet-bread'
    import carouselTable from '@/components/carousel/carousel-table'
    import api from '@/api'
    export default {
        data(){
            return {
                breadInfo:{
                    title:'轮播图列表'
                },
                currentPage:1,
                limit:5,
                total:0,
                list:[]
            }
        },
        methods:{
            addCarousel(){
                this.$router.push('/carousel/add')
            },
            // 获取数据
            fetchDataList({limit,currentPage,sort}){debugger
                api.getCarouselList({limit,currentPage,sort})
                    .then(data => {
                        if(data.code == 200){
                            this.list = data.data
                            this.total = data.total
                        }else if(data.code == -500){
                            this.$Message.error(data.message)
                        }else {
                            this.$Message.error(data.message)
                        }
                    }).catch(err => {
                        throw new Error(err)
                    })
            }
        },
        created(){
            this.fetchDataList({
                currentPage: this.currentPage,
                limit: this.limit
            })
        },
        components:{
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