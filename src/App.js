import React, { Component } from 'react';
import {Link, BrowserRouter, Route} from "react-router-dom";
import Login from './Login'
import TaskPage from './TaskPage'

class App extends Component{

  
  render(){
    return(
      <BrowserRouter>
        <Route exact path="/" component={Login}>
        </Route>
        <Route path="/TaskPage" component={TaskPage}></Route>
      </BrowserRouter>
    );
  }
}

export default App;