import React, { useState } from 'react'

function Item({ name, store, need }) {

    function handleNeedClick() {
        //POST request
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