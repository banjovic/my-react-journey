import React from 'react';

const Item = ({ task, index, remove, update }) => {
    return (
        <li key={index}>
          <label className="item">
              <input className="item-check" 
                    type="checkbox"
                    defaultChecked={task.complete}
                    onChange={evt => update(task, evt.target.checked)}
                    >
                </input>
              <span className="item-text">{task.value}</span>
              <button className="delete" onClick={evt => remove(task)}>delete</button>
          </label>
        </li>
    );
};

export default Item;
