import React from 'react'
import './Settings.css'
import Sidebar from '../components/Sidebar.js'

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingwrapper">
            <div className="settingtitle">
                <span className='settingupdatetitle'>
                    Update Your Account
                </span>
                <span className='settingupdatetitle'>
                    Delete Your Account
                </span>
            </div>
            <form className='settingform'>
                <label htmlFor="">Profile Picture</label>
                <div className='settingPP'>
                    <img src=''></img>
                    <label htmlFor='fileinput'>
                        <i className='settingPPicon far fa-user-circle'> icon</i>
                    </label>
                    <input type='file' id='fileinput' style={{display:"none"}}></input>
                </div>
                <label>Username</label>
                <input type='text' placeholder='isha'></input>

                <label>Email</label>
                <input type='email' placeholder='itsisha4884@gmail.com'></input>

                <label>Password</label>
                <input type='password' ></input>

                <button className='settingsubmit'>
                    Update
                </button>
            </form>

        </div>
        <Sidebar/>
    </div>
  )
}
