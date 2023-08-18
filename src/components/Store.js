import React from "react";

function Store({name}) {

    function handleDeleteClick() {
        //DELETE Request?
    };

    return (
        <li>
            <span>{name}</span>
            <button onClick={handleDeleteClick}>Delete</button>
        </li>
    )
};

export default Store;
