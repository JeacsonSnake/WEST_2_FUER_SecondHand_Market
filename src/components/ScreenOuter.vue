<template>
  <div class="screenOuter">
    <Classification></Classification>
    <ShowLayer></ShowLayer>
  </div>
</template>

<script>
import Classification from './Classification.vue';
import ShowLayer from './ShowLayer.vue';
export default {
  components: { Classification, ShowLayer },};
</script>

<style lang="scss" scoped>
.screenOuter {
  height: 500px;
  width: 1300px;
  margin: 20px auto 0px auto;
  border-radius: 18px 18px 0 0;
  position: relative;
  display: flex;
  background-color: rgb(97, 20, 20);
}


</style>