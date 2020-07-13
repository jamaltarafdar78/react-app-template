import * as React from 'react';
import { addNewTodoType } from '../index';

export const TodoForm = ({
    todos,
    renderItem,
    addNewTodo,
}: {
    todos: any;
    renderItem: (todo: any) => React.ReactNode;
    addNewTodo: addNewTodoType;
}) => {
    const inputRef: React.MutableRefObject<HTMLInputElement> = React.useRef();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        debugger;
        event.preventDefault();
        const newTodo = inputRef.current.value as string;
        addNewTodo(newTodo);
    };

    return (
        <div className="Todo-App">
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputRef} />
                <button type={'submit'}>Add</button>
            </form>
            <div className="Todo-List">
                <ul>{todos.map(renderItem)}</ul>
            </div>
        </div>
    );
};
