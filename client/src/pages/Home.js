import React, {useState, useEffect } from 'react'
import './Home.css' 
import Header from '../../src/components/Header'
import Sidebar from '../components/Sidebar'
import Posts from '../components/Posts'
import axios from "axios"
import { useLocation } from 'react-router-dom'

export default function Home() {

 
  const [posts,setPosts] = useState([]);
  const {search} = useLocation();
  console.log(search);
  // useEffect(() => {
  //   const fetch=async () => {
  //     const response = await axios.get('/posts'+search)
  //     console.log(response.data);
  //     setPosts(response.data)
  //   };
  //   fetch()
  // },[search])
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/posts', { params: { search } });
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, [search]);


  return (
    <div className=''>
        <Header/>
        <div className='home'>
          <Posts posts={posts}/>
          <Sidebar/>
          
        </div>
    </div>
  )
}
