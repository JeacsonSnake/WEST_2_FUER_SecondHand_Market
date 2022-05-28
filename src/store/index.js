import Vue from 'vue'
import Vuex from 'vuex'
import {
    findSellingGood,
    searchUserByID,
    searchSellingGood,
    searchSellerGoods,
    searchBuyerGoods,
    findHistory,
    findCollect,

} from "../api";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        ifBar: true,
        isAuth: false,
        goodsUploadDialogVisible: false,
        sellingGoodsData: [],
        isEmpty: true,
        footPrintData: [],
        
        collectionData: [],

        buyInData: [],

        soldAwayData: [],
        userData: [],

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
        },

        GETSELLINGGOODSDATA(state, value) {
            state.sellingGoodsData = value;
        },

        GETUSERBYID(state, value) {
            state.userData = value;
        },

        SETUSERID(state, value) {
            state.userId = value;
        },

        GETFOOTPRINTDATA(state, value) {
            state.footPrintData = value;
        },

        GETCOLLECTIONDATA(state, value) {
            state.collectionData = value;
        },

        GETBUYINDATA(state, value) {
            state.buyInData = value;
        },

        GETSOLDAWAYDATA(state, value) {
            state.soldAwayData = value;
        },

        CHANGEEMPTY(state, value) {
            state.isEmpty = value;
        }

  },
    actions: {
       async getSellingGoodsData(context, value) {
           await findSellingGood().then((res) => {
                console.log(`res`, res);
                if (res.code === 200) {
                    context.commit('GETSELLINGGOODSDATA', res.data);
                } else {
                    throw 'Err!'
                }
            }).catch((err) => {
                console.log(err);
            })

        },
        
        async getUserByID(context, value) {
           await searchUserByID(value).then((res) => {
                console.log(`res`, res);
                if (res.code === 200) {
                    context.commit('GETUSERBYID', res.data);
                } else {
                    throw 'Err!'
                }
            }).catch((err) => {
                console.log(err);
            })

        },
        
        async getFootPrintData(context, value) {
            await findHistory(value).then((res) => {
                console.log(`res`, res);
                if (res.code === 200) {
                    context.commit('GETFOOTPRINTDATA', res.data);
                } else {
                    throw 'Err!'
                }
            }).catch((err) => {
                console.log(err);
            })
        },

        async getCollectionData(context, value) {
            await findCollect(value).then((res) => {
                console.log(`res`, res);
                if (res.code === 200) {
                    context.commit('GETCOLLECTIONDATA', res.data);
                } else {
                    throw 'Err!'
                }
            }).catch((err) => {
                console.log(err);
            })
        },

        async getBuyInData(context, value) {
            await searchBuyerGoods(value).then((res) => {
                console.log(`res`, res);
                if (res.code === 200) {
                    context.commit('GETBUYINDATA', res.data);
                } else {
                    throw 'Err!'
                }
            }).catch((err) => {
                console.log(err);
            })
        },

        async getSoldAwayData(context, value) {
            await searchSellerGoods(value).then((res) => {
                console.log(`res`, res);
                if (res.code === 200) {
                    context.commit('GETSOLDAWAYDATA', res.data);
                } else {
                    throw 'Err!'
                }
            }).catch((err) => {
                console.log(err);
            })
        },
  },
  modules: {
  }
})
