import React from 'react';
import Paper from '@material-ui/core/Paper';
import Todo from './Todo';
import List from '@material-ui/core/List';


import Divider from '@material-ui/core/Divider';


function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, idx) => (
            <div key={todo.id}>
              <Todo
                id={todo.id}
                task={todo.task}
                completed={todo.completed}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              />
              {idx < todos.length - 1 && <Divider />}
            </div>
          ))}
        </List>
      </Paper>
    );
    return null;
}

export default TodoList;
