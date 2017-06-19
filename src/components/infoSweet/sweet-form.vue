<template>
    <Form :model="sweetForm" :rules="rules" ref="form" :label-width="100">
        <Form-item label="甜品标题：" prop="title">
            <Row>
                <Col :span="8">
                <Input v-model="sweetForm.title" />
                </Col>
            </Row>
        </Form-item>
        <Form-item label="缩略图：" prop="thumb">
            <Row>
                <Col :span="8">
                <Upload ref="upload" :show-upload-list="false" :on-success="handleSuccess" :format="['jpg','jpeg','png','gif']" :max-size="500" :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize" :before-upload="handleBeforeUpload" :headers="headers" name="bankend" :action="action" class="sweet-uploader">
                    <div class="sweet-uploader__content" v-if="!sweetForm.thumb">
                        <Icon type="plus-round" size="35"></Icon>
                    </div>
                    <img class="sweet-uploader__img" v-else :src="computedImg" alt="">
                </Upload>
                </Col>
            </Row>
        </Form-item>
        <Form-item label="分类：" prop="sweet_cate_id">
            <Row>
                <Col :span="8">
                <Select v-model="sweetForm.sweet_cate_id">
                    <Option v-for="item in allCate" :value="item.id" :key="item">{{ item.title }}</Option>
                </Select>
                </Col>
            </Row>
        </Form-item>
        <Form-item label="所属地区：" prop="area">
            <Row>
                <Col :span="8">
                <Select v-model="sweetForm.area">
                    <Option v-for="item in regionData" :value="item.value" :key="item">{{ item.label }}</Option>
                </Select>
                </Col>
            </Row>
        </Form-item>
        <Form-item label="制作难度：" prop="diff">
            <Row>
                <Col :span="8">
                <Rate show-text v-model="sweetForm.diff" />
                </Col>
            </Row>
        </Form-item>
        <Form-item label="描述：" prop="caption">
            <Row>
                <Col :span="8">
                <Input type="textarea" :rows="3" v-model="sweetForm.caption" />
                </Col>
            </Row>
        </Form-item>
        <Form-item label="制作内容：" prop="desc">
            <Row>
                <Col :span="18">
                <div id="editorElem"></div>
                </Col>
            </Row>
        </Form-item>
        <Form-item>
            <Row>
                <Col :span="3">
                <Button type="primary" @click="handleSubmit('form')" long>确认</Button>
                </Col>
                <Col :span="3" :offset="1">
                <Button long @click="handleCancel">取消</Button>
                </Col>
            </Row>
        </Form-item>
    </Form>
</template>

<script>
import regionData from '@/utils/regionData'
import clientConfig from '@/api/client-config'
import E from 'wangeditor'
import { getCookie } from '@/utils'
import _ from 'lodash'

export default {
    props: ['allCate', 'sweetInfo'],
    data() {
        return {
            sweetForm: {
                title: '',
                thumb: '',
                caption: '',
                sweet_cate_id: '',
                area: '',
                diff: 0,
                desc: ''
            },
            rules: {
                title: [
                    { required: true, message: '请输入标题', trigger: 'blur' }
                ],
                thumb: [
                    { required: true, message: '请选择图片', trigger: 'blur' }
                ],
                caption: [
                    { required: true, message: '请输入描述', trigger: 'blur' }
                ],
                sweet_cate_id: [
                    { required: true, message: '请选择分类', trigger: 'blur' }
                ],
                area: [
                    { required: true, message: '请选择地区', trigger: 'blur' }
                ],
                diff: [
                    { required: true,type:'number', message: '请选择难度', trigger: 'blur' }
                ],
                desc: [
                    { required: true, message: '请输入内容', trigger: 'blur' }
                ]
            },
            headers: {
                'sweet-token': getCookie('sun_userid')
            },
            action: clientConfig.uploadUrl,
        }
    },
    computed: {
        computedImg() {
            const { thumb } = this.sweetForm
            return thumb.startsWith('http') ? thumb : `${clientConfig.originalUrl}${this.sweetForm.thumb}`
        },
        regionData() {
            return regionData
        }
    },
    methods: {
        // 上传图片成功
        handleSuccess({ files }) {
            this.sweetForm.thumb = `${clientConfig.originalUrl}${files.filename}`
        },
        handleFormatError() {
            this.$Message.error('文件格式不支持')
        },
        handleMaxSize() {
            this.$Message.error('文件大小超出限制')
        },
        handleBeforeUpload() {

        },
        handleSubmit(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    console.log(this.sweetForm)
                    console.log('submit suceess !!!')
                    this.$emit('submit', this.sweetForm)
                }
            })
        },
        // 取消
        handleCancel(){
            this.$emit('cancel')
        }
    },
    mounted() {debugger
        let editor = new E('#editorElem')
        editor.customConfig.uploadImgShowBase64 = true
        editor.customConfig.onchange = (html) => {
            this.sweetForm.desc = html
        }
        editor.create()
        editor.txt.html(this.sweetForm.desc||'')
    },
    created() {
        console.log(this.allCate)
        if(this.sweetInfo){debugger
            this.sweetForm = Object.assign({}, this.sweetInfo)
        }
    }
}
</script>
<style scpoed>
.sweet-uploader {
    width: 80px;
    height: 80px;
}

.sweet-uploader__content {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px dashed #dddee1;
    background: #fff;
    border-radius: 4px;
    cursor: pointer;
}

.sweet-uploader__content:hover {
    border: 1px dashed #2d8cf0;
}

.sweet-uploader__img {
    width: 80px;
    height: 80px;
}
</style>
