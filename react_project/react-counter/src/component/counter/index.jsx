import React from 'react'

class Counter extends React.Component{

    constructor(props) {
        super(props);

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
         this.props.countAdd()
     }

     countSub = () => {
         this.props.countSub()
     }

    render() {
        return (
            <div>
                <div><button onClick={this.countAdd}>+</button></div>
                <div>{this.props.count}</div>
                <div><button onClick={this.countSub}>-</button></div>
            </div>
        );
    }

    
    
}

export default Counter