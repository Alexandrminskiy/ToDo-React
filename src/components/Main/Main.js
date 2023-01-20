export function Main({ todoList, deleteTodo, updStatusTodo }) {


  const handleDone = () => {

  }
  return (
    <main className="py-5">
      <ul className="list-group">
        {todoList.map((todo, index) =>
          <li key={index + todo.id} className="list-group-item">
            <span>{todo.title}</span>
            <button onClick={() => deleteTodo(todo.id)} type="button" className="btn btn-danger">Delete</button>
            <button onClick={() => updStatusTodo(todo.id)} type="button" className="btn btn-success">Delete</button>
          </li>
        )}
      </ul>
    </main>
  )
}

