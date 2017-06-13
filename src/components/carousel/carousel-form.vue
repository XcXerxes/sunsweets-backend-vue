<template>
    <Form :model="carouselForm" :rules="rules" ref="carForm" :label-width="120">
        <Form-item label="标题：" prop="title">
            <Row>
                <Col :span="8">
                <Input v-model="carouselForm.title" placeholder="请输入标题" />
                </Col>
            </Row>
        </Form-item>
        <Form-item label="描述：" prop="caption">
            <Row>
                <Col :span="8">
                <Input type="textarea" v-model="carouselForm.caption" :rows="4" />
                </Col>
            </Row>
        </Form-item>
        <Form-item label="上传轮播图：" prop="img">
            <Upload ref="upload" :show-upload-list="false" :on-success="handleSuccess" :format="['jpg','jpeg','png','gif']" :max-size="500" :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize" :before-upload="handleBeforeUpload" :headers="headers" name="bankend" :action="action" class="carousel-uploader">
                <div class="carousel-uploader__content" v-if="!carouselForm.img">
                    <Icon type="plus-round" size="35"></Icon>
                </div>
                <img class="carousel-uploader__img" v-else :src="computedImg" alt="">
            </Upload>
        </Form-item>
        <Form-item>
            <Row>
                <Col :span="3">
                <Button type="primary" long @click="handleSubmit('carForm')">提交</Button>
                </Col>
                <Col :span="3" :offset="1">
                <Button long @click="handleCancel">取消</Button>
                </Col>
            </Row>
        </Form-item>
    </Form>
</template>
<script>
import { getCookie } from '@/utils'
import clientConfig from '@/api/client-config'
export default {
    props: ['carouselInfo'],
    data() {
        return {
            headers: {
                'sweet-token': getCookie('sun_userid')
            },
            action: clientConfig.uploadUrl,
            carouselForm: {
                title: '',
                caption: '',
                img: ''

            },
            rules: {
                title: [
                    { required: true, message: '请输入标题', trigger: 'change' }
                ],
                caption: [
                    { required: true, message: '请输入描述', trigger: 'change' }
                ],
                img: [
                    { required: true, message: '请上传图片', trigger: 'blur' }
                ]
            }
        }
    },
    computed: {
        computedImg(){
            const {img} = this.carouselForm
            return img.startsWith('http') ? img : `${clientConfig.originalUrl}${this.carouselForm.img}`
        }
    },
    methods: {
        // 上传图片成功
        handleSuccess({ files }) {
            debugger
            this.carouselForm.img = `${clientConfig.originalUrl}${files.filename}`
        },
        // 文件格式不支持
        handleFormatError() {
            this.$Message.error('文件格式不支持')
        },
        // 文件大小超出
        handleMaxSize() {
            this.$Message.error('文件超出限制')
        },
        // 上传之前
        handleBeforeUpload() {

        },
        // 提交
        handleSubmit(formName) {
            let { img } = this.carouselForm
            this.$refs[formName].validate(valid => {
                if (valid) {
                    console.log('submit success !!!!!!!')
                    const info = Object.assign({}, this.carouselForm, {
                        img: img.substr(img.lastIndexOf('/') + 1)
                    })
                    console.log('info======' + JSON.stringify(info))
                    this.$emit('submit', info)
                }
            })
        },
        // 取消
        handleCancel() {
            this.$emit('cancel')
        }
    },
    created() {
        if (this.carouselInfo) {
            this.carouselForm = Object.assign({}, this.carouselInfo)
        }
    }
}
</script>
<style>
/*style="display: inline-block;width:78px;"
    style="width: 78px;height:78px;line-height: 78px;" class=""
    */

.carousel-uploader {
    width: 80px;
    height: 80px;
}

.carousel-uploader__content {
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

.carousel-uploader__content:hover {
    border: 1px dashed #2d8cf0;
}

.carousel-uploader__img {
    width: 80px;
    height: 80px;
}
</style>