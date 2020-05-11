import React, { Component } from 'react'
import Done_todo from './Done_todo'

class Done_Todos extends Component {


  state = {
    Todos: localStorage.getItem('Todos') ? JSON.parse(localStorage.getItem('Todos')) : [],
    Done_Todos: localStorage.getItem('Done_Todos') ? JSON.parse(localStorage.getItem('Done_Todos')) : [],
    current: ''
  }

  doneTodo = (index) => {
    let Todos = this.state.Todos;
    let Done_Todos = this.state.Done_Todos;
    Done_Todos.push(Todos[index])
    Todos.splice(index, 1)
    localStorage.setItem('Todos', JSON.stringify(Todos));
    this.setState({
      Todos,
      Done_Todos
    })
  }
  deleteTodo = (index) => {
    let Done_Todos = this.state.Done_Todos;
    Done_Todos.splice(index, 1)
    localStorage.setItem('Done_Todos', JSON.stringify(Done_Todos));
    this.setState({
      Done_Todos
    })
  }

  deleteAll = () => {
    console.log("deleteAll");

    let Done_Todos = this.state.Done_Todos;
    Done_Todos = []
    localStorage.setItem('Done_Todos', JSON.stringify(Done_Todos));
    this.setState({
      Done_Todos
    })
  }


  render() {
    const { Done_Todos } = this.state;
    console.log("Done_Todos -> render -> Done_Todos", Done_Todos)

    const Done_TodosList = Done_Todos.map((Todo, index) => {
      return <Done_todo
        details={Todo}
        key={index}
        index={index}
        doneTodo={this.doneTodo}
        deleteTodo={this.deleteTodo} />
    })
    return (
      <div className="Done-todos">
        <ul className="list-container" >{Done_TodosList}</ul>
        <button className="clearAllBtn" onClick={() => { this.deleteAll() }}>Clear All</button>

      </div>
    )
  }
}

export default Done_Todos
