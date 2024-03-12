import React, { useState } from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default function Register() {
  const [username , setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState(false);
  const handleSubmit = async (e) => {

    e.preventDefault();
    setError(false);
    try{
      const res=await axios.post('/auth/register',{
        username,
        email,
        password
      });
      res.data && window.location.replace("/login");
    }catch(err){
      setError(true);
    }
  };
  return (
    <div className='login'>
        <span className='logintitle'>Register</span>
      <form className='loginform' onSubmit={handleSubmit}>
      <label> Username</label>
        <input type='text' placeholder='Enter your username...' className='logininput'
        onChange={(e) => setUsername(e.target.value)}
        ></input>

        <label> Email</label>
        <input type='text' placeholder='Enter your email...' className='logininput' onChange={(e) => setEmail(e.target.value)}></input>

        <label> Password</label>
        <input type='password' placeholder='Enter your password...' className='logininput' onChange={(e) => setPassword(e.target.value)}></input>
        <button className='registerbutton'>
            <Link className='link' to='/register'>Register</Link>
        
        </button>
      </form>
        <button className='registerloginbutton'>
            <Link className='link' to='/login'>Login</Link>
        </button>
       {error && <span className='error'>Something went wrong!</span>} 
        
    </div>
  )
}
