<template>
  <el-container>
    <!-- Header -->
    <el-header>
      <el-row>
        <el-col :span="6" :offset="18">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              欢迎{{ this.name }}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu>
              <el-dropdown-item command="a">退出</el-dropdown-item>
              <el-dropdown-item command="b">用户设置</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-header>
    <!-- container -->
    <el-container>
      <!-- Aside -->
      <el-aside width="200px">
        <Aside></Aside>
      </el-aside>
      <el-container>
        <!-- Main -->
        <el-main>
          <!-- 面包屑 -->
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="i in $route.matched" :key="i.meta.id">
              <a href="i.path">{{ i.meta.name }}</a>
            </el-breadcrumb-item>
          </el-breadcrumb>
          <router-view></router-view>
        </el-main>
        <!-- Foot -->
        <el-footer> </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import Aside from "./Aside";
export default {
  data() {
    return {
      name: sessionStorage.getItem("name"),
      page: 0,
      num: 1,
    };
  },

  computed: {},

  components: { Aside },

  created() {},

  mounted() {},

  methods: {
    handlenum(e) {
      this.page = e;
      console.log(e);
    },
    handleChangepage(a) {
      this.num = a;
      console.log(this.num);
    },
    handleCommand(command) {
      if (command === "a") {
        this.$message({
          message: "退出成功",
          type: "success",
        });
        sessionStorage.removeItem("name");
        this.$router.push("/logoin");
      }
    },
  },
};
</script>

<style scoped lang='scss'>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: left;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /* line-height: 50px; */
  height: 100%;
  width: 100%;
  overflow: hidden;
}

body > .el-container {
  height: 100%;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>