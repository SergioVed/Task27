
import './App.css';
import { TodoList } from './components/todolist';


function App() {
  const todos = [
  {index: 1, title: 'Todo test'},
  {index: 2, title: 'Todo test'},
  {index: 3, title: 'Todo test'},
  {index: 4, title: 'Todo test'}
]

  return (
    <>
      <div className="App">
        <TodoList todos={todos}/>
      </div>
      <button type='button' id='button' >Add todo</button>
    </>
  );
}

export default App;
