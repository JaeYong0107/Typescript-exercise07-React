import React from 'react';

import './TodoList.css';

interface TodoListProps {
    todos: {id: string, text: string}[];
    todoDeleteHandler: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({todos,todoDeleteHandler}) => {
    return (
    <ul>
        {todos.map(todo => (
        <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={todoDeleteHandler.bind(null,todo.id)}>DELETE</button>
        </li>
        ))}
    </ul>
    );
};

export default TodoList;