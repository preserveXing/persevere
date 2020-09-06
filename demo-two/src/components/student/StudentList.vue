<template>
  <div class="student">
    <el-card>
      <div class="demo-input-suffix">
        <el-button type="primary" @click="addStudent">添加</el-button>
        姓名
        <el-input placeholder="请输入内容" v-model="name">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>学号
        <el-input placeholder="请输入内容" v-model="number">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>班级
        <el-input placeholder="请输入内容" v-model="cla">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
        <el-button type="primary">
          <i class="el-icon-search"></i>
        </el-button>
      </div>
      <!-- 表格区域  -->
      <el-table :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)" style="width: 100%">
        <el-table-column prop="name" label="姓名" width="180" align="center"></el-table-column>
        <el-table-column prop="number" label="学号" align="center"></el-table-column>
        <el-table-column prop="age" label="年龄" align="center"></el-table-column>
        <el-table-column prop="sex" label="性别" align="center"></el-table-column>
        <el-table-column prop="class" label="班级" align="center"></el-table-column>
        <el-table-column prop="address" label="地址" align="center"></el-table-column>
        <el-table-column prop="phone" label="手机" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope"><!-- scope  获取每行的信息-->
            <el-button type="primary" size="mini"  
            @click="upData(scope.row)">查看</el-button>
            <el-button type="danger" size="mini"
            @click="del">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 弹窗区域  修改信息 -->
      <el-dialog :title="status? '学员信息' : '添加学院'" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="学号" :label-width="formLabelWidth">
            <el-input v-model="form.number" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="年龄" :label-width="formLabelWidth">
            <el-input v-model="form.age" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="性别" :label-width="formLabelWidth">
            <!-- 性别的  单选-->
            <el-radio v-model="form.sex" label="男">男</el-radio>
            <el-radio v-model="form.sex" label="女">女</el-radio>
          </el-form-item>
          <el-form-item label="班级" :label-width="formLabelWidth">
            <!-- 班级的  多选-->
            <el-select v-model="form.class" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="地址" :label-width="formLabelWidth">
            <el-input v-model="form.address" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="手机号" :label-width="formLabelWidth">
            <el-input v-model="form.phone" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
        <!-- 确认后要进行  数据传递   记性添加 修改添加-->
      </el-dialog>
      <!--分页   解构-->
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="total, sizes, prev, pager, next, jumper"
        :page-sizes="[10, 20, 30, 40, 50]"
        :total="total">
      </el-pagination>
    </el-card>
  </div>
</template>
<script>

export default {
  data() {
    return {
      name: "",
      number: "",
      cla: "",
      tableData: [],  
      dialogFormVisible: false,
      form: {},
      formLabelWidth: '80px',
      status:false,
      options: [{
          value: '1',
          label: '框架一班'
      }, {
          value: '2',
          label: '框架二班'
      }, {
          value: '3',
          label: '框架三班'
      }, {
          value: '4',
          label: '框架四班'
      }, {
          value: '5',
          label: '框架五班'
      },{
          value: '6',
          label: '框架六班'
      }],
      total:0,
      currentPage:1,//当前页数
      pageSize:10//每页个数
    };
  },
  created() {
    this.service
      .get("studentlist")
      .then((res) => {
        console.log("请求发送");
        if (res.data.status === "200") {
          this.tableData = res.data.data;
          this.total=res.data.total
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods:{
    handleSizeChange(val) {
      this.pageSize=val
      this.currentPage=1
    },
    handleCurrentChange(val) {
      this.currentPage=val
    },
    upData(row) {
      this.status=true
      this.form={...row}
      this.dialogFormVisible=true
      console.log(row);
    },
    addStudent(){
      this.form={
        sex:'男'
      }
      this.status=false
      this.dialogFormVisible=true
    },
    del(){
      this.$alert('您确定删除么', '删除提示', {
        confirmButtonText: '确定',
        callback: action => {
          //对接删除 接口
        }
      });
    },
  }
};
</script>
<style lang="scss">
.student {
  .demo-input-suffix {
    margin: 10px 0;
    text-align: left;
    .el-input {
      width: 150px;
    }
  }
  .el-dialog{
    width: 500px;
    .el-form{
      text-align: left;
    }
  }
}
</style>
