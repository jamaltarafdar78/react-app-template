import { createStore, applyMiddleware } from 'redux';
import reducer, { IAction, ActionTypes } from './reducer/todos';
import { createEpicMiddleware, ActionsObservable } from 'redux-observable';
import { isOfType } from 'typesafe-actions';
import { filter, map, tap } from 'rxjs/operators';

const addNewTodoEpic = (action$: ActionsObservable<IAction>) =>
    action$.pipe(
        filter(isOfType('add_observable')),
        tap(action => console.log(action)),
        map(({ type, payload }) => ({ type: 'add', payload }))
    );

const observableMiddleware = createEpicMiddleware();

export const store = createStore(
    reducer,
    applyMiddleware(observableMiddleware)
);

observableMiddleware.run(addNewTodoEpic);
