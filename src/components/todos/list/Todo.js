import React, { Component, Fragment } from 'react'

class Todo extends Component {
  state = {
    isEdit: false

  }

  renderTodo = (props) => {
    return (
      <li className="todo-list">
        <span>{this.props.details.name}</span>
        <i className="fas fa-trash-alt " onClick={() => { this.props.deleteTodo(this.props.index) }}></i>
        <i className="fas fa-pen-square " onClick={() => { this.toggleState() }}  ></i>
        {/* <input type="checkbox" onClick={() => { this.props.doneTodo(this.props.index) }} ></input>*/}
        {<i className="far fa-circle" onClick={() => { this.props.doneTodo(this.props.index) }}></i>}

      </li>

    )
  }

  updateTodoItem = (e) => {
    e.preventDefault();
    this.props.editTodo(this.props.index, this.input.value)
    if (this.input.value.trim() !== "") {
      this.toggleState()
    }
  }

  renderUpdateForm = () => {
    return (
      <form onSubmit={this.updateTodoItem}>
        <input className="form-input"
          type="text" ref={(v) => { this.input = v }} defaultValue={this.props.details.name} />
        <button className="myButton">Update</button>
      </form>
    )
  }

  toggleState = () => {
    let { isEdit } = this.state;
    this.setState({
      isEdit: !isEdit
    })
  }

  render() {
    let { isEdit } = this.state
    return (
      <Fragment >
        {isEdit ? this.renderUpdateForm() : this.renderTodo()}
      </Fragment>
    );
  }
}

export default Todo