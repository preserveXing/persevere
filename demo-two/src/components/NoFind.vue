<template>
    <div class="error">
        <img src=".././assets/404.jpg" alt="">
        <p class="China">对不起你找的页面不存在</p>
        <p class="English">Sorry, the page you are looking for doesn't exist</p>
        <el-button type="primary">
            <router-link to="/">重新加载</router-link>
        </el-button>
        <p>
            <img src=".././assets/sorry.jpg" alt="" width="180" height="190" class="sorry">
            <img src=".././assets/sorry.jpg" alt="" width="180" height="190" class="sorry">
            <img src=".././assets/sorry.jpg" alt="" width="180" height="190" class="sorry">
        </p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>
<style lang="scss">
    .error{
        width: 674px;
        margin: 0 auto;
        background: #EBEEF5;
        .China{
            margin: 20px auto;
            font-size: 25px;
            color: #666;
        }
        .English{
            font-size: 20px;
            color: #666;
        }
        .router-link-active{
            color: #fff;
            text-decoration: none;
        }
        .el-button{
            margin: 5px auto 15px;
        }
        .sorry{
            display: inline-block;
        }
    }
</style>
