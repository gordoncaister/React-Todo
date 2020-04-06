import React from 'react';
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"
const toDoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]
class App extends React.Component {
  constructor(){
    super();
    this.state = { toDos: toDoList} ;
  }
  // you will need a place to store your state in this component. x
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  toggleToDo = toDoId => {
    this.setState({
      toDos: this.state.toDos.map(toDo=> {
        if(toDo === toDo.id){
          console.log(toDo)
          return {
            ...toDo,completed: !toDo.completed
          }
        }
        console.log(toDo)
        return toDo;
      })
    })
  } 
  handleSubmit = toDo => {
    this.setState({toDos:[
      ...this.state.toDos,
      {
        task: toDo,
        id: Math.floor(Math.random()*999999),
        completed: false
      }
    ]})
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleSubmit={this.handleSubmit} />
        <TodoList 
        toDoList={this.state.toDos}
        toggleToDo={this.toggleToDo}
        />
      </div>
    );
  }
}

export default App;
