import React, { useState } from 'react';

const Add = ({ add }) => {

    const [text, setText] = useState("");
    const buttonDisabled = text.trim() === "";

    const addItem = () => {
        add({ value: text, complete: false });
        setText("");
    }

    const checkKeyPress = (evt) => {
        if (evt.key === "Enter") {
            addItem(text);
        }
    }

    return (
        <label className="new" htmlFor="new">
            <input id="new" 
                   className="new-input" 
                   type="text" 
                   placeholder="Add new item"
                   value={text}
                   onChange={evt => setText(evt.target.value)}
                   onKeyPress={evt => checkKeyPress(evt)}>

           </input>
           <button id="add" 
                   className="new-button"
                   onClick={addItem}
                   disabled={buttonDisabled}>Add
            </button>
        </label>
    );
};
export default Add;


