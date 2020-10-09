<template>
  <div>
    <el-col :span="24">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu index="1" router='true'>
          <template slot="title" >
            <i class="el-icon-location"></i>
            <span>应用管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1" indexPath="" route={path:/home/appli}>用户管理</el-menu-item>
            <el-menu-item index="1-2">角色管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>应用管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">系统日志</el-menu-item>
            <el-menu-item index="2-2">用户日志</el-menu-item>
            <el-menu-item index="2-3">管理员操作</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
import { get } from "@/api/axios.js";
export default {
  data() {
    return {};
  },

  computed: {},

  components: {},

  created() {},

  mounted() {
    // console.log(this.$router);
    this.getAsidelist();
  },

  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    async getAsidelist() {
      let res = await get("/api/aside");
      console.log(res);
      console.log("object");
    },
  },
};
</script>

<style scoped lang='scss'>
</style>