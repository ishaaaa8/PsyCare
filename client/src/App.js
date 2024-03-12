import Navbar from './components/Navbar';
import Home from './pages/Home'; 
import Write from './pages/write/Write.jsx';
import './App.css'
import Single from './pages/single/Single.js';
import Settings from './pages/Settings.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import {Router,Routes,Route,Link,} from "react-router-dom";
import Singlepost from './components/Singlepost.js';
import { useContext } from 'react';
import { Context } from './context/Context.js';
function App() {
  const {user} =useContext(Context);
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        {
          <Route exact path='/register' element={user? 
           <Home/> : <Register/>}></Route> 
        }

        {
          <Route exact path='/login' element={user? 
           <Home/> : <Login/>}></Route>
        }
       {
         <Route path='/write' element={user? <Write/> : <Register/>}></Route> 
       }
        {
         <Route path='/settings' element={user? <Settings/> : <Register/>}></Route> 
       }
        
        <Route path='/post/:postID' element={<Singlepost/>}></Route>
      </Routes>
    

     </div>
  );
}

export default App;
