import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './styles.css';
import '@babel/polyfill';
import { store } from './store';
import { ITodo } from './ITodoType';

const addNewTodo = (newTodo: string) => {
    const { todos } = store.getState();
    const payload: ITodo = {
        id: todos.length + 1,
        name: newTodo,
        isComplete: false,
    };
    store.dispatch({ type: 'add', payload });
};

export type addNewTodoType = typeof addNewTodo;

const render = () => {
    const { todos } = store.getState();

    ReactDOM.render(
        <App todos={todos} addNewTodo={addNewTodo} />,
        document.getElementById('app')
    );
};

render();

store.subscribe(render);
