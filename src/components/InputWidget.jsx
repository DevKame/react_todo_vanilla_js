
import '@/components/InputWidget.scss';

import { useState } from 'react';

export default function InputWidget({addItem}) {

    const [itemInput, setItemInput] = useState('');

    function handleChange(e) {
        setItemInput(e.target.value);
    }

    function handleButtonClick() {
        const newitem = {
            id: Date.now(),
            entry: itemInput,
            open: true,
        };
        addItem(newitem);
        setItemInput('');
    }

    function handleKeyUp(e) {
        if(e.key === "Enter") {
            handleButtonClick();
        }
    }

    return (
        <aside className='INPUT-WIDGET w-90 mx-auto mt-2 d-f fdir-c jc-s ai-s py-2 px-4 bg-gray-l-20'>
            <h3>New TODO Item</h3>
            <div className="w-100 d-f jc-s ai-c mt-2">
                <input type="text" onKeyUp={handleKeyUp} value={itemInput} onChange={handleChange} className='new-item-input' />
                <button onClick={handleButtonClick} className='ms-auto'>Save!</button>
            </div>
        </aside>
    )
}