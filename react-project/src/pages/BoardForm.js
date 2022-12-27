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


const BoardForm = ({userObj})=>
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
    useEffect(()=>{
        const q=query(
            collection(dbService,"nweets"),
            orderBy("createdAt","desc")
        );
        onSnapshot(q,(snapshot)=>{
             // 오브젝트로 변환
            const nweetArr=snapshot.docs.map((document)=>({
                id:document.id,
                ...document.data(),

            }));
            console.log("array", nweetArr);
            
            setNweets(nweetArr);
        });
    },[]);
    function selectedControl(){
        const el = document.getElementById('book');  //select box
        const len = el.options.length; //select box의 option 갯수
        const str = document.getElementById('searchValue').value; //입력 받은 value 값
        //select box의 option 갯수만큼 for문 돌림
        for (let i=0; i<len; i++){  
            //select box의 option value가 입력 받은 value의 값과 일치할 경우 selected
          if(el.options[i].value === str)
          {
              el.options[i].selected = true;
          }
        }  
      }
    const onSubmit = async(event) =>{
        event.preventDefault();
       //nweets 상위 폴더 위로 여러 정보를 파에어 베이스에 연결함
       await addDoc(collection(dbService, "nweets"), {
            title:nweet,
            summary:nweet1,
            text:nweet2,
            createdAt: Date.now(),
            //creatorId:userObj.uid,
            category: category,
          

        });
        setNweet("");
        setNweet1("");
        setNweet2("");
        console.log(`${nweet}`);
    };
    const onChange=(event)=>{
        const { 
            target:{value},
    } = event;
    setNweet(event.target.value);
   
    }; 
    const onChange1=(event)=>{
        const { 
            target:{value},
    } = event;
    setNweet1(value);

    };
    const onChange2=(event)=>{
        const { 
            target:{value},
    } = event;
    setNweet2(value);

    };
    return (
        <>
            <div className="Navbar">
                <Navbar />
            </div>
            <div className="write column">
                <input className="booktitle" placeholder="도서 제목을 입력하세요"
                    multiline variant="standard" rows={1} name="booktitle" value={nweet} type="text" onChange={onChange} />
                <input className="booksummary" placeholder="책에서 영감을 받은 부분 혹은 독서 기록을 한 문장으로 요약해주세요."
                    multiline variant="standard" rows={1} name="booksummary" value={nweet1} type="text" onChange={onChange1} />
                <input className="booknote" placeholder="독서 기록 내용을 작성해주세요"
                    multiline variant="standard" rows={20} name="booknote" value={nweet2} type="text" onChange={onChange2} />
            </div>
            <form onSubmit={onSubmit} id="submit-form">
                <select className= "selection" id='book' onChange={changeCategory1}>
                    <option value='공개'>공개</option>
                    <option value='비공개'>비공개</option>
                </select>
                <input className="submit" type="submit" value="독서 기록 작성 완료" /> 
            </form>
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
                <div className="title"><h1 id='header'>독서 기록 작성</h1></div>
                <div className='subtitle'><p id='subtitle'>읽고있는 책 중에서 기록하고자 하는 책을 선택하세요.</p></div>
                <div className="list">
                    <Link className='book1' to='/boardform'>
                        <img id='img-book1' alt='책 표지' />
                        <div className='express'>
                            <div className='row'>
                                <p id='title'>브로콜리 평원의 혈투</p>
                            </div>
                            <div className="bookwriter">
                                <p id='writer-tag'>듀나</p>
                            </div>
                        </div>
                    </Link>
                    <Link className='book2' to='/boardform'>
                        <img id='img-book1' alt='책 표지' />
                        <div className='express'>
                            <div className='row'>
                                <p id='title'>브로콜리 평원의 혈투</p>
                            </div>
                            <div className="bookwriter">
                                <p id='writer-tag'>듀나</p>
                            </div>
                        </div>
                    </Link>
                    <Link className='book3' to='/boardform'>
                        <img id='img-book1' alt='책 표지' />
                        <div className='express'>
                            <div className='row'>
                                <p id='title'>브로콜리 평원의 혈투</p>
                            </div>
                            <div className="bookwriter">
                                <p id='writer-tag'>듀나</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default BoardForm;