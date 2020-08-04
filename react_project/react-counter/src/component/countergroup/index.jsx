import React from 'react'
import CounterApp from '../counter'
class CounterGroup extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            number : 0,
            total: 0
        }
        // this.handelChange = this.handelChange.bind(this)
        // this.countTotal = this.countTotal.bind(this)
    }

	handelChange = (event) => {

        var inputNumber = Number(event.target.value);
        if (!isNaN(inputNumber)) {
            this.props.updateNumber(inputNumber)
        } else {
            alert("error inputs")
            this.props.updateNumber(0)
        }
    }

    // countTotal(counter) {
    //     this.setState({
    //         total: this.state.total + counter
    //     })
    // }

 

    render() {
        return (
            <div>
                <div>number of counter:<input type="text" onChange={this.handelChange} defaultValue={this.state.number}/></div>
                <div>total: {this.props.total}</div>
                <div>{new Array(this.props.number).fill(0).map((value, index) => (<CounterApp  parent={this} key={index}/>))}</div>
            </div>
        );
    }
    
}

export default CounterGroup