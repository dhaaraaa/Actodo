import React from 'react'
import Todoitem from './Todoitem'
function ActodoForm(props) {
   const activity=props.activity
   const setactivity=props.setactivity
    return (
        <div className='flex-grow'>
            <div className='bg-green-200 border rounded-md p-2 '>

                <h1 className='text-2xl font-medium'>Todo Activity</h1>
                {activity.length===0?<p>You haven't added anything yet</p>:""}
                {
                    activity.map(function(item,index){
                        return <Todoitem item={item} index={index} id={item.id} activity={activity} setactivity={setactivity}></Todoitem>
                    })
                }
            </div>
        </div>
    )
}

export default ActodoForm
