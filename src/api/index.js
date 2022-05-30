//API接口统一管理点
import requests from "./request";
import Vue from 'vue'
import axios from "axios";

export const findSellingGood = (params) => {
    //发请求
    return requests({
        url: 'http://4934d114v1.qicp.vip/good/findSellingGood',
        method: 'get',
        params,
        cancelToken: new axios.CancelToken(c => {          
        Vue.prototype.$httpRequestList.push(c);    //中断请求时,将对应中断方法存进集合
      })
    })
}

export const searchGood = (value) => {
    //发请求
    return requests({
        url: 'http://4934d114v1.qicp.vip/good/searchGood',
        method: 'get',
        params: {
            goodDescrip: value
        }
    })
}

export const searchUserByID = (value) => {
    //发请求
    return requests({
        url: 'http://4934d114v1.qicp.vip/checked/searchUserByID',
        method: 'get',
        params: {
            userID: value,
        }
    })
}

export const searchSellerGoods = (value) => {
    //发请求
    return requests({
        url: 'http://4934d114v1.qicp.vip/user/sellerGoods',
        method: 'get',
        params: {
            sellerId: value,
        }
    })
}

export const searchBuyerGoods = (value) => {
    //发请求
    return requests({
        url: 'http://4934d114v1.qicp.vip/user/buyerGoods',
        method: 'get',
        params: {
            buyerId: value,
        }
    })
}

export const findHistory = (value) => {
    //发请求
    return requests({
        url: 'http://4934d114v1.qicp.vip/user/findHistory',
        method: 'get',
        params: {
            userId: value,
        }
    })
}

export const findCollect = (value) => {
    //发请求
    return requests({
        url: 'http://4934d114v1.qicp.vip/collect/findCollect',
        method: 'get',
        params: {
            userId: value,
        }
    })
}

export const registerModule = (value) => {
    //发请求
    return requests({
        url: 'http://4934d114v1.qicp.vip/user/regist',
        method: 'post',
        params: {
            username: value.username,
            password: value.password
        }
    })
}

export const loginModule = (value) => {
    return requests({
        url: 'http://4934d114v1.qicp.vip/user/login',
        method: 'post',
        params: {
            username: value.username,
            password: value.password
        }
    })
}