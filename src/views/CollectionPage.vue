<template>
  <div class="collection">
    <span class="layerTitle">我的收藏</span>
    <el-table :data="collectionData" border class="collectionTable">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, collectionData)"
            type="text"
            size="small"
          >
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  computed: {
    collectionData() {
      return this.$store.state.collectionData;
    },
  },

  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.collection {
  height: 1300px;
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