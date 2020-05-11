import React, { Component } from 'react'
import Form from './form/Form'
import Todo from './list/Todo'

class Todos extends Component {

  state = {
    Todos: localStorage.getItem('Todos') ? JSON.parse(localStorage.getItem('Todos')) : [],
    Done_Todos: localStorage.getItem('Done_Todos') ? JSON.parse(localStorage.getItem('Done_Todos')) : [],
    current: ''
  }


  deleteTodo = (index) => {
    let Todos = this.state.Todos;
    Todos.splice(index, 1)
    localStorage.setItem('Todos', JSON.stringify(Todos));
    this.setState({
      Todos
    })
  }
  doneTodo = (index) => {
    let Todos = this.state.Todos;
    let Done_todos = this.state.Done_todos;
    Done_todos.push(Todos[index])
    Todos.splice(index, 1)
    localStorage.setItem('Todos', JSON.stringify(Todos));
    this.setState({
      Todos,
      Done_todos
    })

    localStorage.setItem('Done_todos', JSON.stringify(Done_todos));

  }
  updateTodo = (e) => {
    console.log(e.target.value)
    this.setState({
      current: e.target.value
    })
  }

  addTodo = (e) => {
    e.preventDefault();
    let current = this.state.current.trim();
    let Todos = this.state.Todos;
    if (current !== "") {
      Todos.push({ name: current })
      localStorage.setItem('Todos', JSON.stringify(Todos));
      this.setState({
        Todos,
        current: ''
      })
    }
  }

  editTodo = (index, value) => {
    let { Todos } = this.state;
    let Todo = Todos[index]
    Todo['name'] = value;
    localStorage.setItem('Todos', JSON.stringify(Todos));

    this.setState({
      Todos
    })

  }

  render() {

    const { Todos } = this.state;
    const TodosList = Todos.map((TodoItem, index) => {
      return <Todo
        editTodo={this.editTodo}
        details={TodoItem}
        key={index}
        index={index}
        deleteTodo={this.deleteTodo}
        doneTodo={this.doneTodo} />
    })
    return (

      <section className="App" >
        <h2>Todos List</h2>
        <Form
          updateTodo={this.updateTodo}
          addTodo={this.addTodo}
          current={this.state.current} />
        <ul className="list-container" >{TodosList}</ul>
      </section >
    );
  }
}


export default Todos
