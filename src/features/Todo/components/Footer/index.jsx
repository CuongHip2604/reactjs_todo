import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';

Footer.propTypes = {};

function Footer(props) {
  const listTodo = useSelector((state) => state.todos);
  const [isTodo, setIsTodo] = useState(false);
  useEffect(() => {
    if (listTodo.length > 0) {
      setIsTodo(true);
    }
  }, [listTodo]);
  return (
    <div>
      {isTodo && (
        <div className="footer">
          <span className="_todo_count">{listTodo.length} items</span>
          <ul className="filters">
            <li>
              <a href="#" className="selected">
                All
              </a>
            </li>
            <li>
              <a href="#">Active</a>
            </li>
            <li>
              <a href="#">Completed</a>
            </li>
          </ul>
          <button className="_clear_completed">Clear Completed</button>
        </div>
      )}
    </div>
  );
}

export default Footer;
