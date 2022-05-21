<template>
  <div class="showLayer">
    <div class="Title">
      <img src="../assets/logo.png" class="WebIcon" alt="" />
      <div class="TitleName">氟贰--校内二手交易平台</div>
    </div>
    <div class="carousel">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.showLayer {
  display: flex;
  flex-direction: column;
  margin-left: 180px;
}

.Title {
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  justify-content: space-evenly;
}

.WebIcon {
  height: 100px;
}

.TitleName {
  font-size: 40px;
  color: rgb(179, 156, 156);
}

.carousel {
  width: 600px;
  height: 300px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>