import React from 'react';
import './styles.scss'
import TodoForm from '../TodoForm';


Header.propTypes = {
  
};

const handleOnSubmit = (values) => {
  console.log('values', values);
}

function Header(props) {
  return (
    <div className='header'>
      <h1>todos</h1>
      <TodoForm  onSubmit={handleOnSubmit}/>
    </div>
  );
}

export default Header;