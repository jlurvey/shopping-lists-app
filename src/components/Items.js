import React from "react";
import Item from "./Item";

function Items({items}) {


    return (
        <div>
            
            {items.map((item)=> (<Item key={item.id} name={item.name} store={item.store} need={item.need}/>))}
            
        </div>
    );
}

export default Items