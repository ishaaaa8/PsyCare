import  React, { useState, useEffect} from 'react'
import axios from 'axios';
import './Sidebar.css'

import {Link} from "react-router-dom"

export default function Sidebar() {
  const [cats , setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res= await axios.get("/categories");
      setCats(res.data);
    }  
  },[])
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img src=""></img>
        <p>bdkswfhnlezfjnlzdgjenvzedljgvgdzrbjgd
        </p>
      </div>

      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          {cats.map((c) =>(
            <Link to={`/?cat=${c.name}`} className="link">
              <li className='sidebarListItem'>
            {c.name}
        </li>
            </Link>

            
          ))}
        </ul>
      </div>

      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW US</span>
        <div className='sidebarSocial'>
            <i className='sidebarIcon fab fa-facebook-square'></i>
            <i className='sidebarIcon fab fa-twitter-square'></i>
            
            <i className='sidebarIcon fab fa-instagram-square'></i>
        </div>
       
      </div>

    </div>
  )
}
