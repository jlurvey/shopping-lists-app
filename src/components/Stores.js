import React from "react";
import Store from "./Store";
import StoreForm from './StoreForm';

function Stores({ stores, onAddStore, onDeleteStore }) {

    return (
        <div>
            {stores.map((store) => (
                <Store
                    key={store.id}
                    id={store.id}
                    name={store.name}
                    onDeleteStore={onDeleteStore}
                />
            ))}
            <StoreForm onAddStore={onAddStore} />
        </div>
    );
}

export default Stores