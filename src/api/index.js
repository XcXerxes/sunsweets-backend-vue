import clientConfig from './client-config'
import { getCookie, checkStatus } from '../utils'
import 'whatwg-fetch'

//
const _parseResponse = (response) => response.json()

const headers = {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    sun_userid: getCookie('token')
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
    
}