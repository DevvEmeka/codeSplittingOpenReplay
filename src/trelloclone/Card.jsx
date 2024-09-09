import React from 'react';
import './trello.css'

function Card({ content }) {
  return (
    <div className="card">
      <p>{content}</p>
    </div>
  );
}

export default Card;