import { TodoItem } from "../TodoItem/TodoItem";

export function TodoList({ todoList, deleteTodo, updStatusTodo }) {
    if (todoList.length === 0) {
        return <p>Todo List еще пуст</p>
    }

    return (
        <ul className="list-group">
            {todoList.map(todo =>
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    updStatusTodo={updStatusTodo} />
            )}
        </ul>)
}
