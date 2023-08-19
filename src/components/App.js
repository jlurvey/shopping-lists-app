import React, { useState, useEffect } from "react";
import '../App.css';
import NavBar from './NavBar';
import Lists from './Lists';
import Items from './Items';
import Stores from './Stores';
import { Route, Switch } from 'react-router-dom'


function App() {

  //items, stores useState
  const [items, setItems] = useState([]);
  const [stores, setStores] = useState([])

  //fetch items data
  useEffect(() => {
    fetch('http://localhost:3000/items')
      .then((r) => r.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  //fetch stores data
  useEffect(() => {
    fetch('http://localhost:3000/stores')
      .then((r) => r.json())
      .then((data) => {
        setStores(data);
      });
  }, []);

  //addItem update items state
  function handleAddItem(newItem) {
    setItems([...items, newItem])
  };

  //deleteItem update items state
  function handleDeleteItem(id) {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  //updateNeed update items state
  function handleUpdateNeed(updatedItem) {
    //map to create new array with updated item
    const updatedItems = items.map((item) => {
      if (item.id === updatedItem.id) {
        return updatedItem;
      } else {
        return item
      }
    });
    setItems(updatedItems);
  };

  //addItem update items state
  function handleAddStore(newStore) {
    setStores([...stores, newStore])
  };

  //deleteItem update items state
  function handleDeleteStore(id) {
    const updatedStores = stores.filter((store) => store.id !== id);
    setStores(updatedStores);
  };

  return (
    <div className="App">
      <header >
        Shopping Lists
      </header>
      <NavBar />
      <Switch>
        <Route exact path='/lists'>
          <Lists />
        </Route>
        <Route exact path='/items'>
          <Items
            items={items}
            onAddItem={handleAddItem}
            onDeleteItem={handleDeleteItem}
            onUpdateNeed={handleUpdateNeed}
            stores={stores}
          />
        </Route>
        <Route exact path='/stores'>
          <Stores stores={stores} onAddStore={handleAddStore} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
