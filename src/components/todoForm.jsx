import React from 'react'

function TodoForm(props) {
  const [newTodo, setNewTodo] = React.useState('')
  const { addTodo } = props

  function handleChange(event) {
    console.log("event target: ", event.target.value)
    setNewTodo(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    addTodo(newTodo)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="Text" 
        placeholder="Enter a todo"
        onChange={handleChange}
        value={newTodo}
      />
    </form>
  )
}

export default TodoForm
