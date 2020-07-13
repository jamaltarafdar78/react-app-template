import * as React from 'react';
import { ITodo } from '../ITodoType';

export const TodoListItem = (todo: ITodo) => (
    <li key={todo.id}>
        <input type="checkbox" defaultChecked={todo.isComplete} />
        {todo.name}
    </li>
);
