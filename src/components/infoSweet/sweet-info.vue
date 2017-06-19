<template>
  <Form :label-width="100">
    <Form-item label="甜品名称：">
      <Row>
        <Col :span="8">
        <span>{{this.sweetInfo && this.sweetInfo.title}}</span>
        </Col>
      </Row>
    </Form-item>
    <Form-item label="甜品分类：">
      <Row>
        <Col :span="8">
        <span>{{this.sweetInfo && this.sweetInfo.sweet_cate.title}}</span>
        </Col>
      </Row>
    </Form-item>
    <Form-item label="缩略图：">
      <Row>
        <Col :span="8">
        <img class="sweet-thumb" :src="this.sweetInfo && this.sweetInfo.thumb" @click="openImgModel" />
        <Modal title="查看图片" v-model="visible">
          <img :src="this.sweetInfo && this.sweetInfo.thumb" v-if="visible" style="width: 100%">
        </Modal>
        </Col>
      </Row>
    </Form-item>
    <Form-item label="地区：">
      <Row>
        <Col :span="8">
        <span>{{this.sweetInfo && this.sweetInfo.area}}</span>
        </Col>
      </Row>
    </Form-item>
    <Form-item label="难易度：">
      <Row>
        <Col :span="8">
        <span>{{this.sweetInfo && this.sweetInfo.diff}}</span>
        </Col>
      </Row>
    </Form-item>
    <Form-item label="描述：">
      <Row>
        <Col :span="8">
        <span>{{this.sweetInfo && this.sweetInfo.caption}}</span>
        </Col>
      </Row>
    </Form-item>
    <Form-item label="内容：">
      <Row>
        <Col :span="16">
        <div v-html="this.sweetInfo && this.sweetInfo.desc"></div>
        </Col>
      </Row>
    </Form-item>
  </Form>
</template>
<script>
export default {
  props: ['sweetInfo'],
  data(){
    return {
      visible:false,

    }
  },
  methods: {
    openImgModel(){
      this.visible = true
    }
  }
}
</script>
<style>
.sweet-thumb {
  width: 60px;
  height: 60px;
  border-radius: 4px;
  vertical-align: bottom;
  cursor: pointer;
}
</style>
