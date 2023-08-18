import React, {useState} from "react";
import Item from "./Item";

function Items({ items }) {

    const [form, setForm] = useState({
        name: '',
        store: ''
    });

    console.log(form)

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
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
            <form >
                Item Name: <input type='text' name='name' value={form.name} onChange={handleChange} />
                Store: <input type='text' name='store' value={form.store} onChange={handleChange}/>
            </form>
        </div>
    );
}

export default Items