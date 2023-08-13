import React, { useState, useEffect } from "react";
import './App.css';

function App() {

  useEffect(() => {
    fetch('http://localhost:3000/items')
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
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
