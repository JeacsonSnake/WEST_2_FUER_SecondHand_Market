<template>
  <div class="pages">
    <div class="blurBlock">
      <div class="login">
        <div style="width: 100%; display: flex">
          <div class="title">
            <div id="BigTitle">注册</div>
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
          <el-form-item
            label="确认密码"
            prop="checkPass"
            style="margin-bottom: 35px"
          >
            <el-input
              type="password"
              v-model="ruleForm.checkPass"
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
              round
              >提交</el-button
            >
            <el-button round @click="resetForm('ruleForm')" style="width: 180px"
              >清空</el-button
            >
          </el-form-item>
        </el-form>
        <div class="checkAttr">
          <el-checkbox v-model="ruleForm.check"
            >我已阅读并同意「用户协议」和「隐私条款」</el-checkbox
          >
        </div>
        <div style="display: flex; padding-left: 225px">
          <span>已经注册? <router-link to="/login">登录</router-link></span>
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
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        userName: "",
        pass: "",
        checkPass: "",
        check: false,
      },
      rules: {
        userName: [
          { validator: validateUserName, trigger: "blur" },
          { min: 2, max: 8, message: "长度在 2 到 8 个字符", trigger: "blur" },
        ],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      if (isAgree) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert("提交成功！正在跳转至登陆界面！");
            this.$router.push("/login");
          } else {
            console.log("提交失败！请重新提交！");
            return false;
          }
        });
      } else {
        alert("请先阅读并同意「用户协议」和「隐私条款」再进行提交！");
      }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
  background-color: rgb(48, 41, 41);
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
</style>