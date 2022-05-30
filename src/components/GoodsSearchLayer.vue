<template>
  <div class="goodsSearchLayer">
    <el-row :gutter="20" v-show="!isUpdate">
      <el-col
        :span="5"
        class="LayerCol"
        style="margin-top: 30px"
        v-for="Goods in searchData"
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
                <div class="goodsPrise">￥{{ Goods.price }}</div>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-empty description="无搜索结果" v-show="isEmpty"></el-empty>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      //   value: false,
      searchData: [],
      isEmpty: false,
    };
  },

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

  computed: {
    isUpdate: function () {
      return this.$store.state.isSearchUpdate;
    },
  },

  async created() {
    this.searchData = await this.$store.state.searchData;
    this.$store.commit("SETSEARCHUPDATE", false);
    if (this.searchData.length !== 0) {
      this.isEmpty = false;
      this.searchData.forEach(function (goods) {
        goods.pictureUrl = goods.pictureUrl.trim().split(" ");
      });
    } else {
      this.isEmpty = true;
    }
  },

  mounted() {},

  async beforeUpdate() {
    this.searchData = await this.$store.state.searchData;
    if (this.searchData.length !== 0) {
      this.$store.commit("SETSEARCHUPDATE", false);
      this.isEmpty = false;
      this.searchData.forEach(function (goods) {
        goods.pictureUrl = goods.pictureUrl.trim().split(" ");
      });
    } else {
      this.isEmpty = true;
    }
  },
};
</script>

<style lang="scss" scoped>
.goodsSearchLayer {
  border-radius: 12px;
  height: auto;
  min-height: 608px;
  max-height: 1260px;
  width: 1300px;
  margin: 20px auto;
  border-radius: 12px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
}

.el-row {
  margin-bottom: 20px;
  &:first-child {
    margin-top: 30px;
  }

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