import React from 'react'
import './Header.css'
import homy from '../images/homy.jpg'
import { Parallax } from 'react-parallax'
export default function Header() {
  return (
    // <div className='header'>
      <Parallax className='header headerImg' strength={600} bgImage={homy}>
      <div className='headerTitles'>
        <span className='headerTitleSm'>Therapy You Need</span>
        <span className='headerTitleLg'>Psy-Care </span>
      
      </div>
      </Parallax>
      
      /* <img className='headerImg' src={homy} alt='canot'></img> */
    // </div>
  )
}
