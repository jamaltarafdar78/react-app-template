import * as React from 'react';
import { ConnectedTodoSubmit } from './TodoSubmit';
import { ConnectedTodoList } from './TodoList';

export const TodoForm = ({
    renderItem,
}: {
    renderItem: (todo: any) => React.ReactNode;
}) => {
    return (
        <div className="Todo-App">
            <ConnectedTodoSubmit />
            <ConnectedTodoList renderItem={renderItem} />
        </div>
    );
};
