import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader';

interface WithCount {
    count: number;
}

class App extends React.Component<{}, WithCount> {
    state = {
        count: 0,
    };

    render() {
        return (
            <div>
                <h1 data-testid="welcome">Hello world</h1>
                <h2
                    className={this.state.count > 9 ? 'warning' : null}
                    data-testid="count"
                >
                    Count: {this.state.count}
                </h2>
                <button
                    data-testid="incrementCount"
                    onClick={() =>
                        this.setState(state => ({
                            count: state.count + 1,
                        }))
                    }
                >
                    +
                </button>
                <button
                    data-testid="decrementCount"
                    onClick={() =>
                        this.setState(state => ({
                            count: state.count - 1,
                        }))
                    }
                >
                    -
                </button>
            </div>
        );
    }
}

export default hot(module)(App);
