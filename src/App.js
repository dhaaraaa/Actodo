import Signup from "./components/Signup";
import { Route } from "react-router-dom";
import Landing from "./components/Landing";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import Login from "./components/Login";
  function App(){
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
     <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
     <Route path='/signup' element={<Signup users={users} setusers={setusers}/>}></Route>
     <Route path='/Landing' element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter>

    </div>

    )
}



export default App;
