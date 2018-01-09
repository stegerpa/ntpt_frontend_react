import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Root } from './Layout/Root';
import './bootstrap.min.css';

class App extends Component {
    render() {
        return(
            <Root /> 
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));