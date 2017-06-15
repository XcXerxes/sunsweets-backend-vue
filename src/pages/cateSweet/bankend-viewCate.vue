<template>
    <section class="sweet-home__content animated bounceInDown">
        <sweet-bread title="查看分类信息"></sweet-bread>
        <div class="sweet-content__module">
            <cate-info :cateInfo="cateInfo"></cate-info>
        </div>
    </section>
</template>
<script>
import sweetBread from '@/components/sweet-bread'
import cateInfo from '@/components/cateSweet/cate-info'

export default {
    data() {
        return {
            cateInfo: {}
        }
    },
    created() {
        const { row } = this.$route.params
        if (row) {
            this.cateInfo = Object.assign({}, row)
        }
    },
    components: {
        sweetBread,
        cateInfo
    }
}
</script>
