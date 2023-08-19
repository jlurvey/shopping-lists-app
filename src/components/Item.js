import React, { useState } from 'react'

function Item({ id, name, store, need, onUpdateNeed }) {



    //PATCH fetch request to update need
    function handleNeedClick() {
        console.log(`ID: ${id}, Item Name: ${name}, Need? ${need}`)
        fetch(`http://localhost:3000/items/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                need: !need,
            }),
        })
        .then((r)=>r.json())
        .then((updatedItem)=> onUpdateNeed(updatedItem))

    };

    function handleDeleteClick() {
        //DELETE request
    };

    return (
        <li className={need ? 'need' : ''}>
            <span>{name}</span>
            <span className='store'>{store}</span>
            <button className={need ? 'need' : ''} onClick={handleNeedClick}>
                {need ? 'Need' : 'Do not need'}
            </button>
            <button>Delete</button>
        </li>
    );
};
export default Item;