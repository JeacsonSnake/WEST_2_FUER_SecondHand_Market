<template>
  <div class="userDisplay">
      <div class="userInfoLayer">
          <el-avatar :size="200" :src="circleUrl"></el-avatar>
            <div class="userInfo">
                <div class="userName">用户名： wwwwwwwww</div>
                <div class="userSex">性别： agrsasg</div>
                <el-button>默认按钮</el-button>
            </div>
      </div>
      <div class="userBtnGroup">
          <el-row :span="1">
              <el-col><el-button>默认按钮</el-button></el-col>
              <el-col><el-button>默认按钮</el-button></el-col>
          </el-row>
          <el-row :span="1">
              <el-col><el-button>默认按钮</el-button></el-col>
              <el-col><el-button>默认按钮</el-button></el-col>
          </el-row>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.userDisplay {
  height: 300px;
  width: 1200px;
  margin: 30px auto;
  border-radius: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: rgb(210, 186, 186);
  justify-content: center;
}

.userInfoLayer {
    width: 600px;
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
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}
</style>