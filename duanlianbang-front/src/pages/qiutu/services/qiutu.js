import {request} from '@/utils/request.js'
export const testPost =  payload =>
  request({
    url: '/testPost',
    method: 'POST',
    data: payload
 })
