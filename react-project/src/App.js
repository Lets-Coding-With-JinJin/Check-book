import React, { Component, useEffect } from 'react';  
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {useState} from 'react';  
import AppRouter from './Router';
import {authService} from "./fBase";

import './App.css';

import Home from './pages/Home';
import Home_login from './pages/Home_login';
import Login from './pages/Login';
import NewAccount from './pages/NewAccount';
import BoardForm from './pages/BoardForm';
import BookDetail from './pages/BookDetail';
import Mypage from './pages/Mypage';

function App() {
  const [Init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn]=useState(false); //로그인 여부를 판별할 수 있음
  const [userObj,setUserObj]=useState(null);
  useEffect(()=>{
    authService.onAuthStateChanged((user)=>{
      if(user){
        setIsLoggedIn(true);
        setUserObj(user);
      }else {
        setIsLoggedIn(false);
      }
      setInit(true);  //변화를 듣고 있음
    });
  },[]);
  
  return (
    <>
   
      {Init ? <AppRouter isLoggedIn={isLoggedIn} userObj={userObj}/> : "Initializing..."}
      <Router>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/home_login" exact={true} element={<Home_login />} />
          <Route path="/login" exact={true} element={<Login />} />
          <Route path="/newaccount" exact={true} element={<NewAccount />} />
          <Route path="/bookdetail" exact={true} element={<BookDetail />} />
          <Route path="/boardform" exact={true} element={<BoardForm />} />
          <Route path="/mypage" exact={true} element={<Mypage />} />
        </Routes>
      </Router> 
     
    </>
   
  );
}

export default App;
