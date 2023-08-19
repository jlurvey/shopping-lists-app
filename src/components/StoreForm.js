import React, { useState } from 'react';

function StoreForm({ onAddStore }) {

    //contolled form state
    const [form, setForm] = useState({
        name: '',
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
        };
        
        fetch('http://localhost:3000/stores', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then((r) => r.json())
            .then((newStore) => onAddStore(newStore));
        //reset form
        setForm({
            name: '',
        });
    };

    return (
        <div>
            <form id='addStore' onSubmit={handleSubmit}>
                Store Name:
                <input
                    type='text'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                />
                <button type='submit'>Add Store</button>
            </form>
        </div>
    )
};

export default StoreForm;