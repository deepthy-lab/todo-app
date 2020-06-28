import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class logout extends Component {
    constructor(props){
        super(props)
        localStorage.removeItem("token")
    }
    render() {
        return (
            <div>
                <h1 className="center blue-text">Logged Out Successfully!!!</h1>
                <Link to="/">Back to Login Page</Link>
            </div>
        )
    }
}
