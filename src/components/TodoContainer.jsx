import React from 'react'
import ActodoForm from './ActodoForm'
import Todolist from './Todolist'
import { useState } from 'react'
function TodoContainer() {
  const[activity,setactivity]=useState([
    {
        id:1,
        activity:"Go for a walk"
    },
    {
        id:2,
        activity:"Get up early"
    },
    {
        id:3,
        activity:"have a breakfast"
    }
 ]) 
  return (
    <div>
       <div className='flex gap-5 flex-wrap'>
        <Todolist activity={activity} setactivity={setactivity}></Todolist>
        <ActodoForm activity={activity} setactivity={setactivity}></ActodoForm>

        
        </div>
    </div>
  )
}

export default TodoContainer
