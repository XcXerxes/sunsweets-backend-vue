import * as types from '../mutation-types'
import api from '@/api'

// 定义分类列表的
const state = {
    data: {}, //  分页的分类列表
    all: [], // 所有的分类
}

const getters = {
    cateList: state => state.data.data,
    data: state => state.data,
    total: state => state.data.total
}

const actions = {
    fetchCateList({ commit, state }, { currentPage, limit, sort }) {
        return new Promise((resolve, reject) => {
            api.getCateList({ currentPage, limit, sort }).then(data => {
                if (data.code == 200) {
                    commit(types.RECEIVE_CATELIST, { data })
                    resolve()
                } else {
                    resolve(data)
                }
            }).catch(err => {
                reject(err)
            })
        })
    },
    fetchAllCate({commit}){
        return new Promise((resolve, reject) => {
            api.getCateAll().then(data => {
                if(data.code == 200){
                    commit(types.RECEIVE_CATEALL,{data})
                    resolve()
                }else{
                    resolve(data)
                }
            })
        }).catch(err => {
            reject(err)
        })
    }
}

const mutations = {
    [types.RECEIVE_CATELIST](state, { data }) {
        state.data = data
    },
    [types.RECEIVE_CATEALL](state, {data}){
        state.all = data.data
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}