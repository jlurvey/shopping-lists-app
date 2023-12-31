import React from "react";

function Store({ id, name, onDeleteStore }) {

    function handleDeleteClick() {
        //DELETE Request
        fetch(`http://localhost:3000/stores/${id}`, {
            method: 'DELETE',
        })
            .then((r) => r.json())
            .then(() => onDeleteStore(id, name));
    };

    return (
        <li >
            <span>{name}</span>
            <button className='delete' onClick={handleDeleteClick}>X</button>
        </li>
    )
};

export default Store;
