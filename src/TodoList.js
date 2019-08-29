import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import Todo from './Todo';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { TodosContext } from './context/todos.conext';



function TodoList() {
  const { todos } = useContext(TodosContext);
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, idx) => (
            <div key={todo.id}>
              <Todo
                {...todo}
                id={todo.id}
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
