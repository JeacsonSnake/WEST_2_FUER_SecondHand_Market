<template>
  <div class="classification">
    <span id="classificationTitle">商品分类</span>
    <div class="cl">
      <ul>
        <li>
          <font-awesome-icon icon="fa-regular fa-keyboard" />
          <a href="">玩具</a>
          <span>/</span>
          <a href="">玩具</a>
          <span>/</span>
          <a href="">光学镜头</a>
        </li>
        <li>
          <i class="el-icon-basketball"></i>
          <router-link to="">鞋子</router-link>
          <span>/</span>
          <a href="">鞋子</a>
          <span>/</span>
          <a href="">鞋子</a>
        </li>
        <li>
          <i class="el-icon-umbrella"></i>
          <a href="">生活用品</a>
          <span>/</span>
          <a href="">电子垃圾</a>
          <span>/</span>
          <a href="">饰品</a>
        </li>
        <li>
          <i class="el-icon-bicycle"></i>
          <a href="">学习用品</a>
          <span>/</span>
          <a href="">饰品</a>
          <span>/</span>
          <a href="">饰品</a>
        </li>
        <li>
          <i class="el-icon-umbrella"></i>
          <a href="">书籍</a>
          <span>/</span>
          <a href="">书籍</a>
          <span>/</span>
          <a href="">书籍</a>
        </li>
        <li>
          <i class="el-icon-umbrella"></i>
          <a href="">虚拟物品</a>
          <span>/</span>
          <a href="">虚拟物品</a>
          <span>/</span>
          <a href="">玩具</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.classification {
  width: 300px;
  height: 100%;
  background-color: rgb(233, 179, 179);
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;

  ul {
    list-style: none;
    li {
      overflow: hidden;
      line-height: 20px;
      height: 20px;
      position: relative;
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 14px;
      width: 212px;
      color: #666;
      svg,
      i {
        margin-right: 12px;
        font-size: 16px;
        width: 16px;
        height: 16px;
      }
      a {
        color: rgb(248, 248, 248);
        text-decoration: none;
      }
      span {
        height: 20px;
        overflow: hidden;
        width: 7px;
        padding: 0 8px;
      }
    }
  }
}

#classificationTitle {
  margin: 20px auto;
  font-size: 30px;
}
</style>