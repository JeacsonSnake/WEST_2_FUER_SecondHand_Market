<template>
  <div class="userPage">
    <div id="navBar"></div>
    <div class="userLayer">
      <UserDisplay></UserDisplay>
      <el-empty description="请点击按钮获取更多信息" v-show="empty"></el-empty>
      <router-view v-show="!empty"></router-view>
    </div>
    <FooterBlock></FooterBlock>
  </div>
</template>

<script>
import FooterBlock from "@/components/FooterBlock";
import UserDisplay from "@/components/UserDisplay.vue";
export default {
  computed: {
      empty(){
          return this.$store.state.isEmpty;
      }
  },

  components: {
    FooterBlock,
    UserDisplay,
  },

  methods: {
    ddd() {
      console.log(this.$route.path);
    },
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
  min-height: 608px;
  width: 1300px;
  margin: 20px auto;
  border-radius: 12px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
}
</style>