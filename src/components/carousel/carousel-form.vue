<template>
    <Form :model="carouselForm" :rules="rules" ref="carForm">
        <Form-item label="标题"></Form-item>
        <Form-item></Form-item>
        <Form-item>
            <Col :span="3">
                <Button type="primary">提交</Button>
            </Col>
            <Col :span="3">
                <Button type="primary">取消</Button>
            </Col>
        </Form-item>
    </Form>
</template>