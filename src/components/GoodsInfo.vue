<template>
  <div class="goodsInfo">
    <div class="carousel">
      <el-carousel indicator-position="outside">
        <el-carousel-item
          v-for="(item, index) in goodsDetail.goodPictureUrl"
          :key="index"
        >
          <el-image
              :src="'http://' + item"
              class="goodsImage"
              
            />
        </el-carousel-item>
      </el-carousel>
    </div>

    <div id="sellerLayer">
      <span class="title">卖家：</span>
      <div class="seller" @click="pushUserPage(goodsDetail.sellerId)">
        <el-avatar
          :size="50"
          :src="goodsDetail.sellerPicUrl?goodsDetail.sellerPicUrl : circleUrl"
        ></el-avatar>
        <span id="sellerName">{{ goodsDetail.sellerName }}</span>
      </div>
    </div>

    <div class="goodsPrice">
      <span class="title">价格： </span>
      <span id="goodsPrice">￥ {{ goodsDetail.price }}</span>
    </div>

    <div class="goodsBtn">
      <el-button
        id="GBtn1"
        type="warning"
        icon="el-icon-star-off"
        @click="ghi()"
        circle
      ></el-button>
      <el-button id="GBtn2" type="primary" @click="pushOrderPage()"
        >即刻下单！</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    };
  },

  computed: {
      goodsDetail() {
          return this.$store.state.goodsDetailData[0];
      }
  },

  methods: {
    pushOrderPage() {
      this.$router.push({
        name: "OrderPage",
      });
    },
    ghi() {
        console.log(`this.goodsDetail`, this.goodsDetail);
    }
  },

  beforeUpdate() {
        console.log(`this.goodsDetail`, this.goodsDetail);
        this.goodsDetail.goodPictureUrl = this.goodsDetail.goodPictureUrl.trim().split(" ");
        this.$bus.$emit('desp', this.goodsDetail.goodDescrip);
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

.goodsImage {
    height: 100%;
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
  color: #fff;
}

#GBtn2:hover,
#GBtn2:focus {
  background: #f03737;
  border-color: #de3434;
  color: #fff;
}
</style>