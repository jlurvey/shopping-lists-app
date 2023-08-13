import React, { useState, useEffect } from "react";
import './App.css';

function App() {

  const [items, setItems] = useState([])

  console.log(items);

  useEffect(() => {
    fetch('http://localhost:3000/items')
      .then((r) => r.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Shopping List
      </header>
    </div>
  );
}

export default App;
