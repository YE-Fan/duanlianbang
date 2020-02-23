import * as React from 'react'
import dva, { connect } from 'remax-dva';
import models from '@/models/models.js'
import './app.css'

const app = dva();

models.forEach(model => {
    app.model(model);
});



class App extends React.Component {
    render(){
        return(
                this.props.children
        )         
    }
}

const AppWithDva = app.start(({ children }) => children);

export default AppWithDva;
