import React, { Component } from 'react';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/HomePage/Home'
import BookNote from './pages/BookNotePage/BookNote'
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BookNote/:BookNoteId" element={<BookNote />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
