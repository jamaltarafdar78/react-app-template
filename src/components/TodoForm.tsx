import * as React from 'react';
import { addNewTodoType } from '../index';
import { TodoSubmit } from './TodoSubmit';
import { TodoList } from './TodoList';

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
            <TodoList todos={todos} renderItem={renderItem} />
        </div>
    );
};
