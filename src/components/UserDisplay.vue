<template>
  <div class="userDisplay" v-if="getData">
    <div class="userInfoLayer">
      <el-avatar :size="200" :src="circleUrl"></el-avatar>
      <div class="userInfo">
        <div class="userName">
          <span>用户名： {{ userData[0].username }}</span>
        </div>
        <div class="userSex">
          <span>联系电话：{{ userData[0].contact }} </span>
        </div>
        <div class="btnHov">
          <el-button style="margin-left: 50px" round disabled
            >修改信息</el-button
          >
        </div>
      </div>
    </div>
    <div class="userBtnGroup">
      <el-row type="flex" class="userBtnRow">
        <el-col :span="12" class="userBtnCol btnHov">
          <el-button class="userBtn" round @click="pushFootPrint()"
            >我的足迹</el-button
          >
        </el-col>
        <el-col :span="12" class="userBtnCol btnHov" style="margin-left: 20px">
          <el-button class="userBtn" round @click="pushCollection()"
            >我的收藏</el-button
          >
        </el-col>
      </el-row>
      <el-row type="flex" class="userBtnRow">
        <el-col :span="12" class="userBtnCol btnHov">
          <el-button class="userBtn" round @click="pushBuyIn()"
            >我的买入</el-button
          >
        </el-col>
        <el-col :span="12" class="userBtnCol btnHov" style="margin-left: 20px">
          <el-button class="userBtn" round @click="pushSoldAway()"
            >我的卖出</el-button
          >
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      userData: [],
      getData: false,
    };
  },

  methods: {
    async pushFootPrint() {
      await this.$store.dispatch("getFootPrintData", this.userData[0].id);
      this.$store.commit("CHANGEEMPTY", false);
      this.$router.push({
        name: "footPrintPage",
      });
    },
    async pushCollection() {
      await this.$store.dispatch("getCollectionData", this.userData[0].id);
      this.$store.commit("CHANGEEMPTY", false);
      this.$router.push({
        name: "CollectionPage",
      });
    },
    async pushBuyIn() {
      await this.$store.dispatch("getBuyInData", this.userData[0].id);
      this.$store.commit("CHANGEEMPTY", false);
      this.$router.push({
        name: "BuyInPage",
      });
    },
    async pushSoldAway() {
      await this.$store.dispatch("getSoldAwayData", this.userData[0].id);
      this.$store.commit("CHANGEEMPTY", false);
      this.$router.push({
        name: "SoldAwayPage",
      });
    },
  },

  async created() {
    this.userData = await this.$store.state.userData;
    console.log(`this.$store.state.userData`, this.$store.state.userData);
    console.log(`this.userData`, this.userData);
    if (this.userData !== []) {
      this.getData = true;
    }
  },

  mounted() {},
};
</script>

<style lang="scss" scoped>
.userDisplay {
  height: 300px;
  width: 1200px;
  margin: 30px auto;
  border-radius: 20px;
  position: relative;
  display: flex;
  flex-direction: row;
  background-color: rgba(231, 201, 201, 0.45);
  align-items: center;
  justify-content: space-evenly;
}

.userInfoLayer {
  width: 700px;
  height: 90%;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.userInfo {
  width: 400px;
  height: 100%;
  display: flex;
  margin-left: 50px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
}

.userBtnGroup {
  width: 270px;
  height: 250px;
  display: flex;
  flex-direction: column;
  background-color: rgba(229, 210, 210, 0.726);
  border-radius: 20px;
  justify-content: space-evenly;
  align-items: center;
}

.userBtnRow {
  height: 100px;
  width: 230px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  background-color: rgba(229, 210, 210, 0.726);
}

.userBtnCol {
  height: 100%;
  display: grid;
  justify-items: center;
}

.btnHov :hover,
.btnHov :focus {
  color: #ff4040;
  border-color: #ffc6c6;
  background-color: #ffecec;
}
</style>
