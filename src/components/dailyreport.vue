
<template>
    <div>
        <p>今日进展：</p>
        <textarea class="textarea" rows="5" cols="100" v-model="todayprogress" placeholder="请输入今日工作进展..."></textarea>
        <p>明天工作计划：</p>
        <textarea class="textarea" rows="5" cols="100" v-model="tomorrowplan" placeholder="请输入明天工作计划..."></textarea>
        <p>问题与风险：</p>
        <textarea class="textarea" rows="5" cols="100" v-model="problem" placeholder="请输入问题与风险..."></textarea>
    </div>
</template>

<script>
export default {
    name: 'dailyreport'
}
</script>

<style>

</style>
