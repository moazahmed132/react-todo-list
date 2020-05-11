import React from 'react'

const Done_todo = (props) => {
  return (
    <div>
      <li className="todo-list">
        <span>{props.details.name}</span>
        <i className="fas fa-trash-alt " onClick={() => { props.deleteTodo(props.index) }}></i>
      </li>
    </div>
  )
}
export default Done_todo;
