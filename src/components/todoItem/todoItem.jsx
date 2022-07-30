import React from 'react'

import './todoItem.css'

function TodoItem(props) {
  const { myTodo, completeTodo, index, removeTodo } = props

  /**
  * Our ternary to add a className 
  * is doing the following check:
  *  if(myTodo.isComplete) {
  *    return 'complete'
  *  } else {
  *    return ''
  *  }
  */

  /**
   * A ternary would be written: 
   * const className = myTodo.isComplete
   *  ? 'complete'
   *  : '
   */

  return (
    <div className={`todo ${myTodo.isComplete ? 'complete' : ''}`}>
      {myTodo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Mark Complete</button>
        <button onClick={() => removeTodo(index)}>X</button>
      </div>
    </div>
  )
}

export default TodoItem
