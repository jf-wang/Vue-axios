<template>
  <div class="hello">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="账户" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="desc">
        <el-input type="textarea" placeholder="不能为空" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="get">获取发票列表</el-button>
  </div>
</template>

<script>
  import {requestLogin,getList} from '../api/api'
  export default {
    name: 'HelloWorld',
    data() {
      return {
        ruleForm: {
          name: 'linl',
          desc: '123456'
        },
        token: "",
        rules: {
          name: [{
            validator: text, //选的表单验证
            required: true, //是否前面有小星星
          }],
          desc: [{
            validator: desc,
            required: true,
          }]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => { //进入表单验证
          if (valid) { //如果通过了进行请求
            var loginParams = {//需要穿的参数
              loginName: this.ruleForm.name,
              loginPassword: this.ruleForm.desc
            };
            requestLogin(loginParams).then(data => { //调用封装的axios
              if (data.resultCode == 10000) {//成功状态码
                this.$message({//弹出成功消息框
                  showClose: true,
                  message: 'ok',
                  type: 'success'
                });
              }
            })
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      get() {
        var headers=window.sessionStorage.getItem("token");//取token
        var path='/invoice/getInvoiceList'//路径
        var postData = {//需要传的参数
          pageInfo: {
            pageNo: this.currentPage3,
            pageSize: 10
          }
        }
        getList(headers,path,postData).then(data => { //调用封装的axios
        console.log(data)//打印出来
          if (data.resultCode == 10000) {//成功状态码
            this.$message({
              showClose: true,
              message: 'ok',
              type: 'success'
            });
          }
        })
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
