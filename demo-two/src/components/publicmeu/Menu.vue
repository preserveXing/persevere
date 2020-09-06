<template>
    <div class="menu">
        <el-aside width="200px">
          <el-menu
            router
            default-active="/home/student"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
          >
            <template v-for="(item,index) in meulist" >
              <el-submenu index="item.path" :key="index" v-if="!item.hidden">
                <template slot="title" >
                  <i :class="item.fonticon"></i>
                  <span slot="title">{{item.name}}</span>
                </template>
              <el-menu-item-group v-for="(child,index) in item.children" :key="index">
                <el-menu-item :index="child.path">
                  <i :class="child.fonticon"></i>
                  {{child.name}}
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            </template>
          </el-menu>
        </el-aside>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isCollapse: false,
            meulist:[]
        }
    },
    created(){
      this.meulist=[...this.$router.options.routes]
      
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
<style lang="scss">
    .menu{
        .el-aside {
            height: 100vh;
            background-color: #d3dce6;
            color: #333;
            text-align: center;
            line-height: 200px;
        }
    }
</style>
