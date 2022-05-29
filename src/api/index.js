//API接口统一管理点
import requests from "./request";

export const findSellingGood = (params) => {
    //发请求
    return requests({
        url: 'http://4934d114v1.qicp.vip/good/findSellingGood',
        method: 'get',
        params
    })
}

export const searchSellingGood = (params) => {
    //发请求
    return requests({
        url: 'http://4934d114v1.qicp.vip/good/searchGood',
        method: 'get',
        params
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