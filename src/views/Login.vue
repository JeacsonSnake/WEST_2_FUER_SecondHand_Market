<template>
  <div class="pages">
    <div class="blurBlock">
      <div class="login">
        <div style="width: 100%; display: flex">
          <div class="title">
            <div id="BigTitle">登录</div>
            <div id="SmallTitle">氟贰--校内二手平台</div>
          </div>
        </div>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="auto"
          class="demo-ruleForm"
          size="large"
        >
          <el-form-item
            label="用户名"
            prop="userName"
            style="margin-bottom: 35px"
          >
            <el-input
              type="text"
              v-model="ruleForm.userName"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass" style="margin-bottom: 35px">
            <el-input
              type="password"
              v-model="ruleForm.pass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="submitForm('ruleForm')"
              style="
                background-color: #c03331;
                border-color: #c03331;
                width: 180px;
                margin-right: 40px;
              "
              :loading="load"
              round
              >登录</el-button
            >
            <el-button
              round
              @click="resetForm('ruleForm')"
              style="width: 180px"
              class="btns"
              >清空</el-button
            >
          </el-form-item>
        </el-form>
        <div style="display: flex; padding-left: 225px">
          <span>还未注册? <router-link to="/register">注册</router-link></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const validateUserName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };

    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        userName: "",
        pass: "",
      },
      rules: {
        userName: [{ validator: validateUserName, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
      },
      load:false
    };
  },
  methods: {
    submitForm() {
        this.load = true;
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          const v = {
            username: this.$refs.ruleForm.model.userName,
            password: this.$refs.ruleForm.model.pass,
          };
          await this.$store.dispatch("login", v);
          let inputError = await this.fetchInputError();
          if (inputError) {
              this.$nextTick(() => {
                this.$message({
                  message: "用户名或密码输入错误！！",
                  type: "error",
                });
                this.$store.commit("INPUTERROR", false);
                this.load = false;
              });
            } else {
              this.$message({
                message: "登陆成功！跳转至主页",
                type: "success",
              });
              this.$router.push("/");
            }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    async fetchInputError() {
      const ie = await this.$store.state.inputError;
      return ie;
    },
  },
};
</script>

<style scoped>
a {
  color: #e46e6c;
}

.pages {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(89, 57, 57);
}

.blurBlock {
  width: 40%;
  height: 80%;
  background-color: rgba(198, 186, 186, 0.66);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
}

.login {
  width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 26px;
}

.title {
  margin-bottom: 50px;
  margin-top: 40px;
}

#BigTitle {
  font-size: 60px;
}

#SmallTitle {
  font-size: 6px;
}

.btns:hover,
.btns:focus {
  color: #e4cbcb;
  border-color: #e6635e;
  background-color: #d85851;
}
</style>