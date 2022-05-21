<template>
  <div class="homePage">
    <div id="navBar"></div>
    <ScreenOuter></ScreenOuter>
    <div class="GuessWantTitle"><span>猜你喜欢</span></div>
    <GoodsLayer></GoodsLayer>
    <FooterBlock></FooterBlock>
  </div>
</template>

<script>
import ScreenOuter from "../components/ScreenOuter";
import GoodsLayer from "@/components/GoodsLayer";
import FooterBlock from "@/components/FooterBlock";
export default {
  data() {
    return {
      circleUrl: "",
    };
  },
  components: {
    ScreenOuter,
    GoodsLayer,
    FooterBlock,
  },
};
</script>

<style lang="scss" scoped>
* {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  background-color: #e8e2e0;
}

#navBar {
  width: 100%;
  height: 55px;
  background-color: rgb(255, 255, 255);
}

.GuessWantTitle {
  height: 65px;
  width: 1300px;
  margin: 0 auto;
  //   border-radius: 18px 18px 0 0;
  position: relative;
  color: rgb(255, 255, 255);
  font-size: 45px;
  background-color: rgb(169, 125, 125);
  span {
    background-color: inherit;
  }
}
</style>