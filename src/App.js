import React, { useState, useEffect } from "react";
import './App.css';
import NavBar from './NavBar';
import Lists from './Lists';
import Items from './Items';
import Stores from './Stores';


function App() {
  
  //items useState
  const [items, setItems] = useState([])

  //fetch items data
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
