
<template>
    <div class="page lists-show"> <!-- 页面外层容器 -->
        <nav>   <!-- 上半部分-->
            <div class="nav-group">  <!-- mobile menu icon -->
                <a class="nav-item">
                    <span class="icon-list-unordered">

                    </span>
                </a>
            </div>
            <h1 class="title-page">
                <span class="title-wrapper">{{todo.title}}</span>  <!-- title -->
                <span class="count-list">{{todo.count}}</span>
            </h1>
            <div class="nav-group right">
                <div class="options-web">
                    <a class="nav-item">
                        <span class="icon-lock" v-if="todo.locked"></span>
                        <span class="icon-unlock" v-else></span>
                    </a>
                    <a class="nav-item">
                        <span class="icon-trash"></span>
                    </a>
                </div>
            </div>

            <div class="form todo-new input-symbol"> <!-- 新增单个代办事项输入框 -->
                <input type="text" v-model="text" placeholder="请输入代办事项..." @keyup.enter="onAdd" :disabled="todo.locked"/>
                <span class="icon-add"></span>
            </div>
        </nav>
        <div class="content-scrollable list-items"> <!-- 容器的下半部分 -->
            <div v-for="item in items" :key="item.index">
                <item :item="item"></item>
            </div>
        </div>
    </div>
</template>

<script>
import item from './item.vue';
export default {
    data() {
        return {
            todo: {
                title: '星期一',
                count: 12,
                locked: false
            },
            items: [  // 代办列表
                {
                    checked: false,
                    text: '新的一天就要到来',
                    isDelete: false
                },
                {
                    checked: false,
                    text: '我们开了一天会，需要记录跟进项',
                    isDelete: false
                },
                {
                    checked: false,
                    text: '本周的总结还没写呢',
                    isDelete: false
                },               

            ],
            text: '' // 新增代办事项绑定的值

        };
    },
    methods: {
        onAdd() {
            this.items.push(
                {
                    checked: false, text: this.text, isDelete: false
                }
            );
        }
    },
    components: {
        item
    },
}
</script>


<style lang="less">
@import '../common/style/nav.less';
@import '../common/style/form.less';
@import '../common/style/todo.less';
</style>
