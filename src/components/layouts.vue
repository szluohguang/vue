<template>
    <section class="container" >
        
        <section class="menu"> <!-- 左边侧边栏 -->
            <menus></menus>  <!-- 菜单内容展示 -->
        </section>
        <section class="content-container" > <!-- 右边内容区  -->
            <todo></todo>
        </section>
    </section>
</template>

<script>
    import menus from './menus.vue';
    import todo from './todo.vue';
    export default {
        name : 'layouts',
        components: {
            menus,       // 注册 menus 组件
            todo        // 注册 todo 组件
        }
    }
</script>

<style lang="less">
    @import '../common/style/layouts.less';
</style>


