
<template>
<div class="headerBrowser">
        <h1> DailyReport</h1>
    </div>
</template>


<script>
    export default {
        name: 'header'
    }
</script>

   <style>
        .headerBrowser{
            width: 900px;
            height: 70px;
            border: 1px solid black;
            margin: 0  auto;
            text-align: center;
            line-height: 30px;
            display: inline-flex;
            flex-direction: row;
            justify-content: center;
        }
 
        /* 改变字体颜色 去掉下划线 */
        .headerBrowser a{
            color: black;
            text-decoration: none;
        }
 
        /* 3.设置左右的间隔 */
        .headerBrowser span{
            margin: 0 12px;
            font-size: 12px;
            color: lightgray;
        }
 
        /* 4.鼠标悬浮 改变颜色 */
        .headerBrowser a:hover{
            color: gray;
        }

    </style>