import React, { useContext } from 'react'
import './Navbar.css'
import { SocialIcon } from 'react-social-icons'
import { Link } from 'react-router-dom';
import {Context} from '../context/Context'
import logo_no_bg from '../images/logo_no_bg.png'
export default function Navbar() {
    const {user , dispatch}=useContext(Context);
    const handleLogout = () => {
        dispatch({type:"LOGOUT"});
    }; 
  return (
    <div className='navbar'>
        <div className="navleft">
            {/* logo + services */}
            <img src={logo_no_bg} style={{height:"50px",width:"150px"}}></img>
           
        </div>
        <div className='navcenter'>
            <ul className='navlist'>
                <li className='navlistitem'>
                    <Link className='link' to='/'>HOME</Link>            
                 </li>
                <li className='navlistitem'>
                    <Link className='link' to='/'>ABOUT</Link>
                    </li>
                    
                <li className='navlistitem'>
                    <Link className='link' to='/'>SUPPORT</Link>
                    </li>
                <li className='navlistitem'>
                    <Link className='link' to='/'>
                    CONSULT
                    </Link>
                </li>
                <li className='navlistitem'>
                    <Link className='link' to='/Write'>
                    WRITE
                    </Link>
                </li>
                <li className='navlistitem' onClick={handleLogout}>
                   { user && "LOGOUT"} 
                    
                </li>
            </ul>
        </div>
        <div className='navright'>
            {
                user? (
                    <img className='profileimg' src={user.profilePic} alt='profile'></img>
                ) : 
                (
                    <ul className='navlist'>
                        <Link className='link navlistitem' to='/login' >LOGIN</Link>            
                        <Link className='link navlistitem' to='/register'>REGISTER</Link>            
                        </ul>
 
                )
            }
           
        </div>
    </div>
  )
}
