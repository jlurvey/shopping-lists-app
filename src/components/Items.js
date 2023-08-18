import React from "react";
import Item from "./Item";

function Items({ items }) {

    const [form, setForm] = useState({
        name: '',
        store: ''
    });


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
            <form onChange={{/* handleChange */ }}>
                Item Name: <input type='text' name='name' value={''} />
                Store: <input type='text' name='store' value={''} />
            </form>
        </div>
    );
}

export default Items