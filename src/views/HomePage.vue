<template>
  <div class="homePage">
    <div id="navBar"></div>
    <ScreenOuter></ScreenOuter>
    <GoodsLayer></GoodsLayer>
  </div>
</template>

<script>
import GoodsLayer from '@/components/GoodsLayer.vue';
import ScreenOuter from '../components/ScreenOuter'
export default {
    components: {
        ScreenOuter,
        GoodsLayer,
    }
};
</script>

<style lang="scss" scoped>
* {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

#navBar {
  width: 100%;
  height: 55px;
  background-color: rgb(238, 170, 170);
}


</style>