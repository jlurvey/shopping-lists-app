import React, { useEffect, useState } from 'react';

function ItemForm({ onAddItem, stores, displayedStoreName, setDisplayedStoreName }) {

    //contolled form state
    const [form, setForm] = useState({
        name: '',
        store: '',
    });

    //check if stores has rendered
    useEffect(() => {
        if (stores.length > 0) {
            displayedStoreName ? setForm({ name: '', store: displayedStoreName }) : setForm({ name: '', store: stores[0].name })
        }
    }, [stores, displayedStoreName])

    //controlled form listener
    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        if (e.target.name === 'store') {
            setDisplayedStoreName(e.target.value)
        }
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
            store: form.store
        });
    };

    return (
        <div>
            <form className='addItem' onSubmit={handleSubmit}>
                Item Name:
                <input
                    type='text'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                />
                Store:
                <select
                    form='addItem'
                    type='select'
                    name='store'
                    value={form.store}
                    onChange={handleChange}
                >
                    {stores.map((store) => <option key={store.id} value={store.name}>{store.name}</option>)}
                </select>
                <button type='submit'>Add Item</button>
            </form>
        </div>
    )
};

export default ItemForm;