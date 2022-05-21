<template>
  <div class="classification">
    <span id="classificationTitle">商品分类</span>
    <div class="cl">
      <ul>
        <li>
          <font-awesome-icon icon="fa-regular fa-keyboard" /><a href="">1</a
          ><span>/</span><a href="">2</a><span>/</span><a href="">3</a>
        </li>
        <li>
          <i></i><a href="">1</a><span>/</span><a href="">2</a><span>/</span
          ><a href="">3</a>
        </li>
        <li>
          <i></i><a href="">1</a><span>/</span><a href="">2</a><span>/</span
          ><a href="">3</a>
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
  background-color: rgb(106, 27, 27);
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
      svg {
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