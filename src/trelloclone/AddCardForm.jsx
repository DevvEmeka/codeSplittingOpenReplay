import React, { useState } from 'react';
import './trello.css';

function AddCardForm({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form className="add-card-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a card..."
      />
      <button className='btn_submit' type="submit">Add Card</button>
    </form>
  );
}

export default AddCardForm;
