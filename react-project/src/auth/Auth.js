import React from 'react';  
import { useState } from 'react'; 
import { authService } from '../fBase';
import {Link} from "react-router-dom"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";
import './Auth.css';
const Auth= () => {
    const [email,setEmail]=useState(""); //hooks의 역할 정리 할 것
    const [password,setPassword]=useState("");
    const [newAccount,setnewAccount]=useState(true);
    const [error,setError]=useState("");
    const onChange=(event)=>{  //값이 바뀔 때마다 이 이벤트가 일어남,, input값이 변경
        const {
            target: {name,value},
    } = event;
        if(name==="email"){
            setEmail(value);
        }
        else if(name==="password"){
            setPassword(value);
        }
    };
    const onSubmit = async(event) =>{  // form 제출에 대해서 preventDefault를 씀
        event.preventDefault();

        try{
            let data;
            if(newAccount){
                 data = await createUserWithEmailAndPassword(
                    authService,
                    email,
                    password
                  );
            } else {
                 data = await signInWithEmailAndPassword(
                    authService,
                    email,
                    password
                  );
            }
            console.log(data);
        } catch(error){
            console.log(error.message);
        }
    };
    const toggleAccount = () => setnewAccount((prev)=>!prev);

    return(
    <div>
         {/* <div>
            <Link to="/login">로그인</Link>
            
        </div>
        <div>
            <img className='home-event1' src='./maineventimg.png' alt='img'></img>
        </div>
        <div className="login">로그인</div> */
        // <div>
        //     <button> 
        //       Continue with Google
        //     </button>
              
        // </div>
        /*
        <div className="recommand">
            지금 인기있는 책을 추천드려요
        </div>
        <div className='small_recommand'>
        최근에 가장 많이 조회된 책이에요.
        
        </div>
        <div className="book">
            <span>추천도서 리스트</span>
            <li>목록1</li>
            <li>목록2</li>
        </div>

        <div className="category">
            카테고리별 추천 도서입니다!!!!
        </div>
        <div className="whole_category">전체</div>
        <div className="human_category">인문학</div>
        <div className="history_category">역사</div> */}

    </div>
    
    )
};

export default Auth;