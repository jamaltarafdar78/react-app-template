import todosReducer, { init } from './todos';
import { ITodo } from '../ITodoType';
describe('todos reducer', () => {
    test('state is updated correct - ADD', () => {
        const newTodo: ITodo = { id: 5, name: 'new todo', isComplete: false };

        const { todos } = todosReducer(init, { type: 'add', payload: newTodo });

        expect(todos.length).toBe(init.todos.length + 1);
    });
});
