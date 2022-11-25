import React from 'react';
import {useState} from 'react';
import {authService} from '../fBase';
import {
    createUserWithEmailAndPassword,
    SignInWithEmailAndPassword,
} from "firebase/auth";
import {Link} from "react-router-dom";
import './login.css';
import {useNavigate} from 'react-router-dom';

const Login=()=>{
    const[email,setEmail]=useState("");
    
}