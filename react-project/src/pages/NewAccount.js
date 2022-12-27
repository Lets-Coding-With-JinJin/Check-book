import React from 'react';
import { useState } from 'react'; 
import { authService } from '../fBase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {Link} from "react-router-dom";
import './NewAccount.css';
const NewAccount=()=>{
    const [email,setEmail]=useState(""); //hooks의 역할 정리 할 것
    const [password,setPassword]=useState("");
    const [newAccount,setnewAccount]=useState(true);
    const [error,setError]=useState("");
    const onChange=(event)=>{
        const{
            target:{name,value},
        }=event;
        if(name==="email"){
            setEmail(value);
        }
        else if(name==="password"){
            setPassword(value);
        }
    };
    const onSubmit=async(event)=>{
        event.preventDefault();

        try{
            let data;
        
            if(newAccount)
            {
                data=await createUserWithEmailAndPassword(
                    authService,
                    email,
                    password
                );
            }
            console.log(data);
        }catch(error)
        {
            console.log(error.message);
        }
        
    };

    return(
        <div>
            
            <div>
            <div className="Text">회원가입</div>
                <form onSubmit={onSubmit}>
                    <div>
                        <a className='EmailBox'></a>
                        <input className='EmailBox' name="email" type="email" placeholder="Email" required value={email} onChange={onChange}/> 

                    </div>
                    <div>
                    <a className='PasswordBox'></a>
                    <input className='PasswordBox' name="password" type="password" placeholder="Password" required value={password} onChange={onChange}>
                    </input>
                </div>
                <div>
                    <button className="Box_Account"></button>
                    <Link to='/home_login'>
                        <input className="Box_Account" type="submit"  value="Account" />
                    </Link>

                </div>
                </form>
            </div>
        </div>
    )


    };
    export default NewAccount;