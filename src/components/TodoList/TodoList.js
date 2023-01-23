import { TodoItem } from "../TodoItem/TodoItem";

export function TodoList( todoList, deleteTodo, updStatusTodo ) {
    return (
    <ul className="list-group">
        {todoList.map((todo) =>
            <TodoItem
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                updStatusTodo={updStatusTodo} />
        )}
    </ul>)
}