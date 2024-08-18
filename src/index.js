import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter  , Route,Routes} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Landing from './components/Landing';
import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Apps(){
    const[users,setusers]=useState([
        {
            username:"ammu",
            password:"123"
        },{
             username:"xyz",
            password:"123"
        }
    ])
    return(
<div>
    <BrowserRouter>
    <Routes>
     <Route path='/Login' element={<Login users={users} setusers={setusers}/>}></Route>
     <Route path='/signup' element={<Signup users={users} setusers={setusers}/>}></Route>
     <Route path='/Landing' element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter>
    <App />

    </div>

    )
}
root.render(
    <Apps/>
);

