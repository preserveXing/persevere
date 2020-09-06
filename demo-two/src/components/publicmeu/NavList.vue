<template>
  <div class="navlist">
    <el-card>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item,index) in $route.matched" :key="index">
          <el-breadcrumb-item :to="{ path: item.path }">{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    };
  },
  created() {
    
  },
};
</script>
<style lang="scss">
.navlist {
  margin: 10px auto;
}
</style>