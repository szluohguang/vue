
<template>
    <div class="list-todos"> <!-- 菜单容器 -->
        <a class="list-todo activelistClass list" v-for="item in items" :key="item.index">
            <span class="icon-lock" v-if="item.locked"></span> <!-- 锁的图标 -->
            <span class="count-list" v-if="item.count">{{item.count}}</span> <!-- 待办数字 -->
            {{item.title}} <!-- 菜单内容 -->
        </a>
        <a class="link-list-new"> <!-- add new menu -->
            <span class="icon-plus"></span>
            新增
        </a>

    </div>
</template>

<script>
export default {
    data() {  // 菜单填充数据
        return {
            items: [
                {
                    title: '星期一',
                    count: 1,
                    locked: true
                },
                {
                    title: '星期二',
                    count: 2,
                    locked: true                    
                },
                {
                    title: '星期三',
                    count: 3,
                    locked: false
                }
            ]
        };
    }
};
</script>

<style lang="less">
    @import '../common/style/menu.less';
</style>
