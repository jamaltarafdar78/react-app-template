import { createStore } from 'redux';
import reducer from './reducer/todos';

export const store = createStore(reducer);
