import React from 'react'

function Item({ id, name, store, need, onUpdateNeed, onDeleteItem }) {

    //PATCH fetch request to update need
    function handleNeedClick() {
        fetch(`http://localhost:3000/items/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                need: !need,
            }),
        })
            .then((r) => r.json())
            .then((updatedItem) => onUpdateNeed(updatedItem))
    };

    function handleDeleteClick() {
        onDeleteItem(id);
    };

    return (
        <li className={need ? 'need' : 'doNotNeed'}>
            <span >{name}</span>
            <span >{store}</span>
            <div >
                <button
                    className={need ? 'need' : 'doNotNeed'}
                    onClick={handleNeedClick}
                >
                    {need ? 'Need' : 'Do not need'}
                </button>
                <button
                    className='delete'
                    onClick={handleDeleteClick}
                >
                    X
                </button>
            </div>
        </li>
    );
}
export default Item;