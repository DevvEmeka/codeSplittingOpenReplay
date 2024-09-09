import React from 'react';
import './trello.css';

function List({ title, children }) {
  return (
    <div className="list">
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export default List;
