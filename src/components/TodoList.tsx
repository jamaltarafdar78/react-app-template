import * as React from 'react';
import { ITodo } from '../ITodoType';
import { connect } from 'react-redux';

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

const mapStateToProps = ({ todos }: { todos: ITodo[] }) => ({ todos });
export const ConnectedTodoList = connect(mapStateToProps)(TodoList);
