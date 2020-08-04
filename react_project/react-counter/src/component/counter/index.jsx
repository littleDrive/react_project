import React from 'react'

class Counter extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    // increase = ()=> {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    //     this.props.count(1)
    // }

    // decrease = ()=> {
    //     this.setState({
    //         count: this.state.count - 1
    //     })
    //     this.props.count(-1)
    // }


    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.number != this.props.number) {
    //         this.setState({
    //             count: 0
    //         })
    //     }
    // }

    countAdd = () => {
        this.setState({
            count: this.state.count + 1
        })
         this.props.parent.props.addTotal()
     }

     countSub = () => {
        this.setState({
            count: this.state.count - 1
        })
        this.props.parent.props.subTotal()
    }

    render() {
        return (
            <div>
                <div><button onClick={this.countAdd}>+</button></div>
                <div>{this.state.count}</div>
                <div><button onClick={this.countSub}>-</button></div>
            </div>
        );
    }

    
    
}

export default Counter