import * as React from 'react';

export const TodoForm = ({
    todos,
    renderItem,
}: {
    todos: any;
    renderItem: (todo: any) => React.ReactNode;
}) => (
    <div className="Todo-App">
        <form>
            <input type="text" />
        </form>
        <div className="Todo-List">
            <ul>{todos.map(renderItem)}</ul>
        </div>
    </div>
);
