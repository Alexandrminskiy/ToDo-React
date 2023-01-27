import { useContext } from 'react'
import { TodosHelpersContext } from '../../context/TodosContext'

export function TodoItem({ todo }) {
  const { deleteTodo, updStatusTodo } = useContext(TodosHelpersContext)


  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className={todo.status ? "text-decoration-line-through" : ""}>{todo.title}</span>
      <div >
        <button onClick={() => deleteTodo(todo.id)} type="button" className="btn btn-danger mx-2">Delete</button>
        <button onClick={() => updStatusTodo(todo.id)} type="button" className="btn btn-success">Done</button>
      </div>
    </li>
  )
}
