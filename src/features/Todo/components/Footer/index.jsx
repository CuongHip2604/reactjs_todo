import React from 'react';
import './styles.scss';

Footer.propTypes = {
  
};

function Footer(props) {
  return (
    <div className="footer">
      <span className="_todo_count">0 items</span>
      <ul className="filters">
        <li>
          <a href="#" className="selected">All</a>
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
  );
}

export default Footer;