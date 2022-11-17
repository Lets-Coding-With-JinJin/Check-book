import React, { Component } from 'react';

import BoardForm from './App_BoardForm';
import BoardList from './App_BoardList';

class App extends Component {
    
    render() {
        return (
            <div>
                <BoardForm/>
                <BoardList/>
            </div>
        );
    }
}

export default App;