import { TodoItem } from "../TodoItem/TodoItem";
import { useTodosContent } from '../../context/TodosContext'

export function TodoList() {
  const todoList = useTodosContent()

  if (todoList.length === 0) {
    return <p>Todo List еще пуст</p>
  }

  return (
    <ul className="list-group">
      {todoList.map(todo =>
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      )}
    </ul>)
}
