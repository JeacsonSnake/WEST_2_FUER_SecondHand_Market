import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        ifBar: true,
        isAuth: false,
        goodsUploadDialogVisible: false,
        footPrintData: [

            {
                date: '2018-05-03',
                name: '王小',
                address: '上海市普陀区金沙江路 1555 弄'
            },

        ],
        
        collectionData: [

            {
                date: '2017-05-03',
                name: '王虎',
                address: '上海市普陀区金沙江路 1544 弄'
            },

        ],

        buyInData: [

            {
                date: '2016-06-03',
                name: '小虎',
                address: '上海市普陀区金沙江路 1534 弄'
            },

        ],

        soldAwayData: [

            {
                date: '2013-05-08',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1523 弄'
            },

        ],
  },
  getters: {
  },
    mutations: {
        ChangeBar(state,value) {
            state.ifBar = value;
        },
        ChangeGoodsUploadDialogVisible(state, value) {
            console.log("change!", value);
            state.goodsUploadDialogVisible = value;
        }
  },
  actions: {
  },
  modules: {
  }
})
