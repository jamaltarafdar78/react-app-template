import * as React from 'react';
import { hot  } from "react-hot-loader";

interface WithCount {
    count: number;
}

class App extends React.Component<{}, WithCount>{
    state = {
        count: 0
    }

    render(){
      return (
        <div>
        <h1>Hello world</h1>
        <h2 className={this.state.count > 9 ? 'warning' : null}>Count: {this.state.count}</h2>
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

export default hot(module)(App);
