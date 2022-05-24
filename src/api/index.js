//API接口统一管理点
import requests from "./request";

export const reqCategoryList = () => {
    //发请求
    return requests({url:'/good/findSellingGood',method:'get'})
}