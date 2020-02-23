import {testPost} from '../services/qiutu'

export default {
  namespace: 'qiutu',
  state: {
    data: 'init'
  },
  reducers: {
    test(state,{payload}){
      return {
        ...state,
        data: 'test'
      }
    },
   
    testPostSuccess(state,{payload}){
      return {
        ...state,
        data: payload
      }
    }

  },
  effects: {
    * testPost({payload},{call,put}){
      const {data} = yield call(testPost,payload)
      yield put({type:'testPostSuccess', payload:data})
    },
  },
} 




