import * as React from 'react';
import { addNewTodoType } from '../index';
import { TodoSubmit } from './TodoSubmit';

export const TodoForm = ({
    todos,
    renderItem,
    addNewTodo,
}: {
    todos: any;
    renderItem: (todo: any) => React.ReactNode;
    addNewTodo: addNewTodoType;
}) => {
    return (
        <div className="Todo-App">
            <TodoSubmit addNewTodo={addNewTodo} />
            <div className="Todo-List">
                <ul>{todos.map(renderItem)}</ul>
            </div>
        </div>
    );
};
