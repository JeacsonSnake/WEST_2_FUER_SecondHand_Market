<template>
  <el-dialog
    title="商品发布"
    :visible.sync="goodsUploadDialogVisible"
    width="80%"
    :before-close="handleClose"
    :lock-scroll="false"
    :close-on-click-modal="false"
  >
    <el-form :model="form">
      <el-form-item label="上传图片" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="商品描述" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="gUDVchange(false)">取 消</el-button>
      <el-button type="primary" @click="gUDVchange(false)"> 确 定 </el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
    };
  },

  methods: {
    gUDVchange(value) {
      this.$store.commit("ChangeGoodsUploadDialogVisible", value);
    },

    handleClose() {
      this.$confirm("确认关闭？", {
        lockScroll: false,
        closeOnClickModal: false,
      })
        .then((_) => {
          this.$store.commit("ChangeGoodsUploadDialogVisible", false);
        })
        .catch((_) => {});
    },
  },

  computed: {
    goodsUploadDialogVisible() {
      return this.$store.state.goodsUploadDialogVisible;
    },
  },
};
</script>

<style>
</style>