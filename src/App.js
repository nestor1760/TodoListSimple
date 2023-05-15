import { useState } from 'react';
import TodoList from './Todo/TodoList';
import './index.css';

function App() {
  const [todos, setTodos] = useState([
    {id: 1, disabled: false, title: 'buy milk'},
    {id: 2, disabled: false, title: 'buy bread'},
    {id: 3, disabled: false, title: 'buy butter'},
  ])
  const [value, setValue] = useState('')


  const addItem = (e) => {
    e.preventDefault()
    const item = {
      id: Math.floor(Math.random() * 1000),
      title: value
    }
    setTodos([...todos, item])
    setValue('')
  }

  const removeItem = (id) => {
    console.log(id);
    const newArr = todos.filter(todo => todo.id !== id)
    setTodos(newArr)
  }

  return (
    <div className='wrapper'>
      <h1>Todo App</h1>

      <form>
        <input 
          type='text'
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button onClick={addItem}>Add</button>
      </form>
      <TodoList remove={removeItem} todos={todos}/>
    </div>
  )
}

export default App;
