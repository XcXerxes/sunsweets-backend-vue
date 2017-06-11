<template>
    <Breadcrumb>
        <Breadcrumb-item href="/home">首页</Breadcrumb-item>
        <Breadcrumb-item>{{breadInfo.title}}</Breadcrumb-item>
    </Breadcrumb>
</template>
<script>
    export default {
        props:['breadInfo']
    }
</script>