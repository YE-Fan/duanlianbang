import {request as wechatRequest} from 'remax/wechat'

const protocol = 'https'
const hostname = 'localhost'
const port = 7575

export const request = async option => {
    option.url = `${protocol}://${hostname}:${port}${option.url}`
    return wechatRequest(option)
}