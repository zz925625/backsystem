<template>
  <div style="width: 100%; text-align: left; margin: 10px 0 0px">
    <el-form :inline="true" :model="user" class="demo-form-inline">
      <el-form-item>
        <el-input placeholder="姓名" v-model="search"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="primary" @click="dialogFormVisible = true"
          >新增</el-button
        >
      </el-form-item>
    </el-form>
    <el-table
      ref="multipleTable"
      :data="userlist"
      tooltip-effect="dark"
      style="width: 100%,height:100%;"
      @selection-change="handleSelectionChange"
      :default-sort="{ prop: 'data', order: 'descending' }"
      @select-all="handleselect"
      @select="handleselect"
      :v-loading="isloading"
      align="center"
    >
      <el-table-column type="selection" width="50"></el-table-column>
      <el-table-column prop="id" label="#" width="100"></el-table-column>
      <el-table-column prop="name" label="姓名" width="150"></el-table-column>
      <el-table-column prop="sex" label="性别" width="150">
        <template slot-scope="scope">
          {{ scope.row.sex ? "女" : "男" }}
        </template>
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="150"></el-table-column>
      <el-table-column prop="date" label="生日" width="150"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            @click="handleEdit(scope.$index, scope.row)"
            type="primary"
            size="small"
            >编辑</el-button
          >
          <el-button
            type="danger"
            size="small"
            @click="deleteRow(scope.$index, scope.row)"
            >移除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-row>
      <el-col :span="8" align="left"
        ><div class="grid-content bg-purple">
          <el-button type="danger" :disabled="isdisable">批量删除</el-button>
        </div></el-col
      >
      <el-col :span="12" align="right">
        <div class="grid-content bg-purple">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="pagelist"
            @current-change="handleChangepage"
            @prev-click="handleChangepage"
            @next-click="handleChangepage"
          >
          </el-pagination>
        </div>
      </el-col>
    </el-row>
    <UserAdd
      v-if="dialogFormVisible"
      @close="dialogFormVisible = false"
    ></UserAdd>
    <UserUpdate
      v-if="UpdatedialogForm"
      @close="UpdatedialogForm = false"
      :updaterow="updaterow"
    ></UserUpdate>
  </div>
</template>

<script>
import UserAdd from "./UserAdd";
import UserUpdate from "./UserUpdate";
export default {
  data() {
    return {
      search: "",
      pagenum: 1,
      pagesize: 10,
      userlist: [],
      pagelist: 0,
      isdisable: true,
      isloading: false,
      updaterow: "",
      dialogFormVisible: false,
      UpdatedialogForm: false,
      user: {
        name: "",
      },
    };
  },

  computed: {},

  components: { UserAdd, UserUpdate },

  created() {},

  mounted() {
    this.getUserlist();
  },
  methods: {
    handleselect(a) {
      a.length > 0 ? (this.isdisable = false) : (this.isdisable = true);
    },
    handleChangepage(a) {
      this.pagenum = a;
      this.getUserlist();
    },
    onSubmit() {
      this.getUserlist();
    },
    handleEdit(index, row) {
      this.UpdatedialogForm = true;
      this.updaterow = row;
    },
    deleteRow(index, rows) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          let id = rows.id;
          let res = await this.$axios.post("/api/user/del", { id });
          if (res.data.code == 1) {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            this.getUserlist();
          } else {
            this.$message({
              type: "info",
              message: "删除失败!",
            });
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
      // rows.splice(index, 1);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    async getUserlist() {
      this.isloading = true;
      let res = await this.$axios.post("/api/user/list", {
        search: this.search,
        pagenum: this.pagenum,
        size: this.pagesize,
      });
      res ? (this.isloading = false) : (this.isloading = true);
      this.userlist = res.data.list;
      this.pagelist = res.data.total;
      console.log(this.userlist);
    },
  },
};
</script>

<style scoped lang='scss'>
.el-table {
  overflow: scroll;
  height: 100%;
}
</style>