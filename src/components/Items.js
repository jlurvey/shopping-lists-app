import React from "react";
import Item from "./Item";
import ItemForm from './ItemForm';

function Items({ items, onAddItem }) {

    return (
        <div>
            {items.map((item) => (
                <Item
                    key={item.id}
                    name={item.name}
                    store={item.store}
                    need={item.need} //remove need from items list, only make available on Lists
                />
            ))}
            <ItemForm onAddItem={onAddItem}/>
        </div>
    );
}

export default Items