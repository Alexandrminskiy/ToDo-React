import React, { useContext } from "react";
import { useTodos } from '../hooks/useTodos'

export const TodosHelpersContext = React.createContext();
export const TodosContext = React.createContext();

export function TodoContextProvider({ children }) {
  const { addToList, deleteAll, deleteTodo, todoList, updStatusTodo } = useTodos()

  const todosContextData = {
    addToList, deleteAll, deleteTodo, updStatusTodo
  }

  return (
    <TodosContext.Provider value={todoList} >
      <TodosHelpersContext.Provider value={todosContextData}>
        {children}
      </TodosHelpersContext.Provider>
    </TodosContext.Provider >
  )
}

export const useTodosContent = () => useContext(TodosContext)
