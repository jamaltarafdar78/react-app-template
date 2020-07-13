import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './styles.css';
import '@babel/polyfill';

import { ITodo } from './ITodoType';

const state: { todos: ITodo[] } = {
    todos: [{ id: 5, name: 'new todo', isComplete: false }],
};

ReactDOM.render(<App todos={state.todos} />, document.getElementById('app'));
