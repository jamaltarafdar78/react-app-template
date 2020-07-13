import { ITodo } from '../ITodoType';

export const init = {
    todos: [
        { id: 1, name: 'Render Static UI', isComplete: true },
        { id: 2, name: 'Create initial state', isComplete: true },
        { id: 3, name: 'Render on state', isComplete: false },
    ],
};

type ActionTypes = 'add';

export interface IAction {
    type: ActionTypes;
    payload: any;
}

export default ({ todos }: { todos: ITodo[] } = init, action: IAction) => {
    switch (action.type) {
        case 'add':
            return { todos: todos.concat(action.payload as ITodo[]) };
        default:
            return { todos };
    }
};
