import React from "react";
import Store from "./Store";
import StoreForm from './StoreForm';

function Stores({ stores, onAddStore, onDeleteStore }) {

    return (
        <div>
            <StoreForm onAddStore={onAddStore} />
            {stores.map((store) => (
                <Store
                    key={store.id}
                    id={store.id}
                    name={store.name}
                    onDeleteStore={onDeleteStore}
                />
            ))}
        </div>
    );
}

export default Stores