import React from 'react';
import List from './List';
import Add from './Add';
import { useToDoApi } from '../hooks/UseToDoApi';

const ToDo = () => {

    const [tasks, setTasks] = useToDoApi([]);

    const add = (task) => {
        const updatedList = [...tasks, task];
        setTasks(updatedList);
    };

    const remove = (task) => {
        const updatedList = tasks.filter(t => t !== task);
        setTasks(updatedList);
    };
    
    const update = (task, isChecked) => {
        task.complete = isChecked;
        setTasks(tasks);
    };
    

    return (
        <main>
            <Add add={add} />
            <List tasks={tasks} remove={remove} update={update} />
        </main>
    );
};

export default ToDo;
