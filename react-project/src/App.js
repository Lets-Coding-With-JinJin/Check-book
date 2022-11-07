import React, { Component, useEffect } from 'react';  
import {useState} from 'react';  
import AppRouter from './Router';
import {authService} from "../fBase";

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
     
     
     </>
   
  );
}

export default App;
