import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import TodoList from './components/TodoList';
import './styles.scss';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  return (
    <div className="_wrap_todos">
      <div className="todos">
        <Header />
        <TodoList />
        <Footer />
      </div>
    </div>
  );
}

export default TodoFeature;
