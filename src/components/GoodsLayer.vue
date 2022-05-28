<template>
  <div class="goodsLayer">
    <el-row :gutter="20">
      <el-col
        :span="5"
        class="LayerCol"
        style="margin-top: 30px"
        v-for="Goods in sellingGoodsData.slice(0,8)"
      >
        <div class="grid-content bg-purple">
          <el-card :body-style="{ padding: '3px' }">
            <el-image
              :src="'http://' + Goods.pictureUrl[0]"
              class="image"
              lazy
            />
            <div style="padding: 14px">
              <div class="goodsDiscript">
                <span @click="pushGoodsPage()">{{ Goods.goodDescrip }}</span>
              </div>
              <div class="goodTags">
                <el-tag class="goodTag">{{ Goods.type }}</el-tag>
              </div>
              <div class="cardBottom clearfix">
                <div class="user">
                  <el-avatar
                    :size="25"
                    :src="circleUrl"
                    @click="pushUserPage()"
                  ></el-avatar>
                  <div id="userName" @click="pushUserPage()">查看卖家</div>
                </div>
                <div class="goodsPrise">￥{{Goods.price}}</div>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
      goodDis: "好吃的汉堡AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      sellingGoodsData: [],
    };
  },

  computed: {},

  methods: {
    pushGoodsPage() {
      this.$router.push({
        name: "goodsDisplayPage",
      });
    },
    pushUserPage() {
      this.$router.push({
        name: "userPage",
      });
    },

  },

  async created() {
    await this.$store.dispatch("getSellingGoodsData");
    this.sellingGoodsData = this.$store.state.sellingGoodsData;
    this.sellingGoodsData.forEach (
        function(goods) {
            goods.pictureUrl = goods.pictureUrl.trim().split(" ");
        }
    )
    console.log(this.sellingGoodsData);
  },

  mounted() {},
};
</script>

<style lang="scss" scoped>
.goodsLayer {
  height: auto;
  width: 1300px;
  margin: 0 auto 20px auto;
  border-radius: 0 0 12px 12px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}

.LayerCol {
  margin: 15px 27px 15px 27px;
}

.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.goodsDiscript {
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
}

.goodTag {
  margin-right: 10px;
}

.cardBottom {
  height: 100%;
  margin-top: 13px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
  border-radius: 5px;
  height: 250px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.user {
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#userName {
  width: 100px;
  min-width: 0;
  height: 100%;
  margin: 0 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.goodsPrise {
  color: rgb(240, 65, 65);
}
</style>