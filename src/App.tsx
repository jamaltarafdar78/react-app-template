import * as React from 'react';

interface WithCount {
    count: number;
}

export class App extends React.Component<{}, WithCount>{
    state = {
        count: 0
    }

    render(){
      return (
        <div>
        <h1>Hello world</h1>
        <h2 className={this.state.count > 0 ? 'warning' : null}>Count: {this.state.count}</h2>
        <button onClick={() => this.setState((state) => ({
                count: state.count + 1
            }))}>+</button>
            <button onClick={() => this.setState((state) => ({
                count: state.count - 1
            }))}>-</button>
    </div>
      )
    }
}
