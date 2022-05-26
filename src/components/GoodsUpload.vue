<template>
  <el-dialog
    title="商品发布"
    :visible.sync="goodsUploadDialogVisible"
    :before-close="handleClose"
    width="820px"
    class="goodsDialog"
    :lock-scroll="false"
    :close-on-click-modal="false"
  >
    <el-form :model="form">
      <el-row>
        <el-col :span="11">
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
        </el-col>

        <el-col :span="11" style="margin-left: -37px">
          <el-form-item label="标签" :label-width="formLabelWidth">
            <el-tag
              :key="tag"
              v-for="tag in form.tags"
              closable
              :disable-transitions="false"
              @close="handleTagClose(tag)"
            >
              {{ tag }}
            </el-tag>
            <el-tooltip
              class="item"
              effect="dark"
              :content="tipContent"
              placement="top"
              :value="isSame"
            >
              <div style="width:100px">
                <el-input
                  class="input-new-tag"
                  v-if="inputVisible"
                  v-model="inputValue"
                  ref="saveTagInput"
                  size="mini"
                  @keyup.enter.native="handleTagInputConfirm"
                  @blur="handleTagInputConfirm"
                >
                </el-input>

                <el-button
                  v-else
                  class="button-new-tag"
                  size="small"
                  @click="showTagInput"
                  :disabled="isMax"
                >
                  + New Tag
                </el-button>
              </div>
            </el-tooltip>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item
        label="商品描述"
        :label-width="formLabelWidth"
        class="goodsDisp"
      >
        <el-input type="textarea" v-model="form.desc"></el-input>
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
        tags: [],
        resource: "",
        desc: "",
      },
      inputVisible: false,
      inputValue: "",
      formLabelWidth: "120px",
      dialogImageUrl: "",
      imgDialogVisible: false,
      disabled: false,
      isSame: false,
      tipContents: [
        "不要输入重复标签！",
        "请输入标签",
        "已达到最大标签数",
      ],
      tipContent: "请输入标签",
      isMax:false
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

    handleTagClose(tag) {
      this.form.tags.splice(this.form.tags.indexOf(tag), 1);
    },

    showTagInput() {
      this.inputVisible = true;
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleTagInputConfirm() {
      let inputValue = this.inputValue;
      let arr = this.form.tags;
      let isRepeat = false;
      let isMax = false;
      if (inputValue) {
        if (arr.length === 0) {
          arr.push(inputValue);
        } else if (arr.length === 3) {
          this.isMax = true;
          this.tipContent = this.tipContents[3];
          this.isSame = true;
        } else {
          let isOnly = arr.some((i) => {
            if (i === inputValue) {
              return true;
            }
          });
          console.log(isOnly);
          if (isOnly) {
            isRepeat = true;
            setTimeout(() => {
              this.tipContent = this.tipContents[0];
              this.isSame = true;
              console.log("@@@@@@@");
            }, 500);
          } else {
            arr.push(inputValue);
          }
        }
      }
      this.inputVisible = false;
      this.inputValue = "";
      this.isSame = false;
      setTimeout(() => {
        if (isRepeat) {
          this.tipContent = this.tipContents[1];
          console.log(this.tipContent);
          isRepeat = false;
        }
      }, 1000);
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

<style lang="scss" scoped>
.goodsDialog {
  /deep/.el-dialog {
    margin-top: 15vh;
    width: 820px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .goodsDisp {
      height: auto;
    }
  }
}
</style>