<template>
  <div class="goodsIntro">

    <div class="goodsDesLayer">
      <span class="title">商品描述：</span>
      <div class="goodsDes">
          {{goodsIntro}}
      </div>
    </div>

    <div class="goodsDesLayer">
      <span class="title">商品评论：</span>
      <div class="goodsDes">
          <ul></ul>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  data() {
    return {
      goodsIntro: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, expedita? Reprehenderit similique magnam sed officia? Adipisci unde commodi ut magni accusantium quas nobis? Quisquam vitae dolorem, mollitia dolore totam assumenda?",
      comment: {
          
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.goodsIntro {
  height: 580px;
  width: 600px;
  margin: 20px 20px;
  border-radius: 12px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: rgb(234, 151, 151);
}

.title {
  margin: 18px;
  font-size: 28px;
  width: 200px;
  text-align: left;
  color: rgb(255, 255, 255);
}

.goodsDesLayer {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.goodsDes {
    width: 80%;
    height: auto;
    max-height: 200px;
    border: 2px solid #fff;
    margin-left: 20px;
    width: 550px;
    border-radius: 12px 0 0 12px;
    font: 2em sans-serif;
    overflow: auto;
    
}
</style>