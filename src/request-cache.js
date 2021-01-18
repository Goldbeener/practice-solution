/** 
 * 前端请求缓存解决方案
 * 
 * */ 


/**
 * 第一次请求之后存入缓存，后续的从缓存读取
 * 
 * 缺点：
 * 没有缓存的时候，并且2个地方几乎同时发生数据读取行为的时候，会发出2个请求
 * 没有缓存的更新、删除逻辑
*/
(() => {
    const dataCache = new Map();
    async function fetchData (url, method = 'GET', params) {
        let data = dataCache.get(url);

        if (!data) {
            const res = await axios[method](url, params);
            dataCache.set(url, res);
            data = res;
        }

        return data;
    }
})()


(() => {
    const promiseCache = new Map();

    const fetchService = (url, method = 'GET', params) {
        let promise = promiseCache.get(url);

        if (!promise) {
            promise = axios[method](url, params).catch(err => {
                promiseCache.delete(url);
            });
            promiseCache.set(url, promise);
        }

        return promise;
    }
})()





