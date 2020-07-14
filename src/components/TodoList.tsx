import * as React from 'react';
import { ITodo } from '../ITodoType';

export const TodoList = ({
    todos,
    renderItem,
}: {
    todos: ITodo[];
    renderItem: (todo: any) => React.ReactNode;
}) => (
    <div className="Todo-List">
        <ul>{todos.map(renderItem)}</ul>
    </div>
);
