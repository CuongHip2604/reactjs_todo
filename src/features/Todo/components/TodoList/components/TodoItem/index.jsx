import React from 'react'
import './styles.scss'

function TodoItem(props) {
  return (
    <div>
      <section className='_main'>
      
      <ul className='todo_list'>
        <li>
          <div className="_view">
            <input type="checkbox" className='_toggle'/>
            <label>aasas</label>
            <button className='_destroy'></button>
          </div>
        </li>
      </ul>
    </section>
    </div>
  )
}

TodoItem.propTypes = {

}

export default TodoItem

