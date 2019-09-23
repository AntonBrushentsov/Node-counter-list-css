import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super();
        this.props = props;
        console.log('constructor: ', this);
        this.state = {
            count: 0
        };
        this.onIncrease = this.onIncrease.bind(this);
        this.onDecrease = this.onDecrease.bind(this);
        this.onReset = this.onReset.bind(this);
    }
    onIncrease () {
        console.log(this);
        this.setState({ count: this.state.count + 1
        })
    }
    onDecrease () {
        console.log(this);
        this.setState({ count: this.state.count - 1
        })
    }
    onReset () {
        console.log(this);
        this.setState({ count:  this.state.count = 0
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={this.onIncrease}>Increase</button>
                <button onClick={this.onDecrease}>Decrease</button>
                <button onClick={this.onReset}>Reset</button>
            </div>
        )
    }
}
export default Counter