import React from "react";
import Store from "./Store";

function Stores({stores}) {

    console.log(stores)

    return (
        <div>
            {stores.map((store)=> (
                <Store 
                key={store.id}
                name={store.name}
                />
            ))}
        </div>
    );
}

export default Stores