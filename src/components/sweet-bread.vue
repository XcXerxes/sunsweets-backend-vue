<template>
    <Breadcrumb>
        <Breadcrumb-item href="/home">首页</Breadcrumb-item>
        <Breadcrumb-item>{{title}}</Breadcrumb-item>
    </Breadcrumb>
</template>
<script>
    export default {
        props:['title']
    }
</script>