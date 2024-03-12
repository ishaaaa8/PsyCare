import React, { useContext } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {Context}from "../context/Context"
import { useRef } from 'react'



export default function Login() {
  const userRef=useRef();
  const passwordRef=useRef();
  const {dispatch, isFetching } = useContext(Context)

  const handleSubmit =async (e) =>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try{
      const res=await axios.post("/auth/login",{
        username:userRef.current.value,
        password: passwordRef.current.value,
      })
      dispatch({type:"LOGIN_SUCCESS",payload:res.data});
    }catch(err){
      dispatch({type:"LOGIN_FAILURE"});
    }
  };
 
  return (
    <div className='login'>
        <span className='logintitle'>Login</span>
      <form className='loginform' onSubmit={handleSubmit}>
        <label> UserName</label>
        <input type='text' placeholder='Enter your username...' className='logininput' ref={userRef}></input>

        <label> Password</label>
        <input type='password' placeholder='Enter your password...' className='logininput' ref={passwordRef}></input>

        <button className='loginbutton' disabled={isFetching}>
            <Link className='link' to='/login'>Login</Link>
        </button>
        <button className='loginregisterbutton'>
            <Link className='link' to='/register'>Register</Link>
        </button>
      </form>
    </div>
  )
}
