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
        console.log(clientConfig.api)
        return fetch(`${clientConfig.api}bankend/login`, {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        }).then(checkStatus)
            .then(_parseResponse)
            .then(data => {
                return data
            }).catch(err => {
                return err
            })
    },
    // 获取轮播图列表
    getCarouselList({ limit, currentPage, sort }) {
        sort = sort ? `&sort=${sort}` : ''
        return fetch(`${clientConfig.api}bankend/carousel/list?limit=${limit}&currentPage=${currentPage}${sort}`, parseParams())
            .then(checkStatus)
            .then(_parseResponse)
            .then(data => {
                return data
            }).catch(err => {
                return err
            })
    },
    // 添加轮播图
    createCarousel(params) {
        return fetch(`${clientConfig.api}bankend/carousel/add`, parseParams('POST', params))
            .then(checkStatus)
            .then(_parseResponse)
            .then(data => {
                return data
            }).catch(err => {
                return err
            })
    },
    // 删除轮播图
    removeCarouselById(id) {
        return fetch(`${clientConfig.api}bankend/carousel/delete`, parseParams('DELETE', { id }))
            .then(checkStatus)
            .then(_parseResponse)
            .then(data => {
                return data
            }).catch(err => {
                return err
            })
    },
    // 查看轮播图
    showCarouselById(id) {
        return fetch(`${clientConfig.api}bankend/carousel/view/${id}`, parseParams())
            .then(checkStatus)
            .then(_parseResponse)
            .then(data => {
                return data
            }).catch(err => {
                return err
            })
    },
    // 修改轮播图
    updateCarousel(params) {
        return fetch(`${clientConfig.api}bankend/carousel/update`, parseParams('POST', params))
            .then(checkStatus)
            .then(_parseResponse)
            .then(data => {
                return data
            }).catch(err => {
                return err
            })
    },
    // 获取分类列表
    getCateList({ limit, currentPage, sort }) {
        sort = sort ? `&sort=${sort}` : ''
        return fetch(`${clientConfig.api}bankend/sweetCate/list?limit=${limit}&currentPage=${currentPage}${sort}`, parseParams())
            .then(checkStatus)
            .then(_parseResponse)
            .then(data => {
                return data
            }).catch(err => {
                return err
            })
    },
    // 查看分类信息
    viewCateInfo(id) {
        return fetch(`${clientConfig.api}bankend/sweetCate/view/${id}`, parseParams())
            .then(checkStatus)
            .then(_parseResponse)
            .then(data => {
                return data
            }).catch(err => {
                return err
            })
    },
    //添加分类信息
    addCateInfo(params) {
        return fetch(`${clientConfig.api}bankend/sweetCate/add`, parseParams('POST', params))
            .then(checkStatus)
            .then(_parseResponse)
            .then(data => {
                return data
            }).catch(err => {
                return err
            })
    },
    // 修改分类信息
    updateCateInfo(params) {
        return fetch(`${clientConfig.api}bankend/sweetCate/update`, parseParams('POST', params))
            .then(checkStatus)
            .then(_parseResponse)
            .then(data => {
                return data
            }).catch(err => {
                return err
            })
    },
    // 删除分类信息
    deleteCateInfo(id) {
        return fetch(`${clientConfig.api}bankend/sweetCate/delete`, parseParams('DELETE', { id }))
            .then(checkStatus)
            .then(_parseResponse)
            .then(data => {
                return data
            }).catch(err => {
                return err
            })
    },
    // 获取所有分类
    getCateAll() {
        return fetch(`${clientConfig.api}bankend/sweetCate/all`, parseParams())
            .then(checkStatus)
            .then(_parseResponse)
            .then(data => {
                return data
            }).catch(err => {
                return err
            })
    },

    // 获取甜品详情列表
    getSweetList({ currentPage, limit, sort }) {
        sort = sort ? `&sort=${sort}` : ''
        return fetch(`${clientConfig.api}bankend/sweetInfo/list?limit=${limit}&currentPage=${currentPage}${sort}`, parseParams())
            .then(checkStatus)
            .then(_parseResponse)
            .then(data => {
                console.log(data)
                return data
            }).catch(err => {
                return err
            })
    },
    // 添加甜品详情
    addSweetInfo(params) {
        return fetch(`${clientConfig.api}bankend/sweetInfo/add`, parseParams('POST', params))
            .then(checkStatus)
            .then(_parseResponse)
            .then(data => {
                return data
            }).catch(err => {
                return err
            })
    },
    //查询甜品详情
    getSweetInfo(id) {
        return fetch(`${clientConfig.api}bankend/sweetInfo/view/${id}`, parseParams())
            .then(checkStatus)
            .then(_parseResponse)
            .then(data => {
                return data
            }).catch(err => {
                return err
            })
    },
    // 修改甜品详情
    updateSweetInfo(params) {
        return fetch(`${clientConfig.api}bankend/sweetInfo/update`, parseParams('POST', params))
            .then(checkStatus)
            .then(_parseResponse)
            .then(data => {
                return data
            }).catch(err => {
                return err
            })
    },
    // 删除甜品详情
    deleteSweetInfo(id) {
        return fetch(`${clientConfig.api}bankend/sweetInfo/delete`, parseParams('DELETE', { id }))
            .then(checkStatus)
            .then(_parseResponse)
            .then(data => {
                return data
            }).catch(err => {
                return err
            })
    }
}