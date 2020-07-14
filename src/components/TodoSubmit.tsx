import * as React from 'react';
import { addNewTodoType } from '../index';

export const TodoSubmit = ({ addNewTodo }: { addNewTodo: addNewTodoType }) => {
    const inputRef: React.MutableRefObject<HTMLInputElement> = React.useRef();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        debugger;
        event.preventDefault();
        const newTodo = inputRef.current.value as string;
        addNewTodo(newTodo);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={inputRef} />
            <button type={'submit'}>Add</button>
        </form>
    );
};