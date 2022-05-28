<template>
  <div class="collection">
    <span class="layerTitle">我的收藏</span>
    <el-table :data="collectionData" border class="collectionTable" v-show="getData">
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
            collectionData: []
        }
    },
    computed: {},

    methods: {
        deleteRow(index, rows) {
            rows.splice(index, 1);
        },
    },

    async created() {
    this.collectionData = await this.$store.state.collectionData;
    console.log(`this.collectionData`, this.collectionData);
    if (this.collectionData !== []) {
      this.collectionData.forEach(function (collectionData) {
        collectionData.updateTime =
          collectionData.updateTime[0] +
          "年" +
          collectionData.updateTime[1] +
          "月" +
          collectionData.updateTime[2] +
          "日 " +
          collectionData.updateTime[3] +
          ":" +
          collectionData.updateTime[4] +
          ":" +
          collectionData.updateTime[5];
      });
      this.getData = true;
    }
  },
};
</script>

<style lang="scss" scoped>
.collection {
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

.collectionTable {
  width: 100%;
  max-height: 1000px;
  margin-top: 20px;
}

.layerTitle {
  font-size: 25px;
}
</style>