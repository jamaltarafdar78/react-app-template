import * as React from 'react';
import { AddNewTodoAction, addNewTodo } from '../reducer/todos';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export const TodoSubmit = ({
    addNewTodo,
}: {
    addNewTodo: AddNewTodoAction;
}) => {
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

const mapStateToProps = (state: any) => ({});
const mapDispatchToProps = { addNewTodo };

export const ConnectedTodoSubmit = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoSubmit);
