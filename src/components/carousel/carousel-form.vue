<template>
    <Form :model="carouselForm" :rules="rules" ref="carForm" :label-width="120">
        <Form-item label="标题：">
            <Row>
                <Col :span="8">
                <Input v-model="carouselForm.title" placeholder="请输入标题" />
                </Col>
            </Row> 
        </Form-item>
        <Form-item label="描述：">
            <Row>
                <Col :span="8">
                <Input type="textarea" v-model="carouselForm.caption" />
                </Col>
            </Row>
        </Form-item>
        <Form-item label="上传轮播图：">
            <Upload ref="upload" :show-upload-list="false" :on-success="handleSuccess" :format="['jpg','jpeg','png','gif']" 
                :max-size="512000" :on-format-error="handleFormatError" 
                :on-exceeded-size="handleMaxSize" 
                :before-upload="handleBeforeUpload" 
                type="drag" action="/api/bankend/upload" 
                style="display: inline-block;width:78px;">
                <div style="width: 78px;height:78px;line-height: 78px;">
                    <Icon type="plus-round" size="35"></Icon>
                </div>
            </Upload>
        </Form-item>
        <Form-item>
            <Row>
                <Col :span="3">
                <Button type="primary">提交</Button>
                </Col>
                <Col :span="3">
                <Button type="primary">取消</Button>
                </Col>
            </Row>
        </Form-item>
    </Form>
</template>
<script>
export default {
    data() {
        return {
            carouselForm:{
                title: '',
                caption: '',
                img: ''

            },
            rules: {
                
            }
        }
    },
    methods: {
        handleSuccess(){

        },
        handleFormatError(){
            this.$Message.error('文件格式不支持')
        },
        handleMaxSize(){
            this.$Message.error('文件超出限制')
        },
        handleBeforeUpload(){

        }
    }
}
</script>