import {combineReducers} from 'redux'
import * as qiutu from './pages/qiutu/models/qiutu'
export default combineReducers({
    [qiutu.namespace]: qiutu.reducer
})
