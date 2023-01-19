export function Main({ list }) {
  return (
    <main className="py-5">
      <ul className="list-group">
        {list.map((eachTodo, index) =>
          <li key={index + eachTodo.id} className="list-group-item">{eachTodo.title}</li>
        )}
      </ul>
    </main>
  )
}

