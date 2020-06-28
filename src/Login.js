import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

export default class Login extends Component {

    constructor(props){
        super(props)
        let loggedIn=false;
     this.state={
         username:"",
         password:"",
         loggedIn
     }
     this.onChangeHandler=this.onChangeHandler.bind(this)
     this.submitForm=this.submitForm.bind(this)
 }
 onChangeHandler(e){
     this.setState({
         [e.target.name]:e.target.value
     })
 }

 submitForm(e){
     e.preventDefault()
     const{ username, password}= this.state
     if(username==="admin" && password==="admin"){
         localStorage.setItem("token","Admin")
            this.setState({
                loggedIn:true
            })}
        
 }
    render() {
        if(this.state.loggedIn){
            return <Redirect to="/TaskPage"/>
        }
        return (
            <div className= "container">
                <h1 className="center green-text">Login</h1>
                <form onSubmit={this.submitForm}>
                    <input type="text" placeholder="UserName" name="username" value={this.state.username} onChange={this.onChangeHandler}/>
                    <br></br>
                    <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChangeHandler}/>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}
