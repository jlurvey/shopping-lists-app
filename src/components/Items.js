import React from "react";
import Item from "./Item";
import ItemForm from './ItemForm';

function Items({ items, onAddItem, onDeleteItem, onUpdateNeed, stores, displayedStoreName, setDisplayedStoreName }) {

    return (
        <div>
            {items.map((item) => (
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
            <ItemForm
                onAddItem={onAddItem}
                stores={stores}
                displayedStoreName={displayedStoreName}
                setDisplayedStoreName={setDisplayedStoreName}
            />
        </div>
    );
}

export default Items