<template>
  <div class="goodsPlayPage">
    <div id="navBar"></div>
    <div class="goodsLayer">
      <GoodsInfo></GoodsInfo>
      <div class="IntroAndComments">
        <GoodsIntro></GoodsIntro>
      </div>
    </div>
    <FooterBlock></FooterBlock>
  </div>
</template>

<script>
import FooterBlock from "@/components/FooterBlock";
import GoodsInfo from "@/components/GoodsInfo";
import GoodsIntro from "@/components/GoodsIntro.vue";
export default {
  components: {
    FooterBlock,
    GoodsInfo,
    GoodsIntro,
  },
};
</script>

<style lang="scss" scoped>
#navBar {
  width: 100%;
  height: 55px;
  background-color: rgb(201, 107, 107);
}

.goodsLayer {
  height: 618px;
  width: 1300px;
  margin: 20px auto 10px auto;
  border-radius: 12px;
  position: relative;
  display: flex;
  flex-direction: row;
  background-color: rgb(255, 255, 255);
}

</style>