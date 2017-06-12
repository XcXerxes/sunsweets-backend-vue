const setCookie = (name, value, expiredays) => {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    const expires = !expiredays ? '' : `;expires=${exdate.toGMTString()}`
    document.cookie = `${name}=${escape(value)}${expires}`
}

const getCookie = (name) => { 
    var cookies = {}
    var all = document.cookie
    if (all === '') {
        return ''
    }
    var list = all.split(';')// 分离成数组
    for (var i = 0; i < list.length; i++) {
        var item = list[i].trim()
        var p = item.indexOf('=')
        var name = item.substr(0, p)
        var value = item.substr(p + 1)
        value = decodeURIComponent(value)
        cookies[name] = value
    }
    return cookies[name]
    /*let c_start = document.cookie.indexOf(name + "=")
    if (c_start != -1) {
        c_start = c_start + name.length + 1
        let c_end = document.cookie.indexOf(";", c_start)
        if (c_end == -1) {
            c_end = document.cookie.length
        }
        return unescape(document.cookie.substr(c_start, c_end))
    }
    if (document.cookie.length > 0) {

    }
    return ''*/
}

const deleteCookie = (name) => {
    setCookie(name, '', -1)
}

const clearCookie = () => {
    const cookies = document.cookie.split(";")
    for (var i = 0; i < cookies.length; i++) {
        deleteCookie(cookies[i].split('=')[0])
    }
}

// 检查 fetch 请求 状态码
const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        const error = new Error(response.statusText)
        error.response = response
        throw error
    }
}


export {
    getCookie,
    setCookie,
    deleteCookie,
    clearCookie,
    checkStatus
}