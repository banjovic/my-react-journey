import React from 'react';
import Item from './Item';
import './List.css';

const List = ({ tasks, remove, update }) => {
   
    const items = tasks.map((task, index) => (
        <Item task={ task } index={index} remove={remove} update={update} />
    ));

   return (<ul id="tasks">
               {items}
            </ul>
   );
};

export default List;

