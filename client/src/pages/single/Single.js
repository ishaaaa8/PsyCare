import React from 'react'
import Sidebar from '../../components/Sidebar'
import './Single.css'
import Singlepost from '../../components/Singlepost'
export default function Single() {
  return (
    <div className='single'>
        <Singlepost/>
        <Sidebar/>
    </div>
  )
}
