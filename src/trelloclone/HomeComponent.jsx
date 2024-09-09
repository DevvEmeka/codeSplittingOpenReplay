import React, { useState, Suspense } from 'react';
import './trello.css';

// Dynamic imports using React.lazy
const Board = React.lazy(() => import('../trelloclone/Board'));
const List = React.lazy(() => import('../trelloclone/List'));
const Card = React.lazy(() => import('../trelloclone/Card'));
const AddCardForm = React.lazy(() => import('../trelloclone/AddCardForm'));

function HomeComponent() {
  const [tasks, setTasks] = useState({
    'To Do': [],
    'In Progress': [],
    'Done': [],
  });

  const addCard = (listTitle, text) => {
    setTasks({
      ...tasks,
      [listTitle]: [...tasks[listTitle], text],
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Trello Project Management App</h1>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Board>
          {Object.keys(tasks).map((listTitle) => (
            <List key={listTitle} title={listTitle}>
              {tasks[listTitle].map((task, index) => (
                <Card key={index} content={task} />
              ))}
              <AddCardForm onAdd={(text) => addCard(listTitle, text)} />
            </List>
          ))}
        </Board>
      </Suspense>
    </div>
  );
}

export default HomeComponent;
