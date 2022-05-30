<template>
  <div class="searchPage">
    <div id="navBar"></div>
    <GoodsSearchLayer v-show="isSearchUpdate"></GoodsSearchLayer>
    <FooterBlock></FooterBlock>
  </div>
</template>

<script>
import GoodsSearchLayer from "@/components/GoodsSearchLayer";
import FooterBlock from "@/components/FooterBlock";
export default {
  computed: {
      isSearchUpdate: async function() {
          return await this.$store.state.isSearchUpdate;
      }
  },

  props: ["searchItem"],

  components: {
    GoodsSearchLayer,
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
  background-color: rgb(219, 182, 182);
}
</style>