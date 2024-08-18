import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Login(props) {
    const navigate=useNavigate()
    const [enteredusername,seteusername]=useState()
    const[password,setpassword]=useState()
    const[registereduser , setreguser]=useState(true)
   
    const users = props.users
    function checkuser(){
        var userfound = false
        users.forEach(function(item)
        {
            if(item.username===enteredusername && item.password===password)
            {
                console.log("login successful")
                userfound=true
                navigate("/Landing",{state:{user:enteredusername}})
            }
          
        })
        if(userfound===false)
        {
            console.log("login failed")
            setreguser(false)
        }
    }
    function handleUinput(event){
           seteusername(event.target.value)
    }
    function handlePinput(event){
        setpassword(event.target.value)
    }
  return (
    <div className='bg-black p-10'>
        <div className='bg-[#EFEFEF] p-10 border rounded-md'>
            <h1 className='text-3xl font-medium'>Hey hi</h1>
           {registereduser?<p>I help you manage your activities after you login:)</p >: <p className='text-red-600'>pls sign up before login</p>}

            <div className='flex flex-col gap-2 my-2'>
                 <input type='text' className='w-52 border-black p-1 bg-transparent border rounded-md'
                 placeholder='Username'onChange={handleUinput} ></input>
                 <input type='text' className='w-52 border-black p-1 bg-transparent border rounded-md'
                 placeholder='Password' onChange={handlePinput}></input>
                
                 <button onClick={checkuser} className='bg-[#8272DA] w-20 h-7 rounded-md'>Login</button>

                 <p>Don't  have an account?<Link to={"/signup"} className='underline'>Signup</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Login
