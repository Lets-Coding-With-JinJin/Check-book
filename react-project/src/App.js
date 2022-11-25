import React, { Component } from 'react';

import BoardForm from './App_BoardForm';
import BoardList from './App_BoardList';
import BookDetail from './App_BookDetail';
import Header from './Header';
import './App.css'

class App extends Component {
    
    render() {
        return (
            <div>
                <Header/>
                <BookDetail />
            </div>
        );
    }
}

export default App;