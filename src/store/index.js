import Vue from 'vue'
import Vuex from 'vuex'
import {
    findSellingGood,
    searchUserByID,
    searchGood,
    searchSellerGoods,
    searchBuyerGoods,
    findHistory,
    findCollect,
    registerModule,
    loginModule,
    searchGoodByID,

} from "../api";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        ifBar: true,
        isAuth: false,
        isEmpty: true,
        isRepeat: false,
        inputError: false,
        isSearchUpdate: false,
        goodsUploadDialogVisible: false,
        sellingGoodsData: [],
        goodsDetailData: [],
        collectionData: [],
        footPrintData: [],
        soldAwayData: [],
        searchData: [],
        sellerData: [],
        buyInData: [],
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
        },

        ISREPEAT(state, value) {
            state.isRepeat = value;
        },

        INPUTERROR(state, value) {
            state.inputError = value;
        },

        SETAUTH(state, value) {
            state.isAuth = value;
        },

        SETSEARCHDATA(state, value) {
            state.searchData = value;
        },

        SETSEARCHUPDATE(state, value) {
            state.isSearchUpdate = value;
        },

        SETGOODSDETAILDATA(state, value) {
            state.goodsDetailData = value;
        },

        GETSELLERDATA(state, value) {
            state.sellerData = value;
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
                if (err.message == "interrupt") {
                    console.log('已中断请求');
                    return;
                }
            })

        },

        async getGoodByID(context, value) {
            await searchGoodByID(value).then((res) => {
                console.log(`res`, res);
                if (res.code === 200) {
                    console.log(`res.data`, res.data);
                    context.commit('SETGOODSDETAILDATA', res.data);
                } else {
                    throw 'Err!'
                }
            }).catch((err) => {
                console.log(err);
            })
        },

        async getSearchData(context, value) {
            await searchGood(value).then((res) => {
                console.log(`res`, res);
                if (res.code === 200) {
                    context.commit('SETSEARCHDATA', res.data);
                    context.commit("SETSEARCHUPDATE", true);
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

        async getSellerByID(context, value) {
           await searchUserByID(value).then((res) => {
                console.log(`res`, res);
                if (res.code === 200) {
                    context.commit('GETSELLERDATA', res.data);
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

        async regist(context, value) {
            await registerModule(value).then((res) => {
                if (res.code === 200) {
                    context.commit('ISREPEAT', false);
                } else if (res.code === 409) {
                    context.commit('ISREPEAT', true);
                }else {
                    throw 'Err!'
                }
            }).catch((err) => {
                console.log(err);
            })
        },

        async login(context, value) {
            await loginModule(value).then((res) => {
                if (res.code === 200) {
                    const user = {
                        id: res.data.userId,
                        name: res.data.username
                    }
                    context.commit('INPUTERROR', false);
                    context.commit('SETAUTH', true);
                    window.sessionStorage.setItem("token", res.data.token);
                    window.localStorage.setItem("user",JSON.stringify(user));


                } else if (res.status === 403) {
                    context.commit('INPUTERROR', true);
                }else {
                    throw res
                }
            }).catch((err) => {
                console.log(err);
            })
        }
  },
  modules: {
  }
})
