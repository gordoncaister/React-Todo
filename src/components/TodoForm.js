import React from "react";
class TodoForm extends React.Component  {
    constructor() {
        super();
        this.state ={
            toDoName:""
        }

    }
    handleChange = event=>{
        this.setState({toDoName:event.target.value})
    }
    onSubmit = event => {
        event.preventDefault();
        console.log(this.state.toDoName)
        this.props.handleSubmit(this.state.toDoName)
    }
    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <label>Input a ToDo here: {"   "} 
                <input
                 type="text" 
                 name="toDo"
                 value={this.state.toDoName}
                 onChange={this.handleChange}
                 />
                <button>Submit</button>
                </label>
            </form>
        )
    }
    
}

export default TodoForm;