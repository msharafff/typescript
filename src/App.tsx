
import Todos from './component/Todos';  
import TodoContextProvider from './store/Todos-context';
import './App.css';
import NewTodo from './component/NewTodo';

function App() {

 

  return (
    <TodoContextProvider>
      <NewTodo/>
      <Todos/>
    </TodoContextProvider>
  );
}

export default App;
