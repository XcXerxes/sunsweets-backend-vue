<template>
    <section class="sweet-home__content animated bounceInRight">
        <sweet-bread :breadInfo="breadInfo"></sweet-bread>
        <div class="sweet-content__module">
             <carousel-table :data="list"></carousel-table>
             <div class="carousel-pagation">
                <Button type="primary">添加轮播图</Button>
                <Page :total="total" :page-size="pageSize" :current="current" 
                :page-size-opts="[5, 10, 15]" show-elevator show-elevator show-sizer show-total />
             </div>
        </div>
    </section>
</template>
<script>
    import sweetBread from '@/components/sweet-bread'
    import carouselTable from '@/components/carousel/carousel-table'
    export default {
        data(){
            return {
                breadInfo:{
                    title:'轮播图上传'
                },
                current:1,
                pageSize:5,
                total:0,
                list:[]
            }
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