import React from 'react'

function TodoItem(props) {
  const { myTodo } = props
  return (
    <div>{myTodo}</div>
  )
}

export default TodoItem
