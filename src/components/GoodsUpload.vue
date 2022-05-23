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
        <el-upload action="#" list-type="picture-card" :auto-upload="false">
          <i slot="default" class="el-icon-plus"></i>
          <div slot="file" slot-scope="{ file }">
            <img
              class="el-upload-list__item-thumbnail"
              :src="file.url"
              alt=""
            />
            <span class="el-upload-list__item-actions">
              <span
                class="el-upload-list__item-preview"
                @click="handlePictureCardPreview(file)"
              >
                <i class="el-icon-zoom-in"></i>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleDownload(file)"
              >
                <i class="el-icon-download"></i>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleRemove(file)"
              >
                <i class="el-icon-delete"></i>
              </span>
            </span>
          </div>
        </el-upload>
        <el-dialog :visible.sync="imgDialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
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
        imgUrl: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
      dialogImageUrl: "",
      imgDialogVisible: false,
      disabled: false,
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

    handleRemove(file) {
      console.log(file);
    },

    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    
    handleDownload(file) {
      console.log(file);
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