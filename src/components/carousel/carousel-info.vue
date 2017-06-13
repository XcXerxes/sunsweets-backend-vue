<template>
  <Form :model="carouselForm" :label-width="100px">
      <Form-item label="标题">
        <Row>
            <Col :span="8" v-if="carouselForm">
                {{carouselForm.title}}
            </Col>
        </Row>
      </Form-item>
      <Form-item label="描述">
        <Row>
            <Col :span="8" v-if="carouselForm">
                {{carouselForm.title}}
            </Col>
        </Row>
      </Form-item>
      <Form-item label="图片">
        <Row>
            <Col>
            
            </Col>
        </Row>
      </Form-item>
  </Form>
</template>
