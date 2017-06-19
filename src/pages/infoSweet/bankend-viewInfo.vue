<template>
  <section class="sweet-home__content animated bounceInRight">
    <sweet-bread title="甜品信息" />
    <div class="sweet-content__module">
      <sweet-info :sweetInfo="sweetInfo"></sweet-info>
    </div>
  </section>
</template>

<script>
import sweetBread from '@/components/sweet-bread'
import sweetInfo from '@/components/infoSweet/sweet-info'
import regionData from '@/utils/regionData'
import clientConfig from '@/api/client-config'
import api from '@/api'
import _ from 'lodash'

export default {
  data() {
    return {
      sweetInfo: {}
    }
  },
  created() {
    const { row } = this.$route.params
    if (row) {
      const obj = _.find(regionData, (item) => item.value == row.area)
      this.sweetInfo = Object.assign({}, row, {
        area: obj ? obj.label : row.area,
        thumb: row.thumb.startsWith('http') ? row.thumb : `${clientConfig.originalUrl}${row.thumb}`
      })
    }
  },
  components: {
    sweetBread,
    sweetInfo
  }
}
</script>