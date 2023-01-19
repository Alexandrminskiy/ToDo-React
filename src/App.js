import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { useState } from 'react'

function App() {
  const [todoList, setTodoList] = useState([])

  const addToList = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      status: false,
    }

    return setTodoList((prev) => [...prev, newTodo])
  }


  return (
    <div className='container py-5'>
      <Header addToList={addToList} />
      <Main list={todoList} />
      <Footer changeTodo={setTodoList} />
    </div>
  );
}

export { App }
