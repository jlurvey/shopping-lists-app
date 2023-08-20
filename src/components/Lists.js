import React, { useState } from "react";
import Item from './Item';

function Lists({ items, onAddItem, onDeleteItem, onUpdateNeed, stores }) {

    const [itemsToDisplay, setItemsToDisplay] = useState(items.filter((item) => (
        item.store === stores[0].name)));

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
            {itemsToDisplay.map((item) => (
                <Item
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    store={item.store}
                    need={item.need}
                    onDeleteItem={onDeleteItem}
                    onUpdateNeed={onUpdateNeed}
                />
            ))}

        </div>
    );
}

export default Lists