import React, {useState} from "react";

function Lists({ items, onAddItem, onDeleteItem, onUpdateNeed, stores }) {

    const [itemsToDisplay,setItemsToDisplay] = useState(items.filter((item)=>item.store===stores[0].name));
    console.log(itemsToDisplay);

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