import React from 'react';
import './App.css';
import { useRecoilValue } from 'recoil';
import {todoListState} from './Store/state';
import TodoItemCreator from './Components/TodoItemCreator';

function App() {

  const todoList = useRecoilValue(todoListState)


  return (
   <>
    {}
    {}
    <TodoItemCreator />
    {todoList.map((todoItem) => (
      <TodoItem key={todoItem.id} item={todoItem} />
    ))}
   </>
  );
}

export default App;
