import React, { Profiler, useState } from "react";
import { HashRouter as Router, Route,Navigate, Routes} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import App from "./App";
import Navigation from "components/Navigation";
import {redirect} from "react-router-dom";

const AppRouter= ({isLoggedIn,userObj})=>{
   
    return(
        <Router>
            {isLoggedIn && <Navigation />} 
            <Routes>
                {isLoggedIn ?
                (
                <>
                <Route path="/" element={<Home userObj={userObj}/>} ></Route>
                <Route path="/profile" element={<Profile/>} />
                <Route path="/" element={<Navigate replace to="/" />} />

                </>
                )
                : (
                <>
                <Route path="/" element={<Auth/>} />
                <Route path="/profile" element={<Navigate replace to="/" />} />

                </>

                )}
            </Routes>
            
        </Router>
    );
                };
export default AppRouter;