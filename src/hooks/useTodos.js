import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { TODO_KEY_IN_LS } from '../util/constants'

const useTodos = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const todosFromLS = localStorage.getItem(TODO_KEY_IN_LS);
    const prepairedTodos = todosFromLS ? JSON.parse(todosFromLS) : [];

    if (prepairedTodos.length) {
      setTodoList(prepairedTodos)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TODO_KEY_IN_LS, JSON.stringify(todoList))
  }, [todoList])

  const addToList = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      status: false,
    }

    return setTodoList((prev) => [...prev, newTodo])
  }

  const deleteTodo = (id) => {
    setTodoList(prev => prev.filter((todo) => todo.id !== id))
  }

  const updStatusTodo = (id) => {
    setTodoList(prev => prev.map(todo => {
      if (todo.id === id) return {
        ...todo,
        status: !todo.status
      }
      return todo
    }))
  }

  const deleteAll = () => {
    setTodoList([])
  };

  return {
    addToList,
    deleteTodo,
    updStatusTodo,
    deleteAll,
    todoList
  }
}

export { useTodos }