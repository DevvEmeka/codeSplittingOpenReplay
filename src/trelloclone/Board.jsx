import React from 'react';
import './trello.css';

function Board({ children }) {
  return (
    <div className="board">
      <h2 className="board_title">Project Board</h2>
      <div className="lists">
        {children}
      </div>
    </div>
  );
}

export default Board;
