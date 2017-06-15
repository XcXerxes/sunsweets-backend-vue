<template>
  <Form :model="cateForm" ref="cateForm" :rules="rules" :label-width="100">
    <Form-item prop="title" label="分类名称：">
      <Row>
        <Col :span="8">
        <Input placeholder="请输入名称" v-model="cateForm.title" />
        </Col>
      </Row>
    </Form-item>
    <Form-item label="分类排序：" prop="sweet_order">
      <Row>
        <Col :span="8">
        <Input placeholder="请输入排序如：1"  v-model="cateForm.sweet_order" number/>
        </Col>
      </Row>
    </Form-item>
    <Form-item>
      <Row>
        <Col :span="3">
        <Button type="primary" long @click="handleSubmit('cateForm')">确定</Button>
        </Col>
        <Col :span="3" :offset="1">
        <Button long @click="handleCancel">取消</Button>
        </Col>
      </Row>
    </Form-item>
  </Form>
</template>
<script>

export default {
  props: ['cateInfo'],
  data() {
    return {
      cateForm: {
        title: '',
        sweet_order: ''
      },
      rules: {
        title: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ],
        sweet_order: [
          { required: true,type: 'number', message: '请输入数字', trigger: 'blur' },
        ]
      }
    }
  },
  methods: {
    handleSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$emit('submit', this.cateForm)
        }
      })
    },
    handleCancel() {
      this.$emit('cancel')
    }
  },
  created() {
    if (this.cateInfo) {
      this.cateForm = Object.assign({}, this.cateInfo)
    }
  }
}
</script>
