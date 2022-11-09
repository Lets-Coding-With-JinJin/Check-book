import React from 'react';
import Header from './pages/Header'
import Board from "./pages/BookNotePage/Board";
import Router from "./routes/Router";
import "./Views.css";

function Views() {
    return (
        <div >
            <div id="header" className="header">
                <Header/>
            </div>
            <div id="sidebar" className="sidebar">
                <Board />
            </div>
            <div id="content" className="content">
                <Router />
            </div>
        </div>
    );
}

export default Views;