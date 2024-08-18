import React, { useState } from 'react'
function Todolist(props) {
  const activity=props.activity
  const setactivity=props.setactivity

  const [newactivity,setnewactivity]=useState("")

  function input(event){
      setnewactivity(event.target.value)
  }
  function change(){
    setactivity([...activity,{id:activity.length+1,activity:newactivity}])
    setnewactivity("")
  }
  return (
    <div>
      <div  className='flex flex-col gap-3'>
            <h1 className='text-2xl font-medium'>Manage Activities</h1>
            <div className='flex'>
            <input value={newactivity} onChange={input} className='border border-black p-1 bg-transparent'placeholder='Next Activity?'></input>
            <button onClick={change} className='bg-black text-white p-1 border border-black'>add</button>
            </div>
        </div>
    </div>
  )
}

export default Todolist
