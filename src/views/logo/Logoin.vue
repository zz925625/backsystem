<template>
  <div class="content">
    <div class="logoin">
      <h1>系统登录</h1>
      <el-form :model="user" :rules="rules" ref="ruleForm">
        <el-form-item prop="name">
          <el-input placeholder="请输入用户名" v-model="user.name"></el-input>
        </el-form-item>

        <el-form-item prop="psw">
          <el-input placeholder="请输入密码" v-model="user.psw"></el-input>
        </el-form-item>

        <el-form-item>
          <el-checkbox label="记住密码" v-model="checked"></el-checkbox>
        </el-form-item>

        <el-form-item label>
          <el-button type="primary" @click="submitForm('ruleForm')" :loading="this.loading">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      user: {
        name: "",
        psw: "",
      },
      checked: false,
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        psw: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },

  computed: {},

  components: {},

  created() {},

  mounted() {
    let checked = JSON.parse(localStorage.getItem("checked"));
    this.checked = checked;
    this.user.name = localStorage.getItem("name");
    this.user.psw = localStorage.getItem("psw");
  },

  methods: {
    submitForm(formName) {
      this.loading = true;
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          //通过后进行数据请求。axios
          let res = await this.$axios.post("/api/user/logoin", {
            name: this.user.name,
            psw: this.user.psw,
          });
          console.log(res);
          if (res.data.code === -1) {
            this.$message({
              showClose: true,
              message: res.data.msg,
              type: "warning",
            });
          } else {
            sessionStorage.setItem("name", this.user.name);
            if (this.checked) {
              localStorage.setItem("checked", this.checked);
              localStorage.setItem("name", this.user.name);
              localStorage.setItem("psw", this.user.psw);
            } else {
              localStorage.removeItem("checked");
              localStorage.removeItem("name");
              localStorage.removeItem("psw");
            }
            this.loading = false;
            this.$router.push("/home");
            this.$message({
              showClose: true,
              message: res.data.msg,
              type: "success",
            });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style scoped lang='scss'>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .logoin {
    width: 400px;
    height: 300px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 1px 1px 10px rgba(69, 70, 69, 0.7);
    h1 {
      font-size: 20px;
      text-align: center;
      height: 60px;
      line-height: 40px;
    }
    button {
      width: 100%;
    }
  }
}
</style>