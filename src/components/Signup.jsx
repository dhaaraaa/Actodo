import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Signup(props) {
    const [enteredusername,seteusername]=useState()
    const[password,setpassword]=useState()
    const navigate=useNavigate()
    const users = props.users
    const setusers = props.setusers

    function handleUinput(event){
           seteusername(event.target.value)
    }
    function handlePinput(event){
        setpassword(event.target.value)
    }
    function adduser(){
        setusers([...users,{username:enteredusername,password:password}])
        navigate("/Login")
    }
  return (
    <div className='bg-black p-10'>
        <div className='bg-[#EFEFEF] p-10 border rounded-md'>
            <h1 className='text-3xl font-medium'>Hey hi</h1>
            <p>Signup:)</p>

            <div className='flex flex-col gap-2 my-2'>
                 <input type='text' className='w-52 border-black p-1 bg-transparent border rounded-md'
                 placeholder='Username'onChange={handleUinput}></input>
                 <input type='text' className='w-52 border-black p-1 bg-transparent border rounded-md'
                 placeholder='Password' onChange={handlePinput}></input>
                 <input type='text' className='w-52 border-black p-1 bg-transparent border rounded-md'
                 placeholder='Confirm Password'></input>
                 <button className='bg-[#fca201] w-20 h-7 rounded-md' onClick={adduser} >signup</button>

                 <p>Already have an account?<Link to={"/"} className='underline'> Login</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Signup
