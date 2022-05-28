<template>
  <div class="orderPage">
    <div id="navBar"></div>
    <div class="orderLayer">
      <div style="width: 100%">
        <span id="pageTitle">订单确认：</span>
      </div>
      <hr />
      <div class="goodsInOrder">
        <div id="goodsImg">
          <img src="" alt="" />
        </div>

        <div class="goodsInfo">
          <div class="goodsIntro">
            <span>ashasdbzdfazsdbfB</span>
          </div>

          <div class="goodsTags">
            <el-tag>标签一</el-tag>
          </div>

          <div class="sellerLayer">
            <span class="title">卖家：</span>
            <div class="seller">
              <el-avatar
                :size="50"
                :src="sellerAvatarUrl"
                style="margin-left: 20px"
              ></el-avatar>
              <span id="sellerName">{{ sellerName }}</span>
            </div>
          </div>
        </div>

        <div class="NumInfo">
          <div class="goodsPrice">
            <span>￥36</span>
          </div>
        </div>
      </div>
      <hr />
      <div class="confirmBtn">
        <el-button id="Btn1" type="info" round @click="pushHomePage()"
          >取消</el-button
        >
        <el-button id="Btn2" round @click="orderConfirm()">确认订单</el-button>
      </div>
    </div>
    <FooterBlock></FooterBlock>
  </div>
</template>

<script>
import FooterBlock from "@/components/FooterBlock";
export default {
  data() {
    return {
      sellerName: "fffffff",
      sellerAvatarUrl: "",
    };
  },
  components: {
    FooterBlock,
  },

  methods: {
    pushHomePage() {
      this.$router.push({
        name: "homePage",
      });
    },

    orderConfirm() {
      this.$confirm("确认购买?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {

          this.$message({
            type: "success",
            message: "购买成功!请记得联系卖家交货！",
          });
          this.pushHomePage();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消下单！",
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
#navBar {
  width: 100%;
  height: 55px;
  background-color: rgb(201, 107, 107);
}

.orderLayer {
  height: 608px;
  width: 1300px;
  margin: 20px auto;
  border-radius: 12px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(255, 255, 255);
}

#pageTitle {
  height: 80px;
  width: 100%;
  font-size: 40px;
  display: flex;
  align-items: center;
  margin-left: 20px;
  color: rgb(153, 64, 64);
}

.goodsInOrder {
  width: 1100px;
  min-height: 320px;
  margin: 20px;
  display: flex;
  border-radius: 12px;
  background-color: rgb(163, 118, 118);
  align-items: center;
}

#goodsImg {
  margin: 0 20px;
  width: 180px;
  height: 180px;
  background-color: rgb(118, 103, 103);
  border: 2px solid rgb(134, 118, 118);
  border-radius: 12px;
  overflow: hidden;
  img {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    padding: 0;
  }
}

.goodsInfo {
  width: 600px;
  height: 180px;
  display: flex;
  flex-direction: column;
  border: 2px dashed rgb(168, 88, 88);
  border-radius: 6px;
  background-color: rgba(170, 149, 149, 0.89);
  margin-right: 30px;

  .goodsIntro {
    margin: 20px 40px;
    max-width: 560px;
    width: fit-content;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 20px;
  }

  .goodsTags {
    max-width: 560px;
    margin: 0px 40px 20px 40px;
    width: fit-content;
    span {
      margin-right: 10px;
    }
  }

  .sellerLayer {
    display: flex;
    margin-left: 40px;
    width: 600px;
    align-items: center;
    font-size: 20px;
    .seller {
      display: flex;
      width: 200px;
      align-items: flex-end;
      #sellerName {
        margin-left: 5px;
      }
    }
  }
}

.NumInfo {
  margin: 0 20px;
  width: 180px;
  height: 180px;
  //   background-color: #fff;
  display: flex;
  flex-direction: column;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .goodsPrice {
    width: 120px;
    height: 80px;
    font-size: 40px;
    color: rgb(223, 106, 106);
    background-color: rgb(222, 178, 178);
    border: 1px solid rgb(219, 142, 142);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      width: fit-content;
      height: fit-content;
    }
  }
}

.confirmBtn {
  margin-top: 78px;
  height: 100%;
  width: 400px;
  span {
    margin-right: 90px;
  }

  #Btn1 {
    margin-right: 50px;
  }

  #Btn2:hover,
  #Btn2:focus {
    color: #ff4040;
    border-color: #ffc6c6;
    background-color: #ffecec;
  }
}
</style>