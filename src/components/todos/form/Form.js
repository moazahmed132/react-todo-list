import React from 'react'

const Form = (props) => {
  return (
    <div>
      <form className="form-container" onSubmit={props.addTodo}>
        <input
          className="form-input"
          type="text"
          onChange={props.updateTodo}
          value={props.current}
        />
        <button type="submit" className="myButton">Add Todo</button>
      </form>
    </div>
  )
}

export default Form;
