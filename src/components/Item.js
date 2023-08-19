import React, { useState } from 'react'

function Item({ id, name, store, need, onUpdateNeed, onDeleteItem }) {

    //PATCH fetch request to update need
    function handleNeedClick() {
        fetch(`http://localhost:3000/items/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                need: !need,
            }),
        })
            .then((r) => r.json())
            .then((updatedItem) => onUpdateNeed(updatedItem))
    };

    function handleDeleteClick() {
        //DELETE request
        fetch(`http://localhost:3000/items/${id}`, {
            method: 'DELETE',
        })
            .then((r) => r.json())
            .then(() => onDeleteItem(id));

    };

    return (
        <li className={need ? 'need' : ''}>
            <span>{name}</span>
            <span className='store'>{store}</span>
            <button className={need ? 'need' : ''} onClick={handleNeedClick}>
                {need ? 'Need' : 'Do not need'}
            </button>
            <button onClick={handleDeleteClick}>Delete</button>
        </li>
    );
};
export default Item;