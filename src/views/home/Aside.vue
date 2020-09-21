<template>
  <div>
    <el-col :span="24">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu
          :index="i.meta.id"
          v-for="(i,k) in $router.options.routes"
          :key="k"
          v-if="i.meta"
        >
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <span>{{i.meta.name}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item v-for="(m,n) in i.children" :key="n" @click="gomain(m)">{{m.meta.name}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  computed: {},

  components: {},

  created() {},

  mounted() {
    console.log(this.$router);
  },

  methods: {
    gomain(i) {
      this.$router.push(i.path);
      console.log(this.$route);
    },
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
  },
};
</script>

<style scoped lang='scss'>
</style>