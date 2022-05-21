<template>
  <div class="searchPage">
    <div id="navBar"></div>
    <GoodsLayer></GoodsLayer>
    <FooterBlock></FooterBlock>
  </div>
</template>

<script>
import GoodsLayer from "@/components/GoodsLayer";
import FooterBlock from "@/components/FooterBlock";
export default {
  components: {
    GoodsLayer,
    FooterBlock,
  },
};
</script>

<style lang="scss" scoped>
</style>