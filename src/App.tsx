import React,{ useState } from 'react';
import TodoList from './components/TodoList.tsx';
import NewTodo from './components/NewTodo.tsx';
import { Todo } from './todo.model.ts';

const App: React.FC = () => {
  const [todos,setTodos] = useState<Todo[]>([]);

const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [...prevTodos, {id: Math.random().toString(), text: text}])
}

const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => prevTodos.filter((todo) => todo.id !== todoId))
}

  return (
  <div className="App">
    <NewTodo todoAddHandler={todoAddHandler}/>
    <TodoList todos={todos} todoDeleteHandler={todoDeleteHandler} />
  </div>
  )
}

export default App;