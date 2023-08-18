import React, { useState } from 'react';

function ItemForm({ onAddItem, }) {

    //contolled form state
    const [form, setForm] = useState({
        name: '',
        store: '',
    });

    //controlled form listener
    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    //submitForm event listener, POST new item to server with need=true, update items state

    function handleSubmit(e) {
        e.preventDefault();

        const formData = {
            name: form.name,
            need: true,
            store: form.store,
        };
        fetch('http://localhost:3000/items', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then((r) => r.json())
            .then((newItem) => onAddItem(newItem));
        //reset form
        setForm({
            name: '',
            store: ''
        });
    };

    return (
        <div>
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
    )
};

export default ItemForm;