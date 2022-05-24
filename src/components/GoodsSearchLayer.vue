<template>
  <div class="goodsSearchLayer">
    <el-row :gutter="20">
      <el-col :span="5" class="LayerCol">
        <div class="grid-content bg-purple">
          <el-card :body-style="{ padding: '3px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
              style="border-radius: 5px"
            />
            <div style="padding: 14px">
              <div class="goodsDiscript">
                <span>{{ goodDis }}</span>
              </div>
              <div class="goodTags">
                <el-tag class="goodTag">标签一</el-tag>
                <el-tag class="goodTag">标签一</el-tag>
              </div>
              <div class="cardBottom clearfix">
                <div class="user">
                  <el-avatar :size="25" :src="circleUrl"></el-avatar>
                  <div id="userName">我是用户mmmmm名</div>
                </div>
                <div class="goodsPrise">￥22</div>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>

      <el-col :span="5" class="LayerCol">
        <div class="grid-content bg-purple">
          <el-card :body-style="{ padding: '3px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
              style="border-radius: 5px"
            />
            <div style="padding: 14px">
              <div class="goodsDiscript">
                <span>{{ goodDis }}</span>
              </div>
              <div class="goodTags">
                <el-tag class="goodTag">标签一</el-tag>
                <el-tag class="goodTag">标签一</el-tag>
              </div>
              <div class="cardBottom clearfix">
                <div class="user">
                  <el-avatar :size="25" :src="circleUrl"></el-avatar>
                  <div id="userName">我是用户mmmmm名</div>
                </div>
                <div class="goodsPrise">￥22</div>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>

      <el-col :span="5" class="LayerCol">
        <div class="grid-content bg-purple">
          <el-card :body-style="{ padding: '3px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
              style="border-radius: 5px"
            />
            <div style="padding: 14px">
              <div class="goodsDiscript">
                <span>{{ goodDis }}</span>
              </div>
              <div class="goodTags">
                <el-tag class="goodTag">标签一</el-tag>
                <el-tag class="goodTag">标签一</el-tag>
              </div>
              <div class="cardBottom clearfix">
                <div class="user">
                  <el-avatar :size="25" :src="circleUrl"></el-avatar>
                  <div id="userName">我是用户mmmmm名</div>
                </div>
                <div class="goodsPrise">￥22</div>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>

      <el-col :span="5" class="LayerCol">
        <div class="grid-content bg-purple">
          <el-card :body-style="{ padding: '3px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
              style="border-radius: 5px"
            />
            <div style="padding: 14px">
              <div class="goodsDiscript">
                <span>{{ goodDis }}</span>
              </div>
              <div class="goodTags">
                <el-tag class="goodTag">标签一</el-tag>
                <el-tag class="goodTag">标签一</el-tag>
              </div>
              <div class="cardBottom clearfix">
                <div class="user">
                  <el-avatar :size="25" :src="circleUrl"></el-avatar>
                  <div id="userName">我是用户mmmmm名</div>
                </div>
                <div class="goodsPrise">￥22</div>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>

    <el-pagination
    :hidden="value"
    layout="prev, pager, next"
    :total="50">
  </el-pagination>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodDis: "好吃的汉堡AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      circleUrl: "",
      value: false
    };
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
  &:first-child{
      margin-top: 30px
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