<template>
  <Form :label-width="80">
      <Form-item label="标题：">
        <Row>
            <Col :span="8" v-if="carouselInfo">
                {{carouselInfo.title}}
            </Col>
        </Row>
      </Form-item>
      <Form-item label="描述：">
        <Row>
            <Col :span="8" v-if="carouselInfo">
                {{carouselInfo.title}}
            </Col>
        </Row>
      </Form-item>
      <Form-item label="轮播图片：">
        <Row>
            <Col :span="8">
                <img :src="computedImg" alt='' />
            </Col>
        </Row>
      </Form-item>
  </Form>
</template>
<script>
    import clientConfig from '@/api/client-config'
    export default {
        props:['carouselInfo'],
        computed: {
            computedImg(){
                const {img} = this.carouselInfo
                if(img.startsWith('http')){
                    return img
                }
                return `${clientConfig.originalUrl}${img}`
            }
        }
    }
</script>
