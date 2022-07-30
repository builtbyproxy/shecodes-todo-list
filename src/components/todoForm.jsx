import React from 'react'

function TodoForm(props) {
  const [value, setValue] = React.useState("");

  // When we detect a change in our input field
  // we want to update our input field's value
  function handleChange(event) {
    setValue(event.target.value)
  }

  // When we detect a submission, using the enter key
  // we want to take the input fields value, and send it 
  // to it's parent
  function handleSubmit(event) {
    event.preventDefault();
    // Send our collected 'newTodo' to our parent
    console.log("I'm going to submit: ", value)
    props.addTodo(value)
    setValue("")
  }

  // Take an item, and add it to our Todo List
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={value} 
        onChange={handleChange}
      />
    </form>
  )
}

export default TodoForm
