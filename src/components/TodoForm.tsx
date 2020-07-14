import * as React from 'react';
import { addNewTodoType } from '../index';
import { TodoSubmit } from './TodoSubmit';
import { ConnectedTodoList } from './TodoList';

export const TodoForm = ({
    renderItem,
    addNewTodo,
}: {
    renderItem: (todo: any) => React.ReactNode;
    addNewTodo: addNewTodoType;
}) => {
    return (
        <div className="Todo-App">
            <TodoSubmit addNewTodo={addNewTodo} />
            <ConnectedTodoList renderItem={renderItem} />
        </div>
    );
};
