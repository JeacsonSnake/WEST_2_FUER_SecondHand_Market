<template>
  <div class="footPrint">
    <span class="layerTitle">我的足迹</span>
    <el-table
      :data="footPrintData"
      border
      class="footPrintTable"
      v-show="getData"
    >
      <el-table-column prop="id" label="商品ID" width="180"> </el-table-column>
      <el-table-column prop="type" label="商品标签" width="180">
      </el-table-column>
      <el-table-column prop="goodDescrip" label="商品描述" width="540">
      </el-table-column>
      <el-table-column prop="state" label="商品状态" width="180">
      </el-table-column>
      <el-table-column prop="updateTime" label="访问时间" width="120">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      getData: false,
      footPrintData: [],
    };
  },

  computed: {},

  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
  },

  async created() {
    this.footPrintData = await this.$store.state.footPrintData;
    console.log(`this.footPrintData`, this.footPrintData);
    if (this.footPrintData !== []) {
      this.footPrintData.forEach(function (footPrintData) {
        let a1 = "日 ";
        let a2 = ":";
        let a3 = ":";
        if (footPrintData.updateTime[3] < 9) {
          a1 = "日 0";
        }
        if (footPrintData.updateTime[4] < 9) {
          a2 = ":0";
        }
        if (footPrintData.updateTime[5] < 9) {
          a3 = ":0";
        }
        footPrintData.updateTime =
          footPrintData.updateTime[0] +
          "年" +
          footPrintData.updateTime[1] +
          "月" +
          footPrintData.updateTime[2] +
          a1 +
          footPrintData.updateTime[3] +
          a2 +
          footPrintData.updateTime[4] +
          a3 +
          footPrintData.updateTime[5];
      });
      this.getData = true;
    }
  },
};
</script>

<style lang="scss" scoped>
.footPrint {
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

.footPrintTable {
  width: 100%;
  max-height: 1000px;
  margin-top: 20px;
  overflow: auto;
}

.layerTitle {
  font-size: 25px;
}
</style>