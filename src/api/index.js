import clientConfig from './client-config'
import { getCookie, checkStatus } from '../utils'
import 'whatwg-fetch'

// 解析返回值
const _parseResponse = (response) => response.json()

// 解析参数

const parseParams = (method, params) => {
    const headers = {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'sweet-token': getCookie('sun_userid')
    }
    if (!method) {
        return {
            headers
        }
    }
    return {
        headers,
        method,
        body: JSON.stringify(params)
    }
}


export default {
    // 登录
    login({ username, password }) {
        return new Promise((resolve, reject) => {
            console.log(clientConfig.api)
            fetch(`${clientConfig.api}bankend/login`, {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            }).then(checkStatus)
                .then(_parseResponse)
                .then(data => {
                    resolve(data)
                }).catch(err => {
                    reject(err)
                })
        })
    },
    // 获取轮播图列表
    getCarouselList({ limit, currentPage, sort }) {
        return new Promise((resolve, reject) => {
            const sort = sort ? `&sort=${sort}` : ''
            fetch(`${clientConfig.api}bankend/carousel/list?limit=${limit}&currentPage=${currentPage}${sort}`, parseParams())
                .then(checkStatus)
                .then(_parseResponse)
                .then(data => {
                    resolve(data)
                }).catch(err => {
                    reject(err)
                })
        })
    },
    // 添加轮播图
    createCarousel(params) {
        return new Promise((resolve, reject) => {
            fetch(`${clientConfig.api}bankend/carousel/add`, parseParams('POST', params))
                .then(checkStatus)
                .then(_parseResponse)
                .then(data => {
                    resolve(data)
                }).catch(err => {
                    reject(err)
                })
        })
    },
    // 删除轮播图
    removeCarouselById(id) {
        return new Promise((resolve, reject) => {
            fetch(`${clientConfig.api}bankend/carousel/delete`, parseParams('DELETE',{id}))
                .then(checkStatus)
                .then(_parseResponse)
                .then(data => {
                    resolve(data)
                }).catch(err => {
                    reject(err)
                })
        })
    },
    // 查看轮播图
    showCarouselById(id) {
        return new Promise((resolve, reject) => {
            fetch(`${clientConfig.api}bankend/carousel/view/${id}`, parseParams())
                .then(checkStatus)
                .then(_parseResponse)
                .then(data => {
                    resolve(data)
                }).catch(err => {
                    reject(err)
                })
        })
    },
    // 修改轮播图
    updateCarousel(params) {debugger
        return new Promise((resolve, reject) => {
            fetch(`${clientConfig.api}bankend/carousel/update`, parseParams('POST',params))
                .then(checkStatus)
                .then(_parseResponse)
                .then(data => {
                    resolve(data)
                }).catch(err => {
                    reject(err)
                })
        })
    }

}