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
        onDeleteItem(id);
    };

    return (
        <li className={`item-container ${need ? 'need' : 'doNotNeed'}`}>
            <span className="item-name">{name}</span>
            <span className="item-store">{store}</span>
            <div className="item-buttons">
                <button
                    className={`item-button ${need ? 'need' : ''}`}
                    onClick={handleNeedClick}
                >
                    {need ? 'Need' : 'Do not need'}
                </button>
                <button
                    className="item-button delete"
                    onClick={handleDeleteClick}
                >
                    X
                </button>
            </div>
        </li>
    );
}
export default Item;