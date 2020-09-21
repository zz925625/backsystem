<template>
  <div style="width:100%; text-align:left;margin:10px 0 20px ">
    <el-form :inline="true" :model="user" class="demo-form-inline">
      <el-form-item>
        <el-input placeholder="姓名" v-model="search"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="primary" @click="onSubmit">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      :default-sort="{prop: 'data', order: 'descending'}"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="id" label="#" width="180" sortable></el-table-column>
      <el-table-column prop="name" label="姓名" width="180" sortable></el-table-column>
      <el-table-column prop="sex" label="性别" width="180" sortable></el-table-column>
      <el-table-column prop="age" label="年龄" width="180" sortable></el-table-column>
      <el-table-column prop="date" label="生日" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
          <el-button
            type="text"
            size="small"
            @click.native.prevent="deleteRow(scope.$index, tableData)"
          >移除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      user: {
        name: "",
      },
      tableData: [
        {
          id: 1,
          name: "王小虎",
          sex: "男",
          age: 14,
          date: "2016-05-02",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 2,
          name: "王二虎",
          sex: "男",
          age: 13,
          date: "2016-05-02",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 3,
          name: "王仨虎",
          sex: "男",
          age: 12,
          date: "2016-05-02",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
    };
  },

  computed: {},

  components: {},

  created() {},

  mounted() {},

  methods: {
    onSubmit() {
      this.tableData = this.tableData.filter(
        (data) =>
          !this.search ||
          data.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    handleClick(row) {
      console.log(row);
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
};
</script>

<style scoped lang='scss'>
</style>