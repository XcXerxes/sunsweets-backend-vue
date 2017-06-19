<template>
    <Form :label-width="80">
        <Form-item label="标题：">
            <Row>
                <Col :span="8" v-if="carouselInfo"> {{carouselInfo.title}}
                </Col>
            </Row>
        </Form-item>
        <Form-item label="描述：">
            <Row>
                <Col :span="8" v-if="carouselInfo"> {{carouselInfo.title}}
                </Col>
            </Row>
        </Form-item>
        <Form-item label="轮播图片：">
            <Row>
                <Col :span="8">
                <img :src="computedImg" alt='' @click="openImg" class="sweet-img" />
                <Modal title="查看图片" v-model="visible">
                    <img :src="computedImg" v-if="visible" style="width: 100%">
                </Modal>
                </Col>
            </Row>
        </Form-item>
    </Form>
</template>
<script>
import clientConfig from '@/api/client-config'
export default {
    props: ['carouselInfo'],
    data() {
        return {
            visible: false
        }
    },
    computed: {
        computedImg() {
            const { img } = this.carouselInfo
            if (img.startsWith('http')) {
                return img
            }
            return `${clientConfig.originalUrl}${img}`
        }
    },
    methods: {
        openImg() {
            this.visible = true
        }
    }
}
</script>
<style scoped>
    .sweet-img {
        width: 60px;
        height: 60px;
        border-radius: 4px;
        vertical-align: bottom;
        cursor: pointer;
    }
</style>

