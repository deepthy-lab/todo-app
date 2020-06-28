import React, { Component } from 'react';


class AddTask extends Component{
    state={
        content:""
    }

    changeHandler=(e)=>{
          this.setState({
              content:e.target.value
          }
          )
    }

    submitHandler=(e)=>{
      e.preventDefault();
      this.props.addTask(this.state);
      this.setState({
          content:''
      })

    }
    render(){
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <label>Add Task and Press Enter</label>
                    <input type="text" onChange={this.changeHandler} value={this.state.content}/>

                </form>
            </div>
        );
    }
}

export default AddTask