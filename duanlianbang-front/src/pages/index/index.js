import * as React from 'react';
import { View, 
        Text, 
        Image,
        Navigator,
        request
      } 
  from 'remax/wechat';
import styles from './index.module.css';

class Index extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        data: "init"
    }
}

  onReady(){
    this.setState({
      data: "loading"
    })
    request({
      url: "https://duanlianbang.mihile.top:7575/",
    }).then(({data})=>{
      console.log(data);
      this.setState({
        data: data
      })
    })
  }

  render(){
  return (
    
    <View className={styles.app}>
      <View className={styles.header}>
        <Image
          src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
          className={styles.logo}
          alt="logo"
        />
        <View className={styles.text}>
          编辑 <Text className={styles.path}>src/pages/index/index.js</Text>开始
          <Navigator open-type="redirectTo" url="/pages/qiutu/index">页面跳转</Navigator>
          {this.state.data}
        </View>
      </View>
    </View>
    
  );
  }
};

export default Index;