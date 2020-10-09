<template>
  <div>
    <!-- form -->
    <el-dialog
      title="新增"
      :visible.sync="dialogFormVisible"
      @close="$emit('close')"
    >
      <el-form :model="form">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-radio-group v-model="form.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth">
          <el-input-number
            v-model="form.age"
            :min="1"
            :max="100"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="生日" :label-width="formLabelWidth">
          <el-date-picker
            v-model="form.date"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSub">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: true,
      form: {
        name: "",
        age: 0,
        sex: "",
        date: 0,
        adress: "",
      },
      formLabelWidth: "120px",
    };
  },

  computed: {},

  components: {},

  created() {},

  mounted() {},

  methods: {
    handleSub() {
      this.dialogFormVisible = false;
      console.log(this.form);
    },
  },
};
</script>

<style scoped lang='scss'>
</style>