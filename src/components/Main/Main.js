import { TodoList } from "../TodoList/TodoList";

export function Main({ todoList, deleteTodo, updStatusTodo, deleteAll }) {
  return (
    <main className="py-5">
      <todoList todoList={todoList} deleteTodo={deleteTodo} updStatusTodo={updStatusTodo} />
      <button onClick={() => deleteAll()} type="button" className="btn btn-danger mt-3">Delete</button>
    </main>
  )
}

