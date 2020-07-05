import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader';

interface WithCount {
    count: number;
}

const App = () => {
    const [count, setCount] = React.useState<number>(0);

    const makeClickHandler = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        setCount(count + parseInt(event.currentTarget.value, 10));
    };

    return (
        <div>
            <h1 data-testid="welcome">Hello world</h1>
            <h2 className={count > 9 ? 'warning' : null} data-testid="count">
                Count: {count}
            </h2>
            <button
                data-testid="incrementCount"
                onClick={makeClickHandler}
                value={1}
            >
                +
            </button>
            <button
                data-testid="decrementCount"
                onClick={makeClickHandler}
                value={-1}
            >
                -
            </button>
        </div>
    );
};

export default hot(module)(App);
