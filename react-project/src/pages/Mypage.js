import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import {useState} from 'react';  
import { dbService } from "../fBase";
import { getDocs,query,collection, orderBy, addDoc, serverTimestamp, onSnapshot } from "firebase/firestore";
import Nweet from "../Nweet";
import {Link} from "react-router-dom"
import { FiChevronRight } from "react-icons/fi";

import './BoardForm.css'
import Navbar from '../components/Navbar_login';


const Mypage = ({userObj})=>
{
    console.log(userObj);
    const [nweet,setNweet]= useState("");
    const [nweet1,setNweet1]= useState("");
    const [nweet2,setNweet2]= useState("");
    const [nweets, setNweets] = useState([]);
    const [category, setCategory] = useState('')
    const [category1, setCategory1] = useState('오')

    const changeCategory = (e) => {
        setCategory(e.target.value);
    }
    const changeCategory1=(event)=>{
        const { 
            target:{value},
    } = event;
    setCategory1(value);

    }
    
    
    return (
        <>
            <div className="Navbar">
                <Navbar />
            </div>
            <div className="write column">
                <div className="title"><h1 id='header'>읽고 있는 책</h1></div>
                <div className='subtitle'><p id='subtitle'>현재 총 n권을 읽고 있어요.</p></div>
            </div>
            
            <div>
                {nweets.map((nweet)=>(
                    <Nweet
                        key={nweet.id}
                        nweetObj={nweet}
                        //isOwner={nweet.creatorId===userObj.uid}
                    />
                ))}
            </div>
                
            <div className="booklist column">
                <div className="title"><h1 id='header'>마이페이지</h1></div>
                <div className="list">
                    <ul>
                        <li><a href='/mypage'>읽고있는 책</a></li>
                        <li><a href='/mypage'>독서 기록</a></li>
                        <li><a href='/mypage'>내 정보</a></li>
                    </ul>
                    
                </div>
            </div>
        </>
    );
};

export default Mypage;