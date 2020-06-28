import React from 'react'
import App from './App'

const Tasks=({tasks, deleteTask})=>{

    const taskList=tasks.length ?(
        tasks.map(task=> {
            return(
                <div className="collection-item"key={task.id}>
                    <span onClick={()=>{deleteTask(task.id)}}>{task.content}</span>
                </div>
            )
        })
    ): (
        <p className="center"> No Tasks Left for You </p>
    )
    return(
        <div className="react-app collection">
          {taskList}   
        </div>
    )
}

export default Tasks