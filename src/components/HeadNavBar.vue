<template>
  <div>
    <nav class="headNavbar" v-show="ifBar">
      <div class="WebIcon">
        <img
          class="IconImg"
          src="../assets/logo.png"
          alt=""
          @click="pushHomePage()"
        />
      </div>
      <NavSearchBar></NavSearchBar>
      <div id="publishItem">
        <el-button class="btnColor" round @click="gUDVchange(true)">
          发布商品
        </el-button>
      </div>
      <div class="userDisplay">
        <div class="user" v-show="!isAuth">
          <el-avatar
            :size="50"
            :src="circleUrl"
            @click="pushUserPage()"
          ></el-avatar>
          <span id="userName" @click="pushUserPage()">我是用户mmmmm名</span>
          <div class="exit">
            <el-button
              class="headNavbar-Item btnColor"
              style="margin-left: 20px"
              round
              @click="pushLoginPage"
              type="danger"
            >
              退出
            </el-button>
          </div>
        </div>
        <div class="userLogin" v-show="isAuth">
          <el-button
            class="headNavbar-Item btnColor"
            round
            @click="pushLoginPage"
            >登录/注册</el-button
          >
        </div>
      </div>
    </nav>
    <keep-alive>
      <GoodsUpload></GoodsUpload>
    </keep-alive>
  </div>
</template>

<script>
import NavSearchBar from "./NavSearchBar";
import GoodsUpload from "./GoodsUpload.vue";

export default {
  data() {
    return {
      circleUrl: "",
    };
  },

  components: {
    NavSearchBar,
    GoodsUpload,
  },

  methods: {
    gUDVchange(value) {
      console.log("send!!", value);
      this.$store.commit("ChangeGoodsUploadDialogVisible", value);
    },

    pushHomePage() {
      this.$router.push({
        name: "homePage",
      });
    },
    pushLoginPage() {
      this.$router.push({
        name: "login",
      });
    },
    pushUserPage() {
      this.$router.push({
        name: "userPage",
      });
    },
  },

  computed: {
    ifBar() {
      return this.$store.state.ifBar;
    },
    isAuth() {
      return this.$store.state.isAuth;
    },
  },
};
</script>

<style lang="scss" scoped>
.headNavbar {
  height: 55px;
  width: 100%;
  background-color: rgba(215, 201, 201, 0.434);
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 20;
}


.WebIcon {
  height: 40px;
  margin-left: 100px;
}

.IconImg {
  height: 100%;
  cursor: pointer;
}

.navSearchBar {
  margin-left: 80px;
}

#publishItem {
  margin-left: 70px;
}

.btnColor:focus,
.btnColor:hover {
  color: #e4cbcb;
  border-color: #efa3a1;
  background-color: #d85851;
}

.userDisplay {
  width: 400px;
  margin-left: 80px;
}

.user {
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
}

#userName {
  width: 122px;
  margin-left: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.userLogin {
  display: flex;
  justify-content: center;
  align-items: center;
}

.headNavbar-Item {
  height: 100%;
}
</style>