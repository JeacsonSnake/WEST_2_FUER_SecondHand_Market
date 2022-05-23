<template>
  <div class="goodsInfo">
    <div class="carousel">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 10" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div id="sellerLayer">
      <span class="title">卖家：</span>
      <div class="seller" @click="pushUserPage()">
        <el-avatar :size="50" :src="sellerAvatarUrl"></el-avatar>
        <span id="sellerName">{{ sellerName }}</span>
      </div>
    </div>

    <div class="goodsPrice">
      <span class="title">价格： </span>
      <span id="goodsPrice">{{ goodsPrice }}</span>
    </div>

    <div class="goodsBtn">
      <el-button id="GBtn1" type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button id="GBtn2" type="primary">即刻下单！</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsPrice: "￥54",
      sellerAvatarUrl: "",
      sellerName: "gkmdtghkfghkf",
    };
  },
};
</script>

<style lang="scss" scoped>
.goodsInfo {
  height: 580px;
  width: 600px;
  margin: 20px 20px;
  border-radius: 12px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: rgb(101, 75, 75);
  align-items: center;
}

.carousel {
  width: 550px;
  height: 300px;
  margin-top: 20px;
}

.el-carousel__item {
  h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.goodsPrice {
  width: 550px;
  height: 50px;
  margin-top: 20px;
  display: flex;
}

.title {
  margin-left: 18px;
  font-size: 24px;
  width: 75px;
  text-align: left;
  color: rgb(213, 211, 211);
}

#goodsPrice {
  margin-left: 18px;
  font-size: 40px;
  width: 200px;
  text-align: left;
  color: rgb(255, 0, 0);
}

.goodsBtn {
  width: 560px;
  display: flex;
  margin: 20px;
}

#sellerLayer {
  width: 550px;
  height: 50px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.seller {
  margin: 30px auto 20px 20px;

  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
  }
}

#sellerName {
  font-size: 20px;
  max-width: 242px;
  margin-left: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgb(255, 255, 255);
}

#GBtn1 {
    margin-left: 20px;
}

#GBtn2 {
    margin-left: 60px;
    background: #ff6666;
    border-color: #ff6666;
    color: #FFF;
}

#GBtn2:hover, #GBtn2:focus {
    background: #f03737;
    border-color: #de3434;
    color: #FFF;
}
</style>