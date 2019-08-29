//todos

//all methods to interact w/ todos

import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';

const defaultTodos = [
  { id: 1, task: 'Clean Fishtank', completed: false},
  { id: 2, task: 'Wash Car', completed: true},
  { id: 3, task: 'Grow Beard', completed: false},
];

export const TodosContext = createContext();

export function TodosProvider(props) {
  const {todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(defaultTodos);
  return (
    <TodosContext.Provider value={{todos, addTodo, removeTodo, toggleTodo, editTodo}}>
      {props.children}
    </TodosContext.Provider>
  )
}