import React from "react";
import Store from "./Store";
import StoreForm from './StoreForm';

function Stores({stores,onAddStore}) {


    
    return (
        <div>
            {stores.map((store)=> (
                <Store 
                key={store.id}
                name={store.name}
                />
            ))}
            <StoreForm onAddStore={onAddStore}/>
        </div>
    );
}

export default Stores