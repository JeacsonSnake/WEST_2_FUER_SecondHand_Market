const LOCAL_STORAGE_KEY = "searchHistory";

class searchStore { }

//将[]存入localStorage
searchStore.saveHistory = (arr) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(arr));
}

//从localSotrage取出
searchStore.loadHistory = () =>JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))

//清空全部localStorage历史查询
searchStore.removeAllHistory=()=>{localStorage.removeItem(LOCAL_STORAGE_KEY)}

module.exports = searchStore
