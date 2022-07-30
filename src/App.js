import React from 'react';
import './App.css';
import TodoItem from './components/todoItem'
import TodoForm from './components/todoForm'

function App() {
  // Our list of todo items and a function to update them
  const [todos, setTodos] = React.useState([
    "Eat Dinner",
    "Finish SheCodes",
    "Have a shower"
  ])

  // Define a function which will add a new
  // provided todo to our list of todos in state
  function addTodo(todo) {
    // Add todo to state:
    setTodos([...todos, todo])
  }

  // Our regular HTML with ReactComponents
  // We know which element is React because
  // it starts with a capital
  return (
    <div>
      <h1>My Todos</h1>
      {/* 
        loop over each todo and render a react component
        called <TodoItem /> with the todo as a prop
       */}
      {todos.map((todo, index) => {
        return <TodoItem key={index} myTodo={todo} />
      })}

      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
