<template>
  <div class="goodsIntro">
    <div class="goodsDesLayer">
      <span class="title">商品描述：</span>
      <div class="goodsDes">
        {{ goodsDescription }}
      </div>
    </div>
    <!-- 
    <div class="goodsDesLayer">
      <span class="title">商品评论：</span>
      <div class="goodsDes">
          <ul></ul>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
      return {
          goodsDescription: ""
      }
  },
  computed: {
  },
  methods: {
      getDESP(value) {
          this.goodsDescription = value;
      }
  },

  created() {
      this.$bus.$on('desp', this.getDESP);
  },
  
beforeDestroy() {
    this.$bus.$off('desp');
}

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
  min-height: 300px;
  height: auto;
  max-height: 400px;
  border: 2px solid #fff;
  margin-left: 20px;
  width: 550px;
  border-radius: 12px 0 0 12px;
  font: 2em sans-serif;
  overflow: auto;
}
</style>