import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './styles.css';
import '@babel/polyfill';
import { store } from './store';
import { ITodo } from './ITodoType';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <App />,
    </Provider>,

    document.getElementById('app')
);
