import { useState, useEffect } from 'react';
const todoApiUrl = 'https://todo-api-ff.azurewebsites.net/api/todo';
export function useToDoApi(initialState = []) {

    const [tasks, setTasks] = useState(initialState);

    const loadTasksFromServerAsync = async () => {
        const items = await getItems();
        setTasks(items);
    };

    const saveChangesCallback = async (tasks) => {
        await saveItems(tasks);
        setTasks(tasks);
    };

    useEffect(() => {
        loadTasksFromServerAsync();
    }, []);

    return [tasks, saveChangesCallback];
};

async function getItems() {
    const request = await fetch(todoApiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "userid": "myuserid"
        }
    });

    const itemsJson = (await request.text()) || "[]";
    return JSON.parse(itemsJson);
}

async function saveItems(items) {
    const data = JSON.stringify(items);
    await fetch(todoApiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "userid": "myuserid"
        },
        body: data
    });
}

