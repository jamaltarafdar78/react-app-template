import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './styles.css';
import '@babel/polyfill';
import { store } from './store';

const { todos } = store.getState();

ReactDOM.render(<App todos={todos} />, document.getElementById('app'));
