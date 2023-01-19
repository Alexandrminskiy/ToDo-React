import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { useState } from 'react'

function App() {
  const [todoList, setTodoList] = useState([])

  const [number, setNumber]=useState([])

  const addToList = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      status: false,
    }

    return setTodoList((prev) => [...prev, newTodo])
  }


  const handleClick = (event) => {
    return setNumber(prev => {
      let test = prev;
      test++
      // console.log(prev);
      return test++;
    })
  };
  
  return (
    <div className='container py-5'>
      <Header addToList={addToList} />
      {number}

      <button onClick={handleClick}>+1</button>
      <Main list={todoList} />
      <Footer changeTodo={setTodoList} />
    </div>
  );
}

export { App }
