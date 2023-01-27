import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { TodoContextProvider } from './context/TodosContext'

function App() {
  return (
    <TodoContextProvider>
      <div className='container py-5'>
        <Header />
        <Main />
        <Footer />
      </div>
    </TodoContextProvider>
  );
}

export { App }
