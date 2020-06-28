import React, { Component } from 'react'
import Tasks from './Tasks'
import AddTask from'./AddTask';
import FlipMove from "react-flip-move";
import {Redirect, Link} from 'react-router-dom'

window.id=0;
export default class TaskPage extends Component {
    constructor(props){
        super(props);
        const token=localStorage.getItem("token")
        let loggedIn=true
        if(token==null){
            loggedIn=false
        }
        
     this.state={
        task:[],
        loggedIn
    }
     };
     addTask=(tasks)=>{
               tasks.id=window.id++;
               let task=[...this.state.task, tasks];
               this.setState({
                   task
               })
     }
     deleteTask=(id)=>{
       const task=this.state.task.filter(task=>{
         return task.id!== id
       });
       this.setState({
         task
       })
     }
    render() {
        if(this.state.loggedIn===false){
            return <Redirect to="/"></Redirect> 
        }
        return (
            <div className="container">
            <Link to="/logout">logout</Link>
             <div className="App">
               <h1 className="center blue-text">Tasks To Do!!!
              </h1>
               <FlipMove duration={250} easing="ease-out">
               <AddTask addTask={this.addTask}/>
               </FlipMove>
                <Tasks tasks={this.state.task} deleteTask={this.deleteTask}/>
             
            </div>
            </div>
        )
    }
}
