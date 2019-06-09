<template>
    <section class="container" >
        
        <section class="menu"> <!-- 左边侧边栏 -->
            <menus></menus>  <!-- 菜单内容展示 -->
        </section>
        <section class="content-container" > <!-- 右边内容区  -->
        hahah
        </section>
    </section>
</template>

<script>
    import menus from './menus.vue';
    export default {
        name : 'layouts',
        components: {
            menus       // 注册 menus 组件
        }
    }
</script>

<style lang="less">
    @import '../common/style/layouts.less';
</style>


