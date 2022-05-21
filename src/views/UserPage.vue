<template>
  <div class="userPage">
    <div id="navBar"></div>
    <div class="userLayer">
        <UserDisplay></UserDisplay>
    </div>
    <FooterBlock></FooterBlock>
  </div>
</template>

<script>
import FooterBlock from "@/components/FooterBlock";
import UserDisplay from '@/components/UserDisplay.vue';
export default {
  components: {
    FooterBlock,
    UserDisplay,
  },
};
</script>

<style lang="scss" scoped>
#navBar {
  width: 100%;
  height: 55px;
  background-color: rgb(227, 198, 198);
}
.userLayer {
  height: 1000px;
  width: 1300px;
  margin: 20px auto;
  border-radius: 12px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
}
</style>