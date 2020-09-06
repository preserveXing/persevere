<template>
    <div class="pages">
       <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="total, sizes, prev, pager, next, jumper"
        :page-sizes="[10, 20, 30, 40, 50]"
        :total="total"
        >
      </el-pagination>
    </div>
</template>
<script>
export default {
    props :['total'],
    data() {
        return {
            currentPage:1,//当前页数
            pageSize:10//每页个数  
        }
    },
    methods:{
        handleSizeChange(val) {
            this.pageSize=val
            this.currentPage=1
        },
        handleCurrentChange(val) {
            this.currentPage=val
        },
    }
}
</script>
<style lang="scss">
    .pages{
        .el-pagination {    
            margin-top: 10px;
        }
    }
</style>