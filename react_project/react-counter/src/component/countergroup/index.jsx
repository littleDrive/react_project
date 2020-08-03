import React from 'react'
import Counter from '../counter'
class CounterGroup extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            number : 0,
            total: 0
        }
        this.handelChange = this.handelChange.bind(this)
        this.countTotal = this.countTotal.bind(this)
    }

	handelChange(event){

        var inputNumber = Number(event.target.value);
        if (!isNaN(inputNumber)) {
            this.setState({
                number : inputNumber
            })

            this.state.total = 0;
        } else {
            alert("error inputs")
            this.setState({
                number : 0
            })
        }
    }

    countTotal(counter) {
        this.setState({
            total: this.state.total + counter
        })
    }

 

    render() {
        return (
            <div>
                <div>number of counter:<input type="text" onChange={this.handelChange} defaultValue={this.state.number}/></div>
                <div>total: {this.state.total}</div>
                <div>{new Array(this.state.number).fill(0).map((value, index) => (<Counter number={this.state.number} count={this.countTotal} key={index}/>))}</div>
            </div>
        );
    }
    
}

export default CounterGroup