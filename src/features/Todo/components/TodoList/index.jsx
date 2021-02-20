import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss'
import TodoItem from './components/TodoItem';

TodoList.propTypes = {
  
};

function TodoList(props) {
  return (
    <TodoItem />
  );
}

export default TodoList;