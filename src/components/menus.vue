
<template>
    <div class="list-todos"> <!-- 菜单容器 -->
        <a class="list-todo activelistClass list">
            <span class="icon-lock"></span> <!-- 锁的图标 -->
            <span class="count-list">1</span> <!-- 待办数字 -->
            星期一 <!-- 菜单内容 -->
        </a>
        <a class="link-list-new"> <!-- add new menu -->
            <span class="icon-plus"></span>
            新增
        </a>

    </div>
</template>

<style lang="less">
    @import '../common/style/menu.less';
</style>
