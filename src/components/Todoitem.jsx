import React from 'react'

function Todoitem(props) {
  const activity = props.activity
  const setactivity = props.setactivity

  function change(deleteid){
        var temparr = activity.filter(function(item){
          if(item.id===deleteid){
            return false
          }else{
            return true
          }
        })
        setactivity(temparr)
  }
  return(
    <div className='flex justify-between'>
     <p>{props.index+1}.{props.item.activity}</p>
     <button className='text-red-600'onClick={()=>change(props.id)}>Delete</button>
    </div>
      
  )
}

export default Todoitem
