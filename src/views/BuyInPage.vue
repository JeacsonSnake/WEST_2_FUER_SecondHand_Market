<template>
  <div class="buyIn">
    <span class="layerTitle">我的买入</span>
    <el-table :data="buyInData" border class="buyInTable" v-show="getData">
      <el-table-column prop="id" label="商品ID" width="180"> </el-table-column>
      <el-table-column prop="type" label="商品标签" width="180">
      </el-table-column>
      <el-table-column prop="goodDescrip" label="商品描述" width="580">
      </el-table-column>
      <el-table-column prop="state" label="商品状态" width="180">
      </el-table-column>
      <el-table-column
        fixed="right"
        prop="updateTime"
        label="访问时间"
        width="120"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
    data() {
        return {
            getData: false,
            buyInData: []
        }
    },
    computed: {},

    methods: {
        deleteRow(index, rows) {
            rows.splice(index, 1);
        },
    },

    async created() {
    this.buyInData = await this.$store.state.buyInData;
    console.log(`this.buyInData`, this.buyInData);
    if (this.buyInData !== []) {
      this.buyInData.forEach(function (buyInData) {
        buyInData.updateTime =
          buyInData.updateTime[0] +
          "年" +
          buyInData.updateTime[1] +
          "月" +
          buyInData.updateTime[2] +
          "日 " +
          buyInData.updateTime[3] +
          ":" +
          buyInData.updateTime[4] +
          ":" +
          buyInData.updateTime[5];
      });
      this.getData = true;
    }
  },

};
</script>

<style lang="scss" scoped>
.buyIn {
  height: auto;
  width: 1200px;
  margin: 30px auto;
  border: 2px solid rgb(196, 196, 196);
  border-radius: 12px;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  justify-content: space-evenly;
}

.buyInTable {
  width: 100%;
  max-height: 1000px;
  margin-top: 20px;
}

.layerTitle {
  font-size: 25px;
}
</style>