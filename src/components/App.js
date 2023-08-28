import React, { useState, useEffect } from "react";
import '../App.css';
import NavBar from './NavBar';
import Lists from './Lists';
import Items from './Items';
import Stores from './Stores';
import Home from './Home';
import { Route, Switch } from 'react-router-dom'


function App() {

    //items, stores useState
    const [items, setItems] = useState([]);
    const [stores, setStores] = useState([])
    const [displayedStoreName, setDisplayedStoreName] = useState('');
    

    //fetch items data
    useEffect(() => {
        fetch('http://localhost:3000/items')
            .then((r) => r.json())
            .then((data) => {
                setItems(
                    data
                        .sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()))
                        .sort((a, b) => b.need - a.need)
                )
            });
    }, []);

    //fetch stores data
    useEffect(() => {
        fetch('http://localhost:3000/stores')
            .then((r) => r.json())
            .then((data) => {
                setStores(data.sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase())));
            });
    }, []);

    //addItem update items state
    function handleAddItem(newItem) {
        const updatedItems = [...items, newItem]
        //alphabetically sort
        updatedItems.sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()))
        //trueFirst sort
        updatedItems.sort((a, b) => b.need - a.need)
        setItems(updatedItems)
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
        //alphabetically sort
        updatedItems.sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()))
        //trueFirst sort
        updatedItems.sort((a, b) => b.need - a.need)
        setItems(updatedItems)
    };

    //addStore update stores state
    function handleAddStore(newStore) {
        const updatedStores = [...stores, newStore]
        //alphabetically sort
        updatedStores.sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()))
        setStores(updatedStores)
    };

    //fetch DELETE items
    function handleDeleteItemsById(id) {
        //DELETE request
        fetch(`http://localhost:3000/items/${id}`, {
            method: 'DELETE',
        })
            .then((r) => r.json())
            .then(() => {
                //const updatedItems = items.filter((item) => item.id !== id);
                const updatedItems = (prevItems => prevItems.filter((item) => item.id !== id))
                setItems(updatedItems);
            });
    };


    //deleteStore update stores state
    function handleDeleteStore(id, name) {
        const updatedStores = stores.filter((store) => store.id !== id);
        const deletedItems = items.filter((item) => item.store === name)
        setStores(updatedStores);
        setDisplayedStoreName(updatedStores[0].name)
        deletedItems.forEach((item) => {
            handleDeleteItemsById(item.id)
        });
    };

    return (
        <div className="App">
            <header>
                Shopping Lists
            </header>
            <NavBar />
            <Switch>
                <Route path='/lists'>
                    <Lists
                        items={items}
                        onAddItem={handleAddItem}
                        onDeleteItem={handleDeleteItemsById}
                        onUpdateNeed={handleUpdateNeed}
                        stores={stores}
                        displayedStoreName={displayedStoreName}
                        setDisplayedStoreName={setDisplayedStoreName}
                    />
                </Route>
                <Route exact path='/items'>
                    <Items
                        items={items}
                        onAddItem={handleAddItem}
                        onDeleteItem={handleDeleteItemsById}
                        onUpdateNeed={handleUpdateNeed}
                        stores={stores}
                        displayedStoreName={displayedStoreName}
                        setDisplayedStoreName={setDisplayedStoreName}
                    />
                </Route>
                <Route exact path='/stores'>
                    <Stores
                        stores={stores}
                        onAddStore={handleAddStore}
                        onDeleteStore={handleDeleteStore}
                    />
                </Route>
                <Route exact path='/'>
                    <Home/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
