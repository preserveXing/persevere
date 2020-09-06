<template>
  <div class="home">
    <el-container>
      <el-header>
          <div class="header-left">
              <span v-show="!isCollapse">教师后台管理系统</span>
            <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                <el-radio-button :label="false">
                    <i class="el-icon-s-fold"></i>
                </el-radio-button>
                <el-radio-button :label="true">
                    <i class="el-icon-s-fold"></i>
                </el-radio-button>
            </el-radio-group>
          </div>
          <div>
            <el-button class="fa fa-user-circle user" >你好!{{user}}</el-button>
            <el-button class="leave" @click="leave">退出</el-button>
          </div>
      </el-header>
      <el-container>
        <Menu></Menu>
        <el-main>
          <List></List>
          <router-view></router-view>
          <Foot></Foot>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  import Menu from "./publicmeu/Menu" 
  import List from "./publicmeu/NavList"
  import Foot from "./publicmeu/Footer"
  export default {
   data() {
        return {
            isCollapse: false,
            user:""
        }
    },
    created(){
      this.user=localStorage.user
    },
    components:{
      Menu,
      List,
      Foot 
    },
    methods: {
      leave() {
        this.$alert('您确定退出么', '退出提示', {
          confirmButtonText: '确定',
          callback: action => {
            localStorage.clear()
            this.$router.push("/")
          }
        });
      }
    }
  }
</script>
<style lang="scss">
.home{
  height: 100vh;
  .el-header{
    display: flex;
    justify-content: space-between;
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
    .header-left{
        font-size: 22px;
        font-weight: bold;
        color: royalblue;
        height: 100%;
    }
    .user{
      color: red;
    }
  }
  .el-menu-vertical-demo {
      height: 100vh;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 199px;
      min-height: 400px;
    }
  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
}
</style>
