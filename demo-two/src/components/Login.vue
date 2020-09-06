<template>
  <div class="login">
    <div class="content">
      <h1>教师管理系统</h1>
      <h2>请登录</h2>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="user">
          <el-input v-model="ruleForm.user"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">
          登录
        </el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import qs from "qs"
  export default {
    data() {
      return {
        ruleForm: {
          user: '',
          password:""
         
        },
        rules: {
          user: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          // localStorage.setItem("user",valid)
          if (valid) {
            //登陆成功  向后台发送  ajax
            // var mes="?user="+this.ruleForm.user+"&password="+this.ruleForm.password
            this.service.get('login', 
            	{
                params:{
                  user:this.ruleForm.user,
                  password:this.ruleForm.password
                }
                //传递的参数
              }
            ).then(res => {
              if (res.data.status==="200") {
                this.open2()
                this.$router.push("/home/student")
                localStorage.setItem("token",res.data.token)
              }else{
                console.log(res.data);
              }
            })
            .catch(error => {
            	console.log(error)
            })        
          } else {
            console.log('error submit!!');
            return false;
          }
          localStorage.setItem("user",this.ruleForm.user)
        });
      },
      open2() {
        this.$message({
          message: '登录成功',
          type: 'success',
          duration:1000
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.login {
  height: 100vh;
  padding-top: 100px;
  background: url(".././assets/1.jpg") no-repeat 0 / cover;
  .content {
    width: 450px;
    height: 300px;
    margin: 0 auto;
    padding-top: 20px;
    border-radius: 10px;
    background: rgba(8, 10, 129, 0.2);
    h1 {
      font-size: 25px;
      color: royalblue;
    }
    h2 {
      font-size: 20px;
      margin: 20px auto;
      color: royalblue;
    }
    .el-form-item {
      width: 350px;
      margin: 0px auto 22px;
    }
    .el-button {
      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }
}
</style>
