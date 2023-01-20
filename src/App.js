import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

// Когда ререндится компонент
// 1. изменяется его внуреннее состояние
// 2. изменяется состояние props
// 3. если происходит ререндер родителя

function App() {
  const [todoList, setTodoList] = useState([])

  // const [number, setNumber] = useState([])

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

  console.log('App');
24
  // счетчик
  // const handleClick = (event) => {
  //   return setNumber(prev => {
  //     let test = prev;
  //     test++
  //     // console.log(prev);
  //     return test;
  //   })
  // };

  return (
    <div className='container py-5'>
      <Header addToList={addToList} />
      <Main todolist={todoList} deleteTodo={deleteTodo} updStatusTodo={updStatusTodo} />
      <Footer changeTodo={setTodoList} />
      {/* {number} // счетчик} */}
      {/* <button onClick={handleClick}>+1</button> */}
    </div>
  );
}

export { App }
