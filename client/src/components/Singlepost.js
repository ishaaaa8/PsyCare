import React, { useState,useEffect } from 'react'
import './Singlepost.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { get, set } from 'mongoose';
import { Link } from "react-router-dom"



export default function Singlepost() {



  const location = useLocation();
  const path=location.pathname.split("/")[2];
  const [post,setPost] =useState({});
  useEffect(() => {
    const getPost = async () => {
      const res =await axios.get("/posts/"+path);
      setPost(res.data); 
    }
    
    getPost();
  },[path])

  return (
    <div className='singlepost'>
      <div className='singlepostwrapper'>
        {post.photo && 
        <img src={post.photo} className='singlepostimg'></img>}
        <h1 className='singlePostTitle'>{post.title}
        
        <div className='singlepostedit'>
            <i className='singleposticon far fa-edit'>edit</i>
            <i className='singleposticon far fa-trash-alt'>del</i>
        </div>

        </h1>
        <div className='singlepostinfo'>
            <span className='singlepostauthor'>Author:<b>
              <Link to={`/?user=${post.username}`} className='link'>{post.username}</Link>
              </b></span>
            <span className='singlepostdate'>{new Date(post.createdAt).toDateString}</span>
        </div>
        <p className='singlepostdesc'>
                {post.desc}
            </p>
      </div>
    </div>
  )
}
