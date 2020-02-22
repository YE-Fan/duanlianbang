import {request} from 'remax/wechat'
export const testPost = payload =>
  request({
    url: 'https://localhost:7575/testPost',
    method: 'POST',
    data: payload
 })
