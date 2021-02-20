import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'

function TodoItem(props) {
  return (
    <div>
      <section className='_main'>
      <input id='toggle_all' className='toggle_all' type='checkbox'/>
      <label htmlFor="toggle_all"></label>
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

