import {removeActionNameSpace} from '@/utils/withNameSpace'
import {testPost} from '../services/qiutu'

export const namespace = 'qiutu'

const initState = {
  data: 'init'
}

const reducerHandler = (state = initState, action) =>{
  switch(action.type){
    case 'TEST':
      return {
        ...state,
        data: 'test'
      }
    case 'TEST_POST':
      return {
        ...state,
        data: 'testpost'
      }
    case 'TEST_POST_SUCCESS':
      return {
        ...state,
        data: action.payload
      }
    default:
      return state
      
  }
}
export const reducer = removeActionNameSpace(namespace,reducerHandler);


const namespaceActionCreator = (action) => {
  return {
    ...action,
    type: `${namespace}${action.type}`,
  }
}
// action creator 作为effect
export const requestPost = payload => (dispatch, getState) => {
  dispatch(namespaceActionCreator({type:'TEST_POST'}));

  return testPost(payload)
    .then(({data}) => dispatch(namespaceActionCreator({type:'TEST_POST_SUCCESS', payload:data})))
  }

