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