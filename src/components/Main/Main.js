import { TodoList } from "../TodoList/TodoList";

export function Main({ todoList, deleteTodo, updStatusTodo, deleteAll }) {
  return (
    <main className="py-5">
      <TodoList todoList={todoList} deleteTodo={deleteTodo} updStatusTodo={updStatusTodo} />
      <button onClick={() => deleteAll()} type="button" className="btn btn-danger mt-5">Delete</button>
    </main>
  )
}

