import React, { useEffect } from "react";
import {useState} from 'react';  
import { dbService } from "fBase";
import { getDocs,query,collection, orderBy, addDoc, serverTimestamp, onSnapshot } from "firebase/firestore";
import Nweet from "components/Nweet";
import {Link} from "react-router-dom"
import { FiChevronRight } from "react-icons/fi";
import './Home.css';
const Home=({userObj})=>
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
          if(el.options[i].value == str)
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
            <div>   
            <div >
                <input className="container1" onChange={onChange} value={nweet} type="text" placeholder="What's on your mind?" maxLength={120}/>            

            </div>
            <div >
                <input className="container2" onChange={onChange1} value={nweet1} type="text" placeholder="What's on your mind?" maxLength={120}/>           

            </div>    
            <div >
                <input className="container3" onChange={onChange2} value={nweet2} type="text" placeholder="What's on your mind?" maxLength={120}/>                

            </div>          
            <form onSubmit={onSubmit}>
            <select className= "selection" id='book' onChange={changeCategory1}>
                    <option value='공개'>공개</option>
                    <option value='비공개'>비공개</option>
                    
            </select>
                <input className="submit" type="submit" value="Nweet" /> 
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
            
        </div>

    );

};
export default Home;

