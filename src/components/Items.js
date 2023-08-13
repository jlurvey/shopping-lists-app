import React from "react";

function Items({items}) {

    console.log(items)

    return (
        <div>
            
            {items.map((item)=> (<li key={item.id}>{item.name} - {item.store}</li>))}
            
        </div>
    );
}

export default Items