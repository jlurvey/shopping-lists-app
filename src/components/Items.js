import React, { useState } from "react";
import Item from "./Item";

function Items({ items }) {

    const [form, setForm] = useState({
        name: '',
        store: ''
    });

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    //submitForm event listener, POST new item to server with need=true, update items state

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`Name: ${form.name}, Store: ${form.store}`)
        setForm({
            name: '',
            store: ''
        });
    };


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
            <form onSubmit={handleSubmit}>
                Item Name: <input
                    type='text'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                />
                Store: <input
                    type='text'
                    name='store'
                    value={form.store}
                    onChange={handleChange}
                />
                <button type='submit'>Add Item</button>
            </form>
        </div>
    );
}

export default Items