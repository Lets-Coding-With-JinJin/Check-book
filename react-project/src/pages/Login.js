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
    const [password,setPassword]=useState("");
    const [newAccount,setnewAccount]=useState(true);
    const [error,setError]=useState("");
    const navigate=useNavigate
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
            
                 data = await SignInWithEmailAndPassword(
                    authService,
                    email,
                    password
                  );
            
            console.log(data);
        } catch(error){
            console.log(error.message);
        }
    };
    const toggleAccount = () => setnewAccount((prev)=>!prev);
     return(
        <div>
            <div>
                <div className="Text">로그인 Login</div>
             <form onSubmit={onSubmit}>
                <div>
                    <a className='EmailBox'></a>
                    <input className='EmailBox' name="email" type="email" placeholder="Email" required value={email} onChange={onChange}> 
                    </input> 
                </div>
                <div>
                    <a className='PasswordBox'></a>
                    <input className='PasswordBox' name="password" type="password" placeholder="Password" required value={password} onChange={onChange}>
                    </input>
                </div>
                <div>
                    <a className="Box_Account"></a>
                    <input className="Box_Account" type="submit"  value="Create Account" />
                </div>
                <div>
                    <div className="Text_Account">계정이 없으신가요?</div>
                    
                </div>
                {error}
            </form>
                    <Link to="/newAccount">
                        <button className="link_account" value="Go to Make Account"></button>
                    </Link>
            </div>
         
        </div>
        
     )
};
export default Login;