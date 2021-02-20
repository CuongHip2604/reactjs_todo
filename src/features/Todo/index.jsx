import React from 'react';
import TodoList from './components/TodoList';
import Header from './components/Header'
import Footer from './components/Footer'
import { useSelector } from 'react-redux';

import './styles.scss'

TodoFeature.propTypes = {
  
};

function TodoFeature(props) {

  const todos = useSelector(state => state.todo)

  return (
    <div className='_wrap_todos'>
      <div className="todos">
        <Header />
        <TodoList />
        <Footer />
      </div>
    </div>
  );
}

export default TodoFeature;