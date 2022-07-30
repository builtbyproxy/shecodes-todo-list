import React from 'react';
import './App.css';
import TodoItem from './components/todoItem/todoItem'
import TodoForm from './components/todoForm/todoForm'

function App() {
  // Our list of todo items and a function to update them
  // const [todos, setTodos] = React.useState([
  //   "Eat Dinner",
  //   "Finish SheCodes",
  //   "Have a shower"
  // ])

  // Lets change our Todos to be objects which will
  // allow us to mark an object as complete or not complete
  const [todos, setTodos] = React.useState([
    { text: "Eat Dinner", isComplete: false }, // 0
    { text: "Finish SheCodes", isComplete: false }, // 1
    { text: "Have a shower", isComplete: false }, // 2
  ])

  // Lets write a function to now mark a Todo as
  // complete, when I click it
  const completeTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].isComplete = true;
    setTodos(newTodos)
  }

  // Define a function which will add a new
  // provided todo to our list of todos in state
  function addTodo(text) {
    // Add todo to state:
    setTodos([...todos, { text }])
  }

  // Define a function which will remove a todo
  const removeTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  console.log("Found Todos: ", todos)

  // Our regular HTML with ReactComponents
  // We know which element is React because
  // it starts with a capital
  return (
    <div className='app'>
      <div className='todo-list'>
        <h1>My Todos</h1>
        {/* 
          loop over each todo and render a react component
          called <TodoItem /> with the todo as a prop
        */}
        {todos.map((todo, index) =>
          <TodoItem
            key={index}
            index={index}
            myTodo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        )}

        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
