import React from "react";
import Item from "./Item";
import ItemForm from './ItemForm';

function Items({ items, onAddItem, onUpdateNeed }) {

    return (
        <div>
            {items.map((item) => (
                <Item
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    store={item.store}
                    need={item.need}
                    onUpdateNeed={onUpdateNeed}
                />
            ))}
            <ItemForm onAddItem={onAddItem}/>
        </div>
    );
}

export default Items