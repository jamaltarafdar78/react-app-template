import { ITodo } from '../ITodoType';

export const init = {
    todos: [
        { id: 1, name: 'Render Static UI', isComplete: true },
        { id: 2, name: 'Create initial state', isComplete: true },
        { id: 3, name: 'Render on state', isComplete: false },
    ],
};

const buildNewTodo = (newTodo: string, newId: number) => {
    const payload: ITodo = {
        id: newId,
        name: newTodo,
        isComplete: false,
    };

    return payload;
};

export type ActionTypes = 'add_observable' | 'add';
export type AddNewTodoAction = (newTodo: string) => IAction;

export interface IAction {
    type: ActionTypes;
    payload: any;
}

export const addNewTodo: AddNewTodoAction = (newTodo: string) => ({
    type: 'add_observable',
    payload: newTodo,
});

export default ({ todos }: { todos: ITodo[] } = init, action: IAction) => {
    switch (action.type) {
        case 'add':
            return {
                todos: todos.concat([
                    buildNewTodo(action.payload, todos.length + 1),
                ]),
            };
        default:
            return { todos };
    }
};
