import React, { useEffect, useState } from 'react';
import Cardlist from './components/CardList';
import './App.css';

function App() {
  const [users, setusers] = useState([
    // {
    //   id: 1,
    //   name: "Frankenstein"
    // },
    // {
    //   id: 2,
    //   name: "Dracula"
    // },
    // {
    //   id: 3,
    //   name: "Zombie"
    // }
  ]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setusers(users));
  })

  return (
    <>
      <div className="App">
        <Cardlist users={users} />
      </div>
    </>
  );
}

export default App;

