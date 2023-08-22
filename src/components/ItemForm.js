import React, { useEffect, useState } from 'react';

function ItemForm({ onAddItem, stores, displayedStoreName, setDisplayedStoreName }) {
    /* 
        //contolled form state
        const [form, setForm] = useState({
            name: '',
            store: '',
        });
     */
    const [formItem, setFormItem] = useState('');
    const [formStore, setFormStore] = useState('')

    useEffect(() => {
        if (stores.length > 0) {
            setFormStore(stores[0].name)
        }
    }, [stores]);

    useEffect(() => {
        setFormStore(displayedStoreName)
    }, [displayedStoreName]);


    /* 
        //check if stores has rendered
        useEffect(() => {
            if (stores.length > 0) {
                displayedStoreName ? 
                setForm({ name:form.name ,store: displayedStoreName })
                : 
                setForm({ name:form.name ,store: stores[0].name })
            }
        }, [form.name, stores, displayedStoreName])
     */

    //controlled form listener
    function handleNameChange(e) {
        setFormItem(e.target.value);

    };

    function handleStoreChange(e) {
        setFormStore(e.target.value);
    };

    //submitForm event listener, POST new item to server with need=true, update items state
    function handleSubmit(e) {
        e.preventDefault();

        const formData = {
            name: formItem,
            need: true,
            store: formStore,
        };

        setFormItem(e.target.value);
        setFormStore(e.target.value);

        fetch('http://localhost:3000/items', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then((r) => r.json())
            .then((newItem) => onAddItem(newItem));
        //reset form
        setFormItem('');
        setFormStore(formStore);
    };

    return (
        <div>
            <form className='add' onSubmit={handleSubmit}>
                Item Name:
                <input
                    type='text'
                    name='name'
                    value={formItem}
                    onChange={handleNameChange}
                />
                Store:
                <select
                    form='addItem'
                    type='select'
                    name='store'
                    value={formStore}
                    onChange={handleStoreChange}
                >

                    {stores.map((store) => <option key={store.id} value={store.name}>{store.name}</option>)}
                </select>
                <button className='add' type='submit'>Add Item</button>
            </form>
        </div>
    )
};

export default ItemForm;