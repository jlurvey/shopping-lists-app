import React, { useState, useEffect } from "react";
import '../App.css';
import NavBar from './NavBar';
import ShoppingLists from './ShoppingLists';
import Items from './Items';
import Stores from './Stores';
import {Route, Switch} from 'react-router-dom'


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
      <NavBar />
      <Switch>
        <Route exact path='/shoppinglists'>
          <ShoppingLists />
        </Route>
        <Route exact path='/items'>
          <Items />
        </Route>
        <Route exact path='/stores'>
          <Stores />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
