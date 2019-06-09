
<template>
    <div class="list-item editingClass editing"> <!-- 最外层容器 -->
        <label class="checkbox">  <!-- 自定义的多选框 -->
            <input type="checkbox" v-model="item.checked">
            <span class="checkbox-custom"></span>
        </label>

        <input type="text" v-model="item.text" placeholder="输入工作内容..."/>
        <a class="delete-item">
            <span class="icon-trash"></span>
        </a>
    </div>
</template>

<script>
export default {
    props: ['item'] // 子组件传递数据
};
</script>

<style lang="less">
@import '../common/style/list-items.less';
</style>

