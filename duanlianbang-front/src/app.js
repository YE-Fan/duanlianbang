import * as React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger  from "redux-logger"
import reducer from './reducers'
import './app.css'

const store = createStore(reducer,applyMiddleware(thunk,logger))

class App extends React.Component {
    render(){
        return(
            <Provider store={store}>
                {this.props.children}
            </Provider>     
        )         
    }
}


export default App;
