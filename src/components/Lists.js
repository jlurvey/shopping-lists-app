import React, {useState} from "react";

function Lists({ items, onAddItem, onDeleteItem, onUpdateNeed, stores }) {

    return (
        <div className='App'>
            {stores.map((store) => (
                <button
                    key={store.id}
                    id={store.id}
                >
                    {store.name}
                </button>
            ))}

            
        </div>
    );
}

export default Lists