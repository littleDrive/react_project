import React from 'react'

class Counter extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            counter : 0,
        }
    }
    increase = ()=> {
        this.setState({
            counter: this.state.counter + 1
        })
        this.props.count(1)
    }

    decrease = ()=> {
        this.setState({
            counter: this.state.counter - 1
        })
        this.props.count(-1)
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.number != this.props.number) {
            this.setState({
                counter: 0
            })
        }
    }

    render() {
        return (
            <div>
                <div><button onClick={this.increase}>+</button></div>
                <div>{this.state.counter}</div>
                <div><button onClick={this.decrease}>-</button></div>
            </div>
        );
    }

    
    
}

export default Counter