import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { useTodos } from './hooks/useTodos';

// Когда ререндится компонент
// 1. изменяется его внуреннее состояние
// 2. изменяется состояние props
// 3. если происходит ререндер родителя


function App() {
  const { addToList, deleteAll, deleteTodo, todoList, updStatusTodo } = useTodos()
  // счетчик
  // const [number, setNumber] = useState([])

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
      <Main
        todoList={todoList}
        deleteTodo={deleteTodo}
        updStatusTodo={updStatusTodo}
        deleteAll={deleteAll} />

      <Footer />
      {/* {number}  */}
      {/* // счетчик} */}
      {/* <button onClick={handleClick}>+1</button> */}
    </div>
  );
}

export { App }
