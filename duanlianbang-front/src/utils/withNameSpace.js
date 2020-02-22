// 改变reducer的 参数和结果
export const withNameSpace=(namespace, reducer)=>{
    return (state, action)=>{
        // 为传入参数去除 namespace
        action.type = action.type.substring(namespace.length);
        let ret = reducer(state, action)
        // 为返回结果 添加 namespace
        return {
            [namespace]: ret
        }
    }

}

// 改变reducer的参数
export const removeActionNameSpace=(namespace, reducer)=>{
    return (state, action)=>{
        // 为传入参数去除 namespace
        action.type = action.type.substring(namespace.length);
        return reducer(state, action)
        // 添加结果的namespace由combineReducers自动完成
    }
}