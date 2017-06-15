<template>
  <Form :label-width="100">
      <Form-item label="分类名称：">
          <span>{{cateInfo.title}}</span>
      </Form-item>
      <Form-item label="分类排序：">
          <span>{{cateInfo.sweet_order}}</span>
      </Form-item>
  </Form>
</template>
<script>
    export default {
        props: ['cateInfo']
    }
</script>
