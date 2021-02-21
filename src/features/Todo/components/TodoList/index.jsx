import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './components/TodoItem';
import './styles.scss';

TodoList.propTypes = {};

function TodoList(props) {
  const listTodo = useSelector((state) => state.todos);
  return (
    <div>
      {listTodo && (
        <div>
          {listTodo.map((todo) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default TodoList;
