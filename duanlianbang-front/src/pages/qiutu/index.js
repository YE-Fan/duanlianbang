import React from 'react'
import { View, 
         Text, 
} from 'remax/wechat'
import {connect} from 'remax-dva'
import qiutu from './models/qiutu'

const namespace = qiutu.namespace;

const mapStateToProps = state =>{
    return {
        data: state[namespace].data
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        test: ()=> dispatch({type: `${namespace}/test`}),
        testPost: (payload)=> dispatch({type: `${namespace}/testPost`, payload}),
    }
}

class QiuTu extends React.Component {

    componentDidMount(){
        console.log("mounted");
        console.log(this.props.data);
        this.props.test()
        console.log(this.props.data);
        this.props.testPost({
            data:"testPostadasfsaf"
        })
    }

    render(){
        return(
            <View>
                <Text>qiutu test</Text>
                <Text>{this.props.data}</Text>
            </View>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(QiuTu);