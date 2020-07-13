import * as React from 'react';
import { ITodo } from './ITodoType';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader';
import { TodoForm } from '../src/components/TodoForm';
import { TodoListItem } from '../src/components/TodoListItem';

interface WithCount {
    count: number;
}

const App = ({ todos }: { todos: ITodo[] }) => {
    return (
        <div className="App">
            <div className="App-Header">
                <h2>Todo App with Redux</h2>
            </div>
            <TodoForm todos={todos} renderItem={TodoListItem} />
        </div>
    );
};

export default hot(module)(App);
