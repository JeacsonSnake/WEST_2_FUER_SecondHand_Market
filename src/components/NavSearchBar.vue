<template>
  <div class="navSearchBar">
    <el-row id="searchRow">
      <el-col>
        <el-input
          v-model="search"
          @focus="focus"
          @blur="blur"
          @keyup.enter.native="searchHandler"
          placeholder="搜索二手商品→"
          class="searchBar"
        >
          <el-button
            slot="append"
            icon="el-icon-search"
            id="search"
            @click="searchHandler"
          ></el-button>
        </el-input>
        <!---设置z-index优先级,防止被走马灯效果遮挡-->
        <el-card
          @mouseenter="enterSearchBoxHanlder"
          v-if="isSearch"
          id="search-box"
        >
          <dl v-if="isHistorySearch">
            <dt class="search-title" v-show="history">历史搜索</dt>
            <dt
              class="remove-history"
              v-show="history"
              @click="removeAllHistory"
            >
              <i class="el-icon-delete"></i>清空历史记录
            </dt>
            <el-tag
              v-for="search in historySearchList"
              :key="search.id"
              closable
              :type="search.type"
              @close="closeHandler(search)"
              style="margin-right: 5px; margin-bottom: 5px"
              >{{ search.name }}</el-tag
            >
            <dt class="search-title">热门搜索</dt>
            <dd v-for="search in hotSearchList" :key="search.id">
              {{ search }}
            </dd>
          </dl>
          <dl v-if="isSearchList">
            <dd v-for="search in searchList" :key="search.id">{{ search }}</dd>
          </dl>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Store from "../store";
import searchStore from "../../utils/searchStore";
export default {
  name: "NavSearchBar",
  data() {
    return {
      search: "", //当前输入框的值
      isFocus: false, //是否聚焦
      hotSearchList: ["暂无热门搜索"], //热门搜索数据
      historySearchList: [], //历史搜索数据
      searchList: ["暂无数据"], //搜索返回数据,
      history: false,
      types: ["", "success", "info", "warning", "danger"], //搜索历史tag式样
    };
  },
  methods: {
    focus() {
      this.isFocus = true;
      this.historySearchList =
        searchStore.loadHistory() == null ? [] : searchStore.loadHistory();
      this.history = this.historySearchList.length == 0 ? false : true;
    },
    blur() {
      var self = this;
      this.searchBoxTimeout = setTimeout(function () {
        self.isFocus = false;
      }, 300);
    },
    enterSearchBoxHanlder() {
      clearTimeout(this.searchBoxTimeout);
    },
    searchHandler() {
      //随机生成搜索历史tag式样
      let n = this.getRandomNumber(0, 5);
      let exist =
        this.historySearchList.filter((value) => {
          return value.name == this.search;
        }).length == 0
          ? false
          : true;
      if (!exist) {
        this.historySearchList.push({ name: this.search, type: this.types[n] });
        searchStore.saveHistory(this.historySearchList);
      }
      this.history = this.historySearchList.length == 0 ? false : true;
      let self = this;
      this.isFocus = false;
      this.$router.push({
        name: "searchPage",
        query: {
          searchItem: self.search,
        },
      });
    },
    closeHandler(search) {
      this.historySearchList.splice(this.historySearchList.indexOf(search), 1);
      searchStore.saveHistory(this.historySearchList);
      clearTimeout(this.searchBoxTimeout);
      if (this.historySearchList.length == 0) {
        this.history = false;
      }
    },
    removeAllHistory() {
      searchStore.removeAllHistory();
    },
    getRandomNumber(min, max) {
      parseInt(Math.random() * (max - min)) + min;
    },
  },
  computed: {
    isHistorySearch() {
      return this.isFocus && !this.search;
    },
    isSearchList() {
      return this.isFocus && this.search;
    },
    isSearch() {
      return this.isFocus;
    },
  },
};
</script>

<style  lang="scss" scoped>
.left {
  margin-left: 200px;
}

#searchRow {
  width: 700px;
  border-radius: 12px;
  overflow: hidden;
  &:focus {
    border: 0.5px solid #943233;
  }
}

.searchBar {
  border-radius: 12px;
  :focus {
    border: 0.5px solid #943233;
    border-radius: 12px 0 0 12px;
  }
}

#search {
  background-color: #c03331;
  color: rgb(243, 232, 232);
  border-radius: 0%;
}

#search-box {
  position: fixed;
  z-index: 15;
  width: 100%;
  width: 641px;
  height: 300px;
  margin-top: 0px;
  padding-bottom: 20px;
}

.search-title {
  color: #ead3d3;
  font-size: 15px;
  margin-bottom: 5px;
}

.remove-history {
  color: #bdbaba;
  font-size: 15px;
  float: right;
  margin-top: -2px;
  cursor: pointer;
}
</style>